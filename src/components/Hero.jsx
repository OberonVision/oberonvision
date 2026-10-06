import CinematicHeroBanner from './CinematicHeroBanner';
import { Layers, Code, Cpu, Award, ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '96px',
        paddingBottom: '80px',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, var(--bg-primary) 0%, rgba(10, 20, 18, 0.4) 100%)',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Ultra-Wide 21:9 Cinematic Hero Banner (Uncluttered, Paused at Logo Facing Area) */}
        <div style={{ marginBottom: '40px' }}>
          <CinematicHeroBanner />
        </div>

        {/* Agency Introduction & Call to Action Strip */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '780px',
            margin: '0 auto 48px',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: '16px',
              color: 'var(--text-primary)',
            }}
          >
            Turn Your Ideas Into <span style={{ color: 'var(--accent-primary)' }}>Digital Reality.</span>
          </h2>
          <p
            style={{
              fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              marginBottom: '32px',
            }}
          >
            We design, develop, and deliver high-impact digital experiences that help businesses build stronger brands, connect with their customers, and scale with confidence.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="#services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 32px',
                borderRadius: '30px',
                fontWeight: 700,
                fontSize: '0.95rem',
                background: 'var(--accent-primary)',
                color: 'var(--text-on-accent)',
                boxShadow: 'var(--card-shadow)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              Explore Our Services <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 30px',
                borderRadius: '30px',
                fontWeight: 700,
                fontSize: '0.95rem',
                background: 'transparent',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-primary)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Let&apos;s Work Together
            </a>
          </div>
        </div>

        {/* Feature Highlights & Value Strip below the 21:9 Banner */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
          }}
          className="hero-metrics-grid"
        >
          {[
            {
              icon: <Layers size={22} style={{ color: 'var(--accent-primary)' }} />,
              title: 'Unified Architecture',
              desc: 'Seamless synergy across web, mobile, analytics, and marketing platforms.',
            },
            {
              icon: <Cpu size={22} style={{ color: '#00f0ff' }} />,
              title: 'Cinematic Visual Craft',
              desc: 'High-fidelity motion graphics, real-time shaders, and fluid interaction.',
            },
            {
              icon: <Code size={22} style={{ color: '#ff007f' }} />,
              title: 'Engineering Rigor',
              desc: 'Performant, scalable, secure applications engineered with precision.',
            },
            {
              icon: <Award size={22} style={{ color: 'var(--accent-primary)' }} />,
              title: 'Commercial Impact',
              desc: 'Built to elevate brand perception and drive verifiable business growth.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-panel interactive-card"
              style={{
                padding: '24px',
                borderRadius: '16px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'var(--accent-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-color)',
                }}
              >
                {item.icon}
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '6px', color: 'var(--text-primary)' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
