import { useState } from 'react';
import {
  Globe,
  Smartphone,
  Palette,
  BarChart3,
  Megaphone,
  Paintbrush,
  ChevronDown,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';

export const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const toggleService = (idx) => {
    setActiveService(activeService === idx ? null : idx);
  };

  const servicesData = [
    {
      id: 'web',
      icon: <Globe size={26} />,
      title: 'Web Development',
      shortDesc: 'Clean, responsive websites & online platforms optimized for reach, high speed & search visibility.',
      fullDesc:
        'We build professional websites that give your business a stronger digital presence. From business websites and landing pages to complete online platforms, we focus on clean design, responsive performance and a smooth customer experience. We can also assist with hosting, deployment and SEO foundations so your website is ready to reach the right audience.',
      highlights: ['Responsive Frontend & CMS', 'SEO Foundations & Speed Optimization', 'Custom Domain & Hosting Setup'],
    },
    {
      id: 'mobile',
      icon: <Smartphone size={26} />,
      title: 'Mobile App Development',
      shortDesc: 'Intuitive mobile applications for iOS & Android built for practical real-world usage.',
      fullDesc:
        'We create intuitive mobile applications that help businesses stay connected with their customers. From planning and interface design to development, testing and deployment, we focus on building applications that are practical, responsive and ready for real-world use.',
      highlights: ['Cross-Platform Performance', 'User-Centric Architecture', 'End-to-End App Store Prep'],
    },
    {
      id: 'uiux',
      icon: <Palette size={26} />,
      title: 'UI / UX Design',
      shortDesc: 'Human-centered visual interfaces designed around clarity, usability, and user behavior.',
      fullDesc:
        'We transform ideas into clear, engaging and meaningful digital experiences. Every interface is carefully planned around visual consistency, usability and user behaviour, helping your customers understand and interact with your product more naturally.',
      process: ['Research', 'Structure', 'Design', 'Test', 'Improve'],
      highlights: ['Wireframing & Prototyping', 'Design System Architecture', 'User Experience Audits'],
    },
    {
      id: 'analytics',
      icon: <BarChart3 size={26} />,
      title: 'Data Analytics',
      shortDesc: 'Transform raw data into meaningful visual insights and actionable business decisions.',
      fullDesc:
        'We help businesses understand the information they already have and turn it into useful insights. By cleaning data, identifying patterns, analysing performance and presenting meaningful reports, we help you discover opportunities and make better-informed business decisions.',
      process: ['Collect', 'Clean', 'Analyse', 'Visualise', 'Report'],
      highlights: ['Performance KPI Tracking', 'Automated Visual Dashboards', 'Data Cleanliness & Audits'],
    },
    {
      id: 'marketing',
      icon: <Megaphone size={26} />,
      title: 'Digital Marketing',
      shortDesc: 'Strengthen online visibility through social media, search optimization, and lead generation.',
      fullDesc:
        'Having a good product is only part of building a successful business. We help strengthen your digital presence through social media, search visibility, content strategies and paid lead-generation campaigns. Our approach focuses on measurable actions, audience understanding and continuous improvement.',
      highlights: ['SEO & Search Visibility', 'Social Media Campaigning', 'Targeted Lead Generation'],
    },
    {
      id: 'creative',
      icon: <Paintbrush size={26} />,
      title: 'Creative & Freelance Services',
      shortDesc: 'Flexible creative assets including graphic design, video editing, photography & branding.',
      fullDesc:
        'We provide flexible creative support for businesses and individuals, including graphic design, content creation, photo editing, video editing, promotional posters, photography and social media management. Services can be arranged individually or combined according to your requirements.',
      highlights: ['Brand Assets & Graphic Design', 'Video Editing & Content Prep', 'Promotional Posters & Social Media'],
    },
  ];

  return (
    <section id="services" style={{ padding: '80px 0', background: 'var(--bg-secondary)' }} className="services-section">
      <div className="container">
        <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: '720px' }}>
          <div className="section-badge" style={{ justifyContent: 'center' }}>
            What We Do
          </div>
          <h2 className="section-title">Digital Solutions Built Around Your Business</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 40px' }}>
            Digital solutions designed around your business, your customers and your goals.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '20px',
            alignItems: 'start',
          }}
          className="services-grid"
        >
          {servicesData.map((svc, index) => {
            const isOpen = activeService === index;
            return (
              <div
                key={svc.id}
                className="glass-panel interactive-card service-card"
                onClick={() => toggleService(index)}
                style={{
                  padding: '28px 24px',
                  cursor: 'pointer',
                  borderRadius: 'var(--theme-border-radius)',
                  background: isOpen ? 'var(--bg-card-hover)' : 'var(--bg-card)',
                  borderColor: isOpen ? 'var(--border-active)' : 'var(--border-color)',
                  boxShadow: isOpen ? 'var(--card-shadow-hover)' : 'var(--card-shadow)',
                  transform: isOpen ? 'translateY(-2px)' : 'none',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: 'rgba(49, 90, 71, 0.15)',
                      color: 'var(--accent-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid var(--border-color)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {svc.icon}
                  </div>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: isOpen ? 'var(--accent-primary)' : 'var(--bg-secondary)',
                      color: isOpen ? 'var(--text-on-accent)' : 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease, background 0.3s ease, color 0.3s ease',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <ChevronDown size={18} />
                  </div>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>
                  {svc.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '16px' }}>
                  {svc.shortDesc}
                </p>

                {/* Highlights Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: isOpen ? '16px' : '0' }}>
                  {svc.highlights.map((h, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        padding: '4px 10px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Expanded Details */}
                {isOpen && (
                  <div
                    style={{
                      paddingTop: '16px',
                      marginTop: '16px',
                      borderTop: '1px solid var(--border-color)',
                      animation: 'fadeIn 0.25s ease',
                    }}
                  >
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                      {svc.fullDesc}
                    </p>

                    {svc.process && (
                      <div style={{ marginBottom: '16px' }}>
                        <div style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent-primary)', marginBottom: '8px' }}>
                          Process Workflow:
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {svc.process.map((step, sIdx) => (
                            <span
                              key={sIdx}
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px',
                                fontSize: '0.74rem',
                                padding: '3px 8px',
                                borderRadius: '8px',
                                background: 'var(--bg-secondary)',
                                border: '1px solid var(--border-color)',
                                color: 'var(--text-primary)',
                              }}
                            >
                              <CheckCircle2 size={11} style={{ color: 'var(--accent-highlight)' }} /> {step}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <a
                      href="#contact"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: 'var(--accent-primary)',
                        paddingTop: '4px',
                      }}
                    >
                      Inquire About {svc.title} <ArrowUpRight size={15} />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-section {
            padding: 50px 0 !important;
          }
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
          .service-card {
            padding: 20px 18px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
