import CinematicHeroBanner from './CinematicHeroBanner';
import { Layers, Code, Cpu, Award, ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';

export const Hero = () => {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '96px',
        paddingBottom: '60px',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, var(--bg-primary) 0%, rgba(10, 20, 18, 0.4) 100%)',
      }}
      className="hero-section"
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* ------------------------------------------------------------- */}
        {/* TWO-COLUMN SPLIT HERO: CONTENT ON LEFT, BANNER ON RIGHT      */}
        {/* ------------------------------------------------------------- */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 1fr',
            gap: '48px',
            alignItems: 'center',
            marginBottom: '56px',
          }}
          className="hero-split-grid"
        >
          {/* LEFT SIDE: Headings, Value Proposition & CTA Actions */}
          <div className="hero-content-column">
            <div
              className="section-badge hero-pill-badge"
              style={{
                marginBottom: '18px',
              }}
            >
              Digital Architecture • Creative Engineering
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.1rem, 4.2vw, 3.4rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                marginBottom: '18px',
                color: 'var(--text-primary)',
              }}
              className="hero-heading"
            >
              Turn Your Ideas Into <span style={{ color: 'var(--accent-primary)' }}>Digital Reality.</span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(0.98rem, 1.8vw, 1.15rem)',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
                marginBottom: '28px',
                maxWidth: '560px',
              }}
              className="hero-desc"
            >
              We design, develop, and deliver high-impact digital experiences that help businesses build stronger brands,
              connect with customers, and scale with confidence.
            </p>

            {/* Call to Action Buttons */}
            <div
              style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
                marginBottom: '28px',
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
                className="hero-btn-whatsapp"
                style={{
                  display: 'inline-flex',
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
                <MessageSquare size={17} /> WhatsApp
              </a>

              <a
                href="#contact"
                className="hero-btn-secondary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '14px 24px',
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

            {/* Quick Trust Highlights Strip */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap',
                fontSize: '0.82rem',
                color: 'var(--text-muted)',
              }}
              className="hero-trust-strip"
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={14} style={{ color: 'var(--accent-secondary)' }} /> Web &amp; Mobile
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={14} style={{ color: 'var(--accent-secondary)' }} /> UI/UX Architecture
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={14} style={{ color: 'var(--accent-secondary)' }} /> Analytics &amp; SEO
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Cinematic Video Banner */}
          <div className="hero-banner-column">
            <CinematicHeroBanner />
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* FEATURE HIGHLIGHTS & VALUE METRICS STRIP                      */}
        {/* ------------------------------------------------------------- */}
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
              icon: <Cpu size={20} style={{ color: 'var(--accent-secondary)' }} />,
              title: 'Cinematic Visual Craft',
              desc: 'High-fidelity motion graphics, sleek shaders & fluid UX.',
            },
            {
              icon: <Code size={20} style={{ color: 'var(--accent-primary)' }} />,
              title: 'Engineering Rigor',
              desc: 'Performant, scalable, secure applications built with precision.',
            },
            {
              icon: <Award size={20} style={{ color: 'var(--accent-secondary)' }} />,
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

      {/* Responsive Styles for Split Layout */}
      <style>{`
        @media (max-width: 991px) {
          .hero-split-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
            margin-bottom: 40px !important;
          }
          .hero-content-column {
            text-align: center !important;
          }
          .hero-desc {
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .hero-cta-buttons {
            justify-content: center !important;
          }
          .hero-trust-strip {
            justify-content: center !important;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-top: 76px !important;
            padding-bottom: 40px !important;
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
