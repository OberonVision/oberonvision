import { Sparkles, Shield, Cpu, Users } from 'lucide-react';

export const About = () => {
  const stats = [
    { label: 'Digital Disciplines', value: '06' },
    { label: 'Client Focus', value: '100%' },
    { label: 'Theme Modes', value: '02' },
    { label: 'Continuous Support', value: '24/7' },
  ];

  return (
    <section id="about" style={{ padding: '80px 0', background: 'var(--bg-secondary)' }} className="about-section">
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          <div>
            <div className="section-badge">
              <Sparkles size={14} /> About OberonVision
            </div>
            <h2 className="section-title">Thoughtful Digital Experiences Built for Real Results</h2>
            <p style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
              OberonVision is a digital solutions company focused on helping businesses turn ideas into useful, professional and
              engaging digital experiences.
            </p>
            <p style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
              We bring together development, design, analytics, marketing and creative services under one roof. Instead of
              treating every project as a template, we aim to understand the business, its audience and its objectives
              before building the solution.
            </p>
            <p
              style={{
                fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)',
                color: 'var(--text-primary)',
                fontWeight: 600,
                lineHeight: 1.6,
                marginBottom: '28px',
              }}
            >
              Whether it is a business website, mobile application, digital campaign, creative project or data-driven
              improvement, our approach is centred around clarity, quality and practical results.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                }}
              >
                <Shield size={16} style={{ color: 'var(--accent-primary)' }} /> Clarity &amp; Transparency
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                }}
              >
                <Cpu size={16} style={{ color: 'var(--accent-secondary)' }} /> Modern Technology
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                }}
              >
                <Users size={16} style={{ color: 'var(--accent-primary)' }} /> Client-Centric Care
              </div>
            </div>
          </div>

          <div>
            <div
              className="glass-panel about-card"
              style={{
                padding: '36px 28px',
                borderRadius: '24px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--card-shadow)',
              }}
            >
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  marginBottom: '24px',
                  color: 'var(--text-primary)',
                  textAlign: 'center',
                }}
              >
                The OberonVision Standard
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }} className="stats-grid">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    style={{
                      padding: '18px 14px',
                      borderRadius: '16px',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(1.8rem, 5vw, 2.4rem)',
                        fontWeight: 800,
                        color: 'var(--accent-primary)',
                        lineHeight: 1,
                        marginBottom: '6px',
                      }}
                    >
                      {s.value}
                    </div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-section {
            padding: 50px 0 !important;
          }
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .about-card {
            padding: 24px 18px !important;
          }
          .stats-grid {
            gap: 10px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
