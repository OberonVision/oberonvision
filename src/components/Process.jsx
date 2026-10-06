import { Search, Compass, Code2, Rocket } from 'lucide-react';

export const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'DISCOVER',
      subtitle: 'Research & Strategy',
      desc: 'Understand the business, audience, goals and requirements.',
      icon: <Search size={22} />,
    },
    {
      number: '02',
      title: 'DESIGN',
      subtitle: 'UI/UX & Architecture',
      desc: 'Create the structure, visual direction and user experience.',
      icon: <Compass size={22} />,
    },
    {
      number: '03',
      title: 'DEVELOP',
      subtitle: 'Engineering & Build',
      desc: 'Turn the approved concept into a functional digital solution.',
      icon: <Code2 size={22} />,
    },
    {
      number: '04',
      title: 'LAUNCH',
      subtitle: 'Deploy & Support',
      desc: 'Test, refine, deploy and prepare the solution for real-world use.',
      icon: <Rocket size={22} />,
    },
  ];

  return (
    <section style={{ padding: '100px 0', background: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 64px' }}>
          <div className="section-badge" style={{ justifyContent: 'center' }}>
            How We Work
          </div>
          <h2 className="section-title">A Structured Process Built for Success</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            From initial concept to final deployment, we follow a transparent and structured methodology.
          </p>
        </div>

        <div style={{ position: 'relative' }}>
          <div
            className="timeline-connector"
            style={{
              position: 'absolute',
              top: '40px',
              left: '8%',
              right: '8%',
              height: '2px',
              background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary), var(--accent-highlight))',
              zIndex: 1,
              opacity: 0.4,
            }}
          />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px',
              position: 'relative',
              zIndex: 2,
            }}
            className="timeline-grid"
          >
            {steps.map((item) => (
              <div
                key={item.number}
                className="glass-panel interactive-card"
                style={{
                  padding: '32px 24px',
                  borderRadius: 'var(--theme-border-radius)',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  textAlign: 'center',
                  transition: 'all 0.35s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'var(--bg-secondary)',
                    border: '2px solid var(--accent-primary)',
                    color: 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                  }}
                >
                  {item.number}
                </div>
                <div
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: 'var(--accent-secondary)',
                    marginBottom: '4px',
                  }}
                >
                  {item.subtitle}
                </div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    letterSpacing: '0.02em',
                    color: 'var(--text-primary)',
                    marginBottom: '12px',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .timeline-connector {
            display: none !important;
          }
          .timeline-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Process;
