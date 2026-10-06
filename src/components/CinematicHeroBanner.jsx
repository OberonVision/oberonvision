import { useRef, useEffect, useState } from 'react';
import { Volume2, VolumeX, RotateCcw, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const CinematicHeroBanner = () => {
  const { isDark } = useTheme();
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // Playback state
  const [isPausedAtLogo, setIsPausedAtLogo] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Mouse parallax position
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const animFrameRef = useRef(null);

  // Mouse move parallax
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    mouseRef.current.targetX = nx;
    mouseRef.current.targetY = ny;
  };

  const handleMouseLeave = () => {
    mouseRef.current.targetX = 0;
    mouseRef.current.targetY = 0;
  };

  // Parallax animation loop
  useEffect(() => {
    const loop = () => {
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      const videoEl = videoRef.current;
      if (videoEl) {
        const tiltX = mouseRef.current.y * -4;
        const tiltY = mouseRef.current.x * 6;
        const panX = mouseRef.current.x * -12;
        const panY = mouseRef.current.y * -8;
        videoEl.style.transform = `scale(1.05) translate(${panX}px, ${panY}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      }

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Handle video playback and pause at the logo facing frame
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Start video playback automatically
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay policy fallback: ensure muted and retry
          video.muted = true;
          setIsMuted(true);
          video.play().catch(() => {});
        });
    }

    // Monitor time and pause right when the logo area is reached and facing front
    const handleTimeUpdate = () => {
      if (!video) return;
      // Pause threshold: when reaching the front-facing logo (9.75s or duration - 0.25s)
      const duration = video.duration || 10.0;
      const pauseThreshold = Math.max(8.8, duration - 0.25);

      if (video.currentTime >= pauseThreshold) {
        video.pause();
        setIsPausedAtLogo(true);
        setIsPlaying(false);
      }
    };

    const handleEnded = () => {
      if (!video) return;
      video.pause();
      setIsPausedAtLogo(true);
      setIsPlaying(false);
    };

    const handleLoadedMetadata = () => {
      setIsVideoLoaded(true);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  // Replay animation from beginning
  const handleReplay = (e) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    setIsPausedAtLogo(false);
    video
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {});
  };

  // Toggle audio
  const handleToggleMute = (e) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="cinematic-hero-wrapper"
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '21 / 9',
        minHeight: '480px',
        maxHeight: '840px',
        margin: '0 auto',
        overflow: 'hidden',
        backgroundColor: '#040706',
        borderRadius: '24px',
        boxShadow: isDark
          ? '0 25px 60px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(0, 240, 255, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          : '0 20px 50px rgba(10, 36, 26, 0.18), 0 0 0 1px rgba(10, 36, 26, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
        perspective: '1000px',
        transition: 'box-shadow 0.5s ease',
      }}
    >
      {/* ------------------------------------------------------------- */}
      {/* BANNER.MP4 VIDEO BACKGROUND (NO CONTROLS, NO TELEMETRY)      */}
      {/* ------------------------------------------------------------- */}
      <video
        ref={videoRef}
        src="/assets/banner.mp4"
        poster="/assets/frame_9.8.png"
        autoPlay
        muted={isMuted}
        playsInline
        preload="auto"
        disablePictureInPicture
        controls={false}
        controlsList="nodownload nofullscreen noremoteplayback"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center center',
          zIndex: 1,
          pointerEvents: 'none',
          filter: isDark ? 'contrast(1.05) saturate(1.08)' : 'contrast(1.02) saturate(1.04)',
          transition: 'transform 0.15s ease-out',
        }}
      />

      {/* Optical Edge Vignettes (Soft Blend with Theme Background) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 2,
          background: isDark
            ? 'radial-gradient(ellipse 95% 85% at center, rgba(0, 0, 0, 0) 50%, rgba(4, 7, 6, 0.45) 80%, rgba(4, 7, 6, 0.88) 100%)'
            : 'radial-gradient(ellipse 95% 85% at center, rgba(0, 0, 0, 0) 50%, rgba(10, 26, 20, 0.3) 80%, rgba(10, 26, 20, 0.65) 100%)',
        }}
      />

      {/* Cinematic Inner Framing Border */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 3,
          borderRadius: '24px',
          boxShadow: isDark
            ? 'inset 0 0 60px rgba(0, 0, 0, 0.75), inset 0 0 24px rgba(0, 240, 255, 0.08)'
            : 'inset 0 0 50px rgba(0, 0, 0, 0.4), inset 0 0 20px rgba(0, 135, 138, 0.08)',
          border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(255, 255, 255, 0.25)',
        }}
      />

      {/* ------------------------------------------------------------- */}
      {/* CRYSTAL-CLEAR TEXT & LOGO SUBTITLE (ADAPTS TO BACKGROUND)     */}
      {/* ------------------------------------------------------------- */}
      <div
        className="banner-overlay-content"
        style={{
          position: 'absolute',
          bottom: '28px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          width: '90%',
          maxWidth: '720px',
          textAlign: 'center',
        }}
      >
        {/* Optical Contrast Backdrop Scrim for Guaranteed Text Readability */}
        <div
          style={{
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '8px 24px',
            borderRadius: '30px',
            background: 'rgba(3, 8, 6, 0.65)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: '1px solid rgba(0, 240, 255, 0.25)',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6), 0 0 15px rgba(0, 240, 255, 0.2)',
          }}
        >
          <Sparkles size={14} style={{ color: '#00f0ff', filter: 'drop-shadow(0 0 6px #00f0ff)' }} />
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)',
              fontWeight: 800,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              textShadow: '0 2px 4px #000000, 0 0 12px rgba(0, 240, 255, 0.8)',
              whiteSpace: 'nowrap',
            }}
          >
            Digital Architecture • Visual Craft
          </span>
          <Sparkles size={14} style={{ color: '#00f0ff', filter: 'drop-shadow(0 0 6px #00f0ff)' }} />
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* SUBTLE INTERACTIVE PILLS (MUTE TOGGLE & REPLAY ANIMATION)    */}
      {/* ------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        {/* Replay Button (Appears or Highlights once paused at logo) */}
        {isPausedAtLogo && (
          <button
            onClick={handleReplay}
            title="Replay Animation"
            aria-label="Replay Animation"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '24px',
              background: 'rgba(3, 8, 6, 0.72)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(0, 240, 255, 0.35)',
              color: '#f3fcf8',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              cursor: 'pointer',
              boxShadow: '0 6px 18px rgba(0, 0, 0, 0.5), 0 0 12px rgba(0, 240, 255, 0.25)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)';
              e.currentTarget.style.borderColor = '#00f0ff';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.6), 0 0 18px rgba(0, 240, 255, 0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.35)';
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.5), 0 0 12px rgba(0, 240, 255, 0.25)';
            }}
          >
            <RotateCcw size={14} style={{ color: '#00f0ff' }} />
            <span>Replay</span>
          </button>
        )}

        {/* Audio Mute/Unmute Toggle */}
        <button
          onClick={handleToggleMute}
          title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: 'rgba(3, 8, 6, 0.72)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            color: isMuted ? 'rgba(255, 255, 255, 0.7)' : '#00f0ff',
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.5)',
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.08)';
            e.currentTarget.style.borderColor = '#00f0ff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
          }}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>

      {/* Responsive Aspect Ratio Rules */}
      <style>{`
        @media (max-width: 1024px) {
          .cinematic-hero-wrapper {
            aspect-ratio: 16 / 9 !important;
            min-height: 420px !important;
          }
        }

        @media (max-width: 768px) {
          .cinematic-hero-wrapper {
            aspect-ratio: 16 / 10 !important;
            min-height: 360px !important;
            border-radius: 18px !important;
          }
          .banner-overlay-content {
            bottom: 16px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CinematicHeroBanner;
