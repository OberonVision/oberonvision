import { useRef, useEffect } from 'react';
import { Sparkles, Layers } from 'lucide-react';

export const DedicatedSpace = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let angle = 0;
    let isVisible = false;

    // Resize canvas only on container size change, not every single frame
    const handleResize = () => {
      if (!canvas.parentElement) return;
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    const render = () => {
      if (!isVisible) return;
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;

      ctx.clearRect(0, 0, w, h);
      angle += 0.015;
      const scale = 1 + Math.sin(angle) * 0.06;
      const boxSize = Math.min(w, h) * 0.3 * scale;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle * 0.3);
      ctx.strokeStyle = 'rgba(216, 183, 122, 0.45)';
      ctx.lineWidth = 2;
      ctx.setLineDash([8, 8]);
      ctx.strokeRect(-boxSize / 2, -boxSize / 2, boxSize, boxSize);

      ctx.rotate(-angle * 0.6);
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.5)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([]);
      ctx.strokeRect((-boxSize * 0.7) / 2, (-boxSize * 0.7) / 2, boxSize * 0.7, boxSize * 0.7);
      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    // IntersectionObserver to pause loop when not on screen (major mobile performance win)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible = true;
            cancelAnimationFrame(animId);
            animId = requestAnimationFrame(render);
          } else {
            isVisible = false;
            cancelAnimationFrame(animId);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section ref={containerRef} style={{ padding: '60px 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        <div
          className="glass-panel"
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            padding: '36px 20px',
            borderRadius: '24px',
            background: 'var(--bg-card)',
            border: '2px dashed var(--border-color)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ position: 'absolute', inset: 0, opacity: 0.8, pointerEvents: 'none' }}>
            <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '16px',
                background: 'rgba(216, 183, 122, 0.15)',
                color: 'var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                border: '1px solid var(--border-color)',
              }}
            >
              <Sparkles size={24} />
            </div>
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--accent-secondary)',
                display: 'block',
                marginBottom: '8px',
              }}
            >
              [ Dedicated Innovation Hub ]
            </span>
            <h3
              style={{
                fontSize: 'clamp(1.4rem, 4vw, 2.2rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginBottom: '12px',
              }}
            >
              Something New Is Taking Shape
            </h3>
            <p
              style={{
                fontSize: '0.92rem',
                color: 'var(--text-secondary)',
                maxWidth: '540px',
                margin: '0 auto 20px',
                lineHeight: 1.6,
              }}
            >
              We&apos;re preparing a new visual experience for OberonVision. This space is reserved for a future refresh animation.
            </p>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '20px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--text-muted)',
              }}
            >
              <Layers size={13} /> RefreshAnimationPlaceholder.jsx
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DedicatedSpace;
