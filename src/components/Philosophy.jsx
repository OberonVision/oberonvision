import { DollarSign, Lightbulb, Target, ShieldCheck, Sliders, HeartHandshake } from 'lucide-react';

export const Philosophy = () => {
  const pillars = [
    {
      icon: <DollarSign size={22} />,
      title: 'Affordable Approach',
      desc: 'Transparent pricing with maximal value, giving startups and growing enterprises accessible high-end digital solutions.',
    },
    {
      icon: <Lightbulb size={22} />,
      title: 'Creative Thinking',
      desc: 'Tailored designs and fresh strategies rather than rigid generic templates or one-size-fits-all frameworks.',
    },
    {
      icon: <Target size={22} />,
      title: 'Business-Focused Solutions',
      desc: 'Every feature, workflow, and aesthetic detail is structured specifically to achieve your concrete business objectives.',
    },
    {
      icon: <ShieldCheck size={22} />,
      title: 'Reliable Support',
      desc: 'Dependable assistance, deployment guidance, and continuous support whenever your team needs help.',
    },
    {
      icon: <Sliders size={22} />,
      title: 'Flexible Services',
      desc: 'Engage with us for a single project module or bundle web, mobile, analytics, and marketing seamlessly.',
    },
    {
      icon: <HeartHandshake size={22} />,
      title: 'Long-Term Partnership',
      desc: 'We position ourselves as your technology partner committed to evolving and scaling alongside your journey.',
    },
  ];

  return (
    <section
      style={{
        padding: '80px 0',
        background: 'var(--bg-secondary)',
        color: 'var(--text-primary)',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="philosophy-section"
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px' }}>
          <div className="section-badge" style={{ justifyContent: 'center' }}>
            Why Choose OberonVision?
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3.2rem)', color: 'var(--text-primary)', marginBottom: '16px' }}>
            Built Around Real Business Needs
          </h2>
          <p style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            We believe digital solutions should be useful, understandable, and built around real business needs. Our goal is
            not simply to deliver a website, application or campaign, but to create something that supports your growth.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '20px',
            marginBottom: '48px',
          }}
          className="philosophy-grid"
        >
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel interactive-card"
              style={{
                padding: '24px 20px',
                borderRadius: '16px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                transition: 'transform 0.25s ease, border-color 0.25s ease',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(216, 183, 122, 0.12)',
                  color: 'var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-color)',
                }}
              >
                {item.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '6px', color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .philosophy-section {
            padding: 50px 0 !important;
          }
          .philosophy-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
            margin-bottom: 32px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Philosophy;
