import { Sparkles, Shield, Cpu, Users } from 'lucide-react';

export const About = () => {
  const stats = [
    { label: 'Core Digital Disciplines', value: '06' },
    { label: 'Client Commitment', value: '100%' },
    { label: 'Adaptive Theme Modes', value: '02' },
    { label: 'Continuous Support', value: '24/7' },
  ];

  return (
    <section id="about" style={{ padding: '110px 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          <div>
            <div className="section-badge">
              <Sparkles size={14} /> About OberonVison
            </div>
            <h2 className="section-title">Thoughtful Digital Experiences Built for Real Results</h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
              OberonVison is a digital solutions company focused on helping businesses turn ideas into useful, professional and
              engaging digital experiences.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
              We bring together development, design, analytics, marketing and creative services under one roof. Instead of
              treating every project as a template, we aim to understand the business, its audience and its objectives
              before building the solution.
            </p>
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-primary)',
                fontWeight: 600,
                lineHeight: 1.7,
                marginBottom: '32px',
              }}
            >
              Whether it is a business website, mobile application, digital campaign, creative project or data-driven
              improvement, our approach is centred around clarity, quality and practical results.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                }}
              >
                <Shield size={18} style={{ color: 'var(--accent-primary)' }} /> Clarity & Transparency
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                }}
              >
                <Cpu size={18} style={{ color: 'var(--accent-secondary)' }} /> Modern Technology
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                }}
              >
                <Users size={18} style={{ color: 'var(--accent-primary)' }} /> Client-Centric Care
              </div>
            </div>
          </div>

          <div>
            <div
              className="glass-panel"
              style={{
                padding: '44px',
                borderRadius: '24px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--card-shadow)',
              }}
            >
              <h3
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  marginBottom: '32px',
                  color: 'var(--text-primary)',
                  textAlign: 'center',
                }}
              >
                The OberonVison Standard
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                {stats.map((s) => (
                  <div
                    key={s.label}
                    style={{
                      padding: '24px',
                      borderRadius: '16px',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '2.5rem',
                        fontWeight: 800,
                        color: 'var(--accent-primary)',
                        lineHeight: 1,
                        marginBottom: '8px',
                      }}
                    >
                      {s.value}
                    </div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
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
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
