import CinematicHeroBanner from './CinematicHeroBanner';
import { Layers, Code, Cpu, Award, ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import './Hero.css';

export const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* ------------------------------------------------------------- */}
      {/* TWO-COLUMN RESPONSIVE HERO CONTAINER (MOBILE FIRST)           */}
      {/* ------------------------------------------------------------- */}
      <div className="hero-container">
        {/* LEFT COLUMN: Content, Typography & Buttons */}
        <div className="hero-content">
          <div className="hero-badge">
            Digital Architecture • Creative Engineering
          </div>

          <h1 className="hero-title">
            Turn Your Ideas Into <span className="highlight">Digital Reality.</span>
          </h1>

          <p className="hero-description">
            We design, develop, and deliver high-impact digital experiences that help businesses build stronger brands,
            connect with customers, and scale with confidence.
          </p>

          {/* Responsive Action Buttons */}
          <div className="button-group">
            <a href="#services" className="btn btn-primary">
              Explore Services <ArrowRight size={17} />
            </a>

            <a
              href="https://wa.me/918072935820?text=Hi%20OberonVision%2C%20I%20would%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageSquare size={17} /> WhatsApp
            </a>

            <a href="#contact" className="btn btn-secondary">
              Let&apos;s Work Together
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="hero-trust-strip">
            <div className="hero-trust-item">
              <CheckCircle2 size={14} style={{ color: 'var(--accent-secondary)' }} /> Web &amp; Mobile
            </div>
            <div className="hero-trust-item">
              <CheckCircle2 size={14} style={{ color: 'var(--accent-secondary)' }} /> UI/UX Architecture
            </div>
            <div className="hero-trust-item">
              <CheckCircle2 size={14} style={{ color: 'var(--accent-secondary)' }} /> Analytics &amp; SEO
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: 16:9 Banner Media (Video Banner) */}
        <div className="hero-banner-media">
          <CinematicHeroBanner />
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* FEATURE HIGHLIGHTS & VALUE METRICS STRIP                      */}
      {/* ------------------------------------------------------------- */}
      <div className="container" style={{ marginTop: '48px', position: 'relative', zIndex: 2 }}>
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
    </section>
  );
};

export default Hero;
