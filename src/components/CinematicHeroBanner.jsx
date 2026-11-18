import { useRef, useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export const CinematicHeroBanner = () => {
  const { isDark } = useTheme();
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // Track whether video has ended (shows replay state)
  const [hasEnded, setHasEnded] = useState(false);

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
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => {});
      }
    };

    // Freeze frame when video ends
    const handleEnded = () => {
      setHasEnded(true);
    };

    video.addEventListener('ended', handleEnded);

    // Pause video when out of viewport to preserve mobile GPU/battery
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
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
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  // Click anywhere on video to replay from start
  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    setHasEnded(false);
    video.play().catch(() => {});
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleVideoClick}
      className="cinematic-hero-wrapper hero-banner-media"
      style={{
        position: 'relative',
        width: '100%',
        height: 'auto',
        aspectRatio: '16 / 9',
        overflow: 'hidden',
        backgroundColor: '#040706',
        borderRadius: '16px',
        boxShadow: isDark
          ? '0 25px 60px rgba(0, 0, 0, 0.85), 0 0 0 1px var(--border-color), 0 0 30px var(--glow-accent)'
          : '0 20px 50px rgba(10, 36, 26, 0.18), 0 0 0 1px rgba(10, 36, 26, 0.15)',
        perspective: '1000px',
        transform: 'translateZ(0)',
        transition: 'box-shadow 0.4s ease',
        cursor: hasEnded ? 'pointer' : 'default',
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
        muted={true}
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

      {/* Responsive Styles tailored for Split Column & Mobile View */}
      <style>{`
        @media (max-width: 768px) {
          .cinematic-hero-wrapper {
            aspect-ratio: 16 / 9 !important;
            border-radius: 16px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CinematicHeroBanner;
