import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const Quotes = () => {
  const quotes = [
    {
      text: 'Good ideas become meaningful when they are built with purpose.',
      author: 'OberonVision Philosophy',
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
    }, 6000);
    return () => clearInterval(timer);
  }, [quotes.length]);

  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-secondary)', position: 'relative' }} className="quotes-section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <div className="section-badge" style={{ justifyContent: 'center' }}>
            Our Journey Together
          </div>
          <h2 className="section-title">Your Vision + Our Expertise = Something Built Together.</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 36px' }}>
            Every project begins with an idea. We listen, understand the direction, shape the possibilities and work
            together to turn that idea into something people can actually experience.
          </p>

          <div
            className="glass-panel quote-card"
            style={{
              padding: '40px 28px',
              borderRadius: '24px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--card-shadow)',
              position: 'relative',
              minHeight: '200px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Quote size={36} style={{ color: 'var(--accent-primary)', opacity: 0.35, marginBottom: '14px' }} />
            <p
              key={currentIndex}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.1rem, 3.5vw, 1.5rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                lineHeight: 1.45,
                marginBottom: '14px',
                animation: 'fadeSlideIn 0.35s ease-out',
                maxWidth: '620px',
              }}
            >
              &quot;{quotes[currentIndex].text}&quot;
            </p>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--accent-secondary)',
              }}
            >
              — {quotes[currentIndex].author}
            </span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '20px' }}>
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
                <ChevronLeft size={17} />
              </button>

              <div style={{ display: 'flex', gap: '6px' }}>
                {quotes.map((q, idx) => (
                  <span
                    key={q.author}
                    onClick={() => setCurrentIndex(idx)}
                    style={{
                      width: idx === currentIndex ? '22px' : '8px',
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
                <ChevronRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .quotes-section {
            padding: 50px 0 !important;
          }
          .quote-card {
            padding: 28px 18px !important;
          }
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Quotes;
