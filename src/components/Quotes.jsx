import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const Quotes = () => {
  const quotes = [
    {
      text: 'Good ideas become meaningful when they are built with purpose.',
      author: 'OberonVison Philosophy',
    },
    {
      text: 'Your business knows the destination. We help build the digital road.',
      author: 'Co-Creation Vision',
    },
    {
      text: "Let's create something useful, memorable and built to grow.",
      author: 'Long-term Commitment',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [quotes.length]);

  return (
    <section style={{ padding: '100px 0', background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <div className="section-badge" style={{ justifyContent: 'center' }}>
            Our Journey Together
          </div>
          <h2 className="section-title">Your Vision + Our Expertise = Something Built Together.</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 48px' }}>
            Every project begins with an idea. We listen, understand the direction, shape the possibilities and work
            together to turn that idea into something people can actually experience.
          </p>

          <div
            className="glass-panel"
            style={{
              padding: '48px 36px',
              borderRadius: '24px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--card-shadow)',
              position: 'relative',
              minHeight: '220px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Quote size={40} style={{ color: 'var(--accent-primary)', opacity: 0.3, marginBottom: '16px' }} />
            <p
              key={currentIndex}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                lineHeight: 1.4,
                marginBottom: '16px',
                animation: 'fadeSlideIn 0.5s ease-out',
              }}
            >
              &quot;{quotes[currentIndex].text}&quot;
            </p>
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--accent-secondary)',
              }}
            >
              — {quotes[currentIndex].author}
            </span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '24px' }}>
              <button
                onClick={() => setCurrentIndex((currentIndex - 1 + quotes.length) % quotes.length)}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-color)',
                }}
                title="Previous Quote"
              >
                <ChevronLeft size={18} />
              </button>

              <div style={{ display: 'flex', gap: '6px' }}>
                {quotes.map((q, idx) => (
                  <span
                    key={q.author}
                    onClick={() => setCurrentIndex(idx)}
                    style={{
                      width: idx === currentIndex ? '24px' : '8px',
                      height: '8px',
                      borderRadius: '4px',
                      background: idx === currentIndex ? 'var(--accent-primary)' : 'var(--border-color)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentIndex((currentIndex + 1) % quotes.length)}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-color)',
                }}
                title="Next Quote"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Quotes;
