import { useRef, useEffect, useState } from 'react';
import { Volume2, VolumeX, Play, Pause, RotateCcw, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const CinematicHeroBanner = () => {
  const { isDark } = useTheme();
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // Playback state
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Mouse parallax position (only enabled on non-touch devices for maximum mobile performance)
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const animFrameRef = useRef(null);

  // Mouse move parallax (Desktop only)
  const handleMouseMove = (e) => {
    if (!containerRef.current || window.matchMedia('(pointer: coarse)').matches) return;
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

  // Parallax animation loop - automatically skipped on mobile/touch screens to save battery & CPU
  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const loop = () => {
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      const videoEl = videoRef.current;
      if (videoEl) {
        const tiltX = mouseRef.current.y * -3;
        const tiltY = mouseRef.current.x * 5;
        const panX = mouseRef.current.x * -10;
        const panY = mouseRef.current.y * -6;
        videoEl.style.transform = `scale(1.05) translate3d(${panX}px, ${panY}px, 0) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      }

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Video Autoplay & Intersection Observer for Fast Page Loading
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Fast loading: trigger play safely
    const startPlay = () => {
      video.muted = true;
      setIsMuted(true);
      const promise = video.play();
      if (promise !== undefined) {
        promise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    };

    // Pause video when out of viewport to preserve mobile GPU/battery
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
            setIsPlaying(true);
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    startPlay();

    const handleLoadedData = () => setIsVideoLoaded(true);
    video.addEventListener('loadeddata', handleLoadedData);

    return () => {
      observer.disconnect();
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, []);

  // Play / Pause toggle
  const handleTogglePlay = (e) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Replay animation
  const handleReplay = (e) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    video.play().then(() => setIsPlaying(true)).catch(() => {});
  };

  // Audio Toggle
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
        minHeight: '440px',
        maxHeight: '840px',
        margin: '0 auto',
        overflow: 'hidden',
        backgroundColor: '#040706',
        borderRadius: '24px',
        boxShadow: isDark
          ? '0 25px 60px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(0, 240, 255, 0.2), 0 0 30px rgba(0, 240, 255, 0.12)'
          : '0 20px 50px rgba(10, 36, 26, 0.18), 0 0 0 1px rgba(10, 36, 26, 0.15)',
        perspective: '1000px',
        transform: 'translateZ(0)',
        transition: 'box-shadow 0.4s ease',
      }}
    >
      {/* ------------------------------------------------------------- */}
      {/* BANNER.MP4 VIDEO BACKGROUND (CONTINUOUS LOOPING HERO BANNER)  */}
      {/* ------------------------------------------------------------- */}
      <video
        ref={videoRef}
        src="/assets/banner.mp4"
        poster="/assets/frame_9.8.png"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
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
          filter: isDark ? 'contrast(1.06) saturate(1.1)' : 'contrast(1.02) saturate(1.04)',
          transform: 'scale(1.02)',
          transition: 'transform 0.2s ease-out',
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
            ? 'radial-gradient(ellipse 95% 85% at center, rgba(0, 0, 0, 0) 45%, rgba(4, 7, 6, 0.55) 75%, rgba(4, 7, 6, 0.92) 100%)'
            : 'radial-gradient(ellipse 95% 85% at center, rgba(0, 0, 0, 0) 45%, rgba(10, 26, 20, 0.35) 75%, rgba(10, 26, 20, 0.72) 100%)',
        }}
      />

      {/* Cinematic Inner Framing Border with Glowing Rim */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 3,
          borderRadius: 'inherit',
          boxShadow: isDark
            ? 'inset 0 0 60px rgba(0, 0, 0, 0.8), inset 0 0 24px rgba(0, 240, 255, 0.15)'
            : 'inset 0 0 50px rgba(0, 0, 0, 0.4), inset 0 0 20px rgba(0, 135, 138, 0.1)',
          border: isDark ? '1px solid rgba(0, 240, 255, 0.2)' : '1px solid rgba(255, 255, 255, 0.25)',
        }}
      />

      {/* ------------------------------------------------------------- */}
      {/* FLOATING BRAND BADGE OVER VIDEO BACKGROUND                    */}
      {/* ------------------------------------------------------------- */}
      <div
        className="banner-overlay-content"
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          width: '92%',
          maxWidth: '680px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '8px 20px',
            borderRadius: '30px',
            background: 'rgba(3, 8, 6, 0.75)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(0, 240, 255, 0.3)',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7), 0 0 16px rgba(0, 240, 255, 0.25)',
          }}
        >
          <Sparkles size={14} style={{ color: '#00f0ff', filter: 'drop-shadow(0 0 6px #00f0ff)' }} />
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(0.75rem, 2.5vw, 0.92rem)',
              fontWeight: 800,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              textShadow: '0 2px 4px #000000, 0 0 10px rgba(0, 240, 255, 0.8)',
              whiteSpace: 'nowrap',
            }}
          >
            Digital Architecture • Visual Craft
          </span>
          <Sparkles size={14} style={{ color: '#00f0ff', filter: 'drop-shadow(0 0 6px #00f0ff)' }} />
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* TOUCH-FRIENDLY CONTROLS (MUTE & PLAY/PAUSE)                  */}
      {/* ------------------------------------------------------------- */}
      <div
        className="banner-controls-strip"
        style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        {/* Play/Pause Button */}
        <button
          onClick={handleTogglePlay}
          title={isPlaying ? 'Pause Background Video' : 'Play Background Video'}
          aria-label={isPlaying ? 'Pause Background Video' : 'Play Background Video'}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: 'rgba(3, 8, 6, 0.75)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(0, 240, 255, 0.3)',
            color: '#00f0ff',
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.6)',
            transition: 'all 0.2s ease',
          }}
        >
          {isPlaying ? <Pause size={15} /> : <Play size={15} style={{ marginLeft: '2px' }} />}
        </button>

        {/* Audio Mute/Unmute Button */}
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
            background: 'rgba(3, 8, 6, 0.75)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: isMuted ? 'rgba(255, 255, 255, 0.7)' : '#00f0ff',
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.6)',
            transition: 'all 0.2s ease',
          }}
        >
          {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
        </button>
      </div>

      {/* Responsive Styles tailored for Mobile View */}
      <style>{`
        @media (max-width: 1024px) {
          .cinematic-hero-wrapper {
            aspect-ratio: 16 / 9 !important;
            min-height: 380px !important;
          }
        }

        @media (max-width: 768px) {
          .cinematic-hero-wrapper {
            aspect-ratio: 4 / 3 !important;
            min-height: 280px !important;
            border-radius: 20px !important;
          }
          .banner-overlay-content {
            bottom: 14px !important;
          }
          .banner-controls-strip {
            top: 12px !important;
            right: 12px !important;
          }
        }

        @media (max-width: 480px) {
          .cinematic-hero-wrapper {
            aspect-ratio: 1 / 1 !important;
            min-height: 260px !important;
            border-radius: 18px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CinematicHeroBanner;
