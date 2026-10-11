import CinematicHeroBanner from './CinematicHeroBanner';
import { Layers, Code, Cpu, Award, ArrowRight, MessageSquare } from 'lucide-react';

export const Hero = () => {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '88px',
        paddingBottom: '60px',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, var(--bg-primary) 0%, rgba(10, 20, 18, 0.4) 100%)',
      }}
      className="hero-section"
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Cinematic Looping Hero Video Banner */}
        <div style={{ marginBottom: '32px' }} className="hero-banner-container">
          <CinematicHeroBanner />
        </div>

        {/* Agency Introduction & Call to Action Strip */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '780px',
            margin: '0 auto 40px',
          }}
          className="hero-text-block"
        >
          <div
            className="section-badge hero-pill-badge"
            style={{
              justifyContent: 'center',
              marginBottom: '16px',
            }}
          >
            Digital Architecture • Creative Engineering
          </div>

          <h1
            style={{
              fontSize: 'clamp(1.9rem, 6vw, 3.2rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: '16px',
              color: 'var(--text-primary)',
            }}
          >
            Turn Your Ideas Into <span style={{ color: 'var(--accent-primary)' }}>Digital Reality.</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(0.95rem, 3.2vw, 1.15rem)',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              marginBottom: '28px',
              maxWidth: '640px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            We design, develop, and deliver high-impact digital experiences that help businesses build stronger brands,
            connect with customers, and scale with confidence.
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap',
            }}
            className="hero-cta-buttons"
          >
            <a
              href="#services"
              className="hero-btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '14px 28px',
                borderRadius: '30px',
                fontWeight: 700,
                fontSize: '0.95rem',
                background: 'var(--accent-primary)',
                color: 'var(--text-on-accent)',
                boxShadow: '0 8px 25px var(--glow-accent)',
                transition: 'all 0.3s ease',
              }}
            >
              Explore Services <ArrowRight size={17} />
            </a>

            <a
              href="https://wa.me/918072935820?text=Hi%20OberonVision%2C%20I%20would%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-whatsapp mobile-only-flex"
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '14px 24px',
                borderRadius: '30px',
                fontWeight: 700,
                fontSize: '0.95rem',
                background: 'rgba(16, 185, 129, 0.15)',
                color: '#10b981',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                transition: 'all 0.3s ease',
              }}
            >
              <MessageSquare size={17} /> WhatsApp Us
            </a>

            <a
              href="#contact"
              className="hero-btn-secondary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '14px 26px',
                borderRadius: '30px',
                fontWeight: 700,
                fontSize: '0.95rem',
                background: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)',
                transition: 'all 0.3s ease',
              }}
            >
              Let&apos;s Work Together
            </a>
          </div>
        </div>

        {/* Feature Highlights & Value Strip */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
          }}
          className="hero-metrics-grid"
        >
          {[
            {
              icon: <Layers size={20} style={{ color: 'var(--accent-primary)' }} />,
              title: 'Unified Architecture',
              desc: 'Seamless synergy across web, mobile, analytics & marketing.',
            },
            {
              icon: <Cpu size={20} style={{ color: '#00f0ff' }} />,
              title: 'Cinematic Visual Craft',
              desc: 'High-fidelity motion graphics, sleek shaders & fluid UX.',
            },
            {
              icon: <Code size={20} style={{ color: '#ff007f' }} />,
              title: 'Engineering Rigor',
              desc: 'Performant, scalable, secure applications built with precision.',
            },
            {
              icon: <Award size={20} style={{ color: 'var(--accent-primary)' }} />,
              title: 'Commercial Impact',
              desc: 'Elevate brand perception and drive verifiable growth.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-panel interactive-card"
              style={{
                padding: '20px',
                borderRadius: '16px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-color)',
                }}
              >
                {item.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '0.98rem', fontWeight: 700, marginBottom: '4px', color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-section {
            padding-top: 76px !important;
            padding-bottom: 40px !important;
          }
          .hero-banner-container {
            margin-bottom: 24px !important;
          }
          .hero-cta-buttons {
            flex-direction: column !important;
            width: 100% !important;
            gap: 10px !important;
          }
          .hero-btn-primary, .hero-btn-secondary, .hero-btn-whatsapp {
            width: 100% !important;
            padding: 14px 20px !important;
          }
          .mobile-only-flex {
            display: inline-flex !important;
          }
          .hero-metrics-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 12px !important;
          }
        }

        @media (max-width: 480px) {
          .hero-metrics-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
