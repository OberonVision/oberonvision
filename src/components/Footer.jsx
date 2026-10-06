import Logo from './Logo';
import { Phone, Mail } from 'lucide-react';

export const Footer = () => {
  const quickLinks = ['Home', 'Services', 'Industries', 'About', 'Contact'];
  const servicesList = [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'Data Analytics',
    'Digital Marketing',
    'Creative Services',
  ];

  return (
    <footer
      style={{
        background: 'var(--bg-footer)',
        color: 'var(--text-footer)',
        padding: '80px 0 40px',
        borderTop: '1px solid var(--border-color)',
        position: 'relative',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr 1.2fr',
            gap: '48px',
            marginBottom: '64px',
          }}
          className="footer-grid"
        >
          <div>
            <div style={{ marginBottom: '20px' }}>
              <Logo size="medium" />
            </div>
            <p style={{ fontSize: '0.95rem', color: '#A0AAA2', lineHeight: 1.6, maxWidth: '320px', marginBottom: '20px' }}>
              Digital ideas, thoughtfully designed and built for real-world businesses.
            </p>
            <span style={{ fontSize: '0.825rem', fontStyle: 'italic', color: 'var(--accent-primary)' }}>
              &quot;Better Ideas. Better Solutions. A Better Future.&quot;
            </span>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-footer)', marginBottom: '20px' }}>
              Quick Links
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    style={{ fontSize: '0.9rem', color: '#A0AAA2', transition: 'color 0.3s ease' }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--text-footer)')}
                    onMouseLeave={(e) => (e.target.style.color = '#A0AAA2')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-footer)', marginBottom: '20px' }}>
              Services
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {servicesList.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    style={{ fontSize: '0.9rem', color: '#A0AAA2', transition: 'color 0.3s ease' }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--text-footer)')}
                    onMouseLeave={(e) => (e.target.style.color = '#A0AAA2')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-footer)', marginBottom: '20px' }}>
              Contact Us
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li>
                <a
                  href="tel:8072935820"
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#A0AAA2' }}
                >
                  <Phone size={16} style={{ color: 'var(--accent-primary)' }} /> 8072935820
                </a>
              </li>
              <li>
                <a
                  href="mailto:oberonvison.tech@gmail.com"
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#A0AAA2' }}
                >
                  <Mail size={16} style={{ color: 'var(--accent-primary)' }} /> oberonvison.tech@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/oberonvison"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#A0AAA2' }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: 'var(--accent-primary)' }}
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  @oberonvison
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            paddingTop: '32px',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.85rem',
            color: '#808A82',
          }}
        >
          <div>&copy; 2026 OberonVison. All rights reserved.</div>
          <div>Built with ideas, design and technology.</div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 36px !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
