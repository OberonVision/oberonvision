import { useState, useEffect } from 'react';
import { Home, Briefcase, Grid, UserCheck, MessageSquare, Phone, Mail, Sparkles, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const MobileBottomNav = () => {
  const { isDark, isLight, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [quickActionOpen, setQuickActionOpen] = useState(false);

  useEffect(() => {
    const sections = ['home', 'services', 'industries', 'about', 'contact'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '#home' },
    { id: 'services', label: 'Services', icon: Briefcase, href: '#services' },
    { id: 'industries', label: 'Industries', icon: Grid, href: '#industries' },
    { id: 'about', label: 'About', icon: UserCheck, href: '#about' },
    { id: 'contact', label: 'Contact', icon: MessageSquare, href: '#contact' },
  ];

  return (
    <>
      {/* ----------------------------------------------------------------- */}
      {/* QUICK CONNECT SPEED DIAL MODAL FOR MOBILE                        */}
      {/* ----------------------------------------------------------------- */}
      {quickActionOpen && (
        <div
          onClick={() => setQuickActionOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.72)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 10001,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '16px',
            paddingBottom: 'calc(84px + env(safe-area-inset-bottom))',
            animation: 'fadeIn 0.2s ease-out',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '24px',
              padding: '24px 20px',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 25px var(--glow-accent)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              animation: 'slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={18} style={{ color: 'var(--accent-primary)' }} />
                <span style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)' }}>
                  Quick Connect
                </span>
              </div>
              <button
                onClick={() => setQuickActionOpen(false)}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-color)',
                }}
              >
                <X size={18} />
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <a
                href="tel:8072935820"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '14px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, rgba(216, 183, 122, 0.2), rgba(16, 185, 129, 0.2))',
                  border: '1px solid var(--accent-primary)',
                  color: 'var(--text-primary)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'var(--accent-primary)',
                    color: 'var(--text-on-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Phone size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Direct Call</div>
                  <div>8072935820</div>
                </div>
              </a>

              <a
                href="https://wa.me/918072935820?text=Hi%20OberonVision%2C%20I%20would%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '14px',
                  borderRadius: '16px',
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  color: 'var(--text-primary)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: '#10b981',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <MessageSquare size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>WhatsApp</div>
                  <div>Instant Chat</div>
                </div>
              </a>
            </div>

            <a
              href="mailto:oberonvison.tech@gmail.com"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px',
                borderRadius: '16px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                fontWeight: 600,
                fontSize: '0.88rem',
              }}
            >
              <Mail size={18} style={{ color: 'var(--accent-primary)' }} />
              <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                oberonvison.tech@gmail.com
              </div>
            </a>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '8px' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Appearance</span>
              <button
                onClick={toggleTheme}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                }}
              >
                {isDark ? <Moon size={14} style={{ color: 'var(--accent-primary)' }} /> : <Sun size={14} style={{ color: '#f59e0b' }} />}
                {isDark ? 'Dark Mode' : 'Light Mode'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ----------------------------------------------------------------- */}
      {/* FLOATING GLASS BOTTOM NAVIGATION DOCK (MOBILE ONLY)              */}
      {/* ----------------------------------------------------------------- */}
      <nav
        className="mobile-bottom-nav"
        style={{
          position: 'fixed',
          bottom: '12px',
          left: '12px',
          right: '12px',
          height: '64px',
          borderRadius: '24px',
          background: 'var(--bg-nav)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid var(--border-color)',
          boxShadow: '0 12px 36px rgba(0, 0, 0, 0.65), 0 0 16px var(--glow-accent)',
          zIndex: 9999,
          display: 'none',
          alignItems: 'center',
          justifyContent: 'space-around',
          padding: '0 8px',
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              className="mobile-nav-link"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '3px',
                width: '56px',
                height: '52px',
                borderRadius: '16px',
                color: isActive ? 'var(--accent-primary)' : 'var(--text-muted)',
                background: isActive ? 'var(--glow-accent)' : 'transparent',
                transition: 'all 0.25s ease',
                position: 'relative',
              }}
            >
              <Icon size={19} strokeWidth={isActive ? 2.5 : 2} />
              <span
                style={{
                  fontSize: '0.68rem',
                  fontWeight: isActive ? 800 : 500,
                  letterSpacing: '0.02em',
                }}
              >
                {item.label}
              </span>
              {isActive && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: '2px',
                    width: '16px',
                    height: '2.5px',
                    borderRadius: '2px',
                    background: 'var(--accent-primary)',
                    boxShadow: '0 0 6px var(--accent-primary)',
                  }}
                />
              )}
            </a>
          );
        })}

        {/* Quick Connect Action Button */}
        <button
          onClick={() => setQuickActionOpen(!quickActionOpen)}
          aria-label="Quick Connect Menu"
          title="Quick Connect"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '3px',
            width: '52px',
            height: '52px',
            borderRadius: '16px',
            background: quickActionOpen
              ? 'var(--accent-primary)'
              : 'linear-gradient(135deg, rgba(216, 183, 122, 0.25), rgba(16, 185, 129, 0.25))',
            color: quickActionOpen ? 'var(--text-on-accent)' : 'var(--accent-primary)',
            border: '1px solid var(--border-color)',
            boxShadow: '0 0 12px var(--glow-accent)',
            transition: 'all 0.25s ease',
          }}
        >
          <Phone size={18} strokeWidth={2.4} />
          <span style={{ fontSize: '0.65rem', fontWeight: 800 }}>Connect</span>
        </button>
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .mobile-bottom-nav {
            display: flex !important;
          }
          body {
            padding-bottom: calc(84px + env(safe-area-inset-bottom, 0px)) !important;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default MobileBottomNav;
