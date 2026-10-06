import { DollarSign, Lightbulb, Target, ShieldCheck, Sliders, HeartHandshake, Quote } from 'lucide-react';

export const Philosophy = () => {
  const pillars = [
    {
      icon: <DollarSign size={24} />,
      title: 'Affordable Approach',
      desc: 'Transparent pricing with maximal value, giving startups and growing enterprises accessible high-end digital solutions.',
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Creative Thinking',
      desc: 'Tailored designs and fresh strategies rather than rigid generic templates or one-size-fits-all frameworks.',
    },
    {
      icon: <Target size={24} />,
      title: 'Business-Focused Solutions',
      desc: 'Every feature, workflow, and aesthetic detail is structured specifically to achieve your concrete business objectives.',
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Reliable Support',
      desc: 'Dependable assistance, deployment guidance, and continuous support whenever your team needs help.',
    },
    {
      icon: <Sliders size={24} />,
      title: 'Flexible Services',
      desc: 'Engage with us for a single project module or bundle web, mobile, analytics, and marketing seamlessly.',
    },
    {
      icon: <HeartHandshake size={24} />,
      title: 'Long-Term Partnership',
      desc: 'We position ourselves as your technology partner committed to evolving and scaling alongside your journey.',
    },
  ];

  return (
    <section
      style={{
        padding: '110px 0',
        background: 'var(--bg-secondary)',
        color: 'var(--text-primary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--glow-accent) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--glow-accent) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 64px' }}>
          <div
            className="section-badge"
            style={{
              justifyContent: 'center',
            }}
          >
            Why Choose OberonVision?
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', color: 'var(--text-primary)', marginBottom: '20px' }}>
            Built Around Real Business Needs
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            We believe digital solutions should be useful, understandable and built around real business needs. Our goal is
            not simply to deliver a website, application or campaign, but to create something that can support your
            business and its customers over time.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            marginBottom: '72px',
          }}
        >
          {pillars.map((item) => (
            <div
              key={item.title}
              className="glass-panel interactive-card"
              style={{
                padding: '32px',
                borderRadius: '16px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--card-shadow)',
                transition: 'all 0.35s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = 'var(--accent-primary)';
                e.currentTarget.style.boxShadow = 'var(--card-shadow-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.boxShadow = 'var(--card-shadow)';
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(0, 240, 255, 0.12)',
                  color: 'var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div
          className="glass-panel"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '48px',
            borderRadius: '24px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--card-shadow)',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <Quote
            size={48}
            style={{
              color: 'var(--accent-primary)',
              opacity: 0.25,
              position: 'absolute',
              top: '24px',
              left: '32px',
            }}
          />
          <p
            style={{
              fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
              fontWeight: 700,
              fontFamily: 'var(--font-heading)',
              color: 'var(--text-primary)',
              lineHeight: 1.4,
              marginBottom: '20px',
              position: 'relative',
              zIndex: 2,
            }}
          >
            &quot;We don&apos;t just build digital products.
            <br />
            We build relationships around better ideas.&quot;
          </p>
          <span
            style={{
              fontSize: '1rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              color: 'var(--accent-primary)',
              textTransform: 'uppercase',
            }}
          >
            — OberonVision Team
          </span>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
