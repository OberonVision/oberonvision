import { useRef, useEffect, useState } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const CinematicHeroBanner = () => {
  const { isDark } = useTheme();
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // Playback state
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

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

    return () => {
      observer.disconnect();
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
        aspectRatio: '16 / 10',
        minHeight: '360px',
        maxHeight: '520px',
        margin: '0 auto',
        overflow: 'hidden',
        backgroundColor: '#040706',
        borderRadius: '24px',
        boxShadow: isDark
          ? '0 25px 60px rgba(0, 0, 0, 0.85), 0 0 0 1px var(--border-color), 0 0 30px var(--glow-accent)'
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
          filter: isDark ? 'contrast(1.06) saturate(1.08)' : 'contrast(1.02) saturate(1.04)',
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

      {/* Cinematic Inner Framing Border with Warm Champagne/Emerald Sheen */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 3,
          borderRadius: 'inherit',
          boxShadow: isDark
            ? 'inset 0 0 60px rgba(0, 0, 0, 0.8), inset 0 0 24px var(--glow-accent)'
            : 'inset 0 0 50px rgba(0, 0, 0, 0.4), inset 0 0 20px rgba(176, 137, 58, 0.1)',
          border: isDark ? '1px solid var(--border-color)' : '1px solid rgba(255, 255, 255, 0.25)',
        }}
      />

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
            background: 'rgba(5, 10, 8, 0.75)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid var(--border-color)',
            color: 'var(--accent-primary)',
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
            background: 'rgba(5, 10, 8, 0.75)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid var(--border-color)',
            color: isMuted ? 'rgba(255, 255, 255, 0.7)' : 'var(--accent-primary)',
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.6)',
            transition: 'all 0.2s ease',
          }}
        >
          {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
        </button>
      </div>

      {/* Responsive Styles tailored for Split Column & Mobile View */}
      <style>{`
        @media (max-width: 1024px) {
          .cinematic-hero-wrapper {
            aspect-ratio: 16 / 10 !important;
            min-height: 320px !important;
          }
        }

        @media (max-width: 768px) {
          .cinematic-hero-wrapper {
            aspect-ratio: 4 / 3 !important;
            min-height: 260px !important;
            border-radius: 20px !important;
          }
          .banner-controls-strip {
            top: 12px !important;
            right: 12px !important;
          }
        }

        @media (max-width: 480px) {
          .cinematic-hero-wrapper {
            aspect-ratio: 1 / 1 !important;
            min-height: 240px !important;
            border-radius: 18px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CinematicHeroBanner;
