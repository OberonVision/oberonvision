import { useState, Fragment } from 'react';
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
      icon: <Globe size={28} />,
      title: 'Web Development',
      shortDesc: 'Clean, responsive websites & online platforms optimized for reach and search visibility.',
      fullDesc:
        'We build professional websites that give your business a stronger digital presence. From business websites and landing pages to complete online platforms, we focus on clean design, responsive performance and a smooth customer experience. We can also assist with hosting, deployment and SEO foundations so your website is ready to reach the right audience.',
      highlights: ['Responsive Frontend & CMS', 'SEO Foundations & Speed Optimization', 'Custom Domain & Hosting Setup'],
    },
    {
      id: 'mobile',
      icon: <Smartphone size={28} />,
      title: 'Mobile App Development',
      shortDesc: 'Intuitive mobile applications for iOS & Android built for practical real-world usage.',
      fullDesc:
        'We create intuitive mobile applications that help businesses stay connected with their customers. From planning and interface design to development, testing and deployment, we focus on building applications that are practical, responsive and ready for real-world use.',
      highlights: ['Cross-Platform Performance', 'User-Centric Architecture', 'End-to-End App Store Prep'],
    },
    {
      id: 'uiux',
      icon: <Palette size={28} />,
      title: 'UI / UX Design',
      shortDesc: 'Human-centered visual interfaces designed around clarity, usability, and user behavior.',
      fullDesc:
        'We transform ideas into clear, engaging and meaningful digital experiences. Every interface is carefully planned around visual consistency, usability and user behaviour, helping your customers understand and interact with your product more naturally.',
      process: ['Research', 'Structure', 'Design', 'Test', 'Improve'],
      highlights: ['Wireframing & Prototyping', 'Design System Architecture', 'User Experience Audits'],
    },
    {
      id: 'analytics',
      icon: <BarChart3 size={28} />,
      title: 'Data Analytics',
      shortDesc: 'Transform raw data into meaningful visual insights and actionable business decisions.',
      fullDesc:
        'We help businesses understand the information they already have and turn it into useful insights. By cleaning data, identifying patterns, analysing performance and presenting meaningful reports, we help you discover opportunities and make better-informed business decisions.',
      process: ['Collect', 'Clean', 'Analyse', 'Visualise', 'Report'],
      highlights: ['Performance KPI Tracking', 'Automated Visual Dashboards', 'Data Cleanliness & Audits'],
    },
    {
      id: 'marketing',
      icon: <Megaphone size={28} />,
      title: 'Digital Marketing',
      shortDesc: 'Strengthen online visibility through social media, search optimization, and lead generation.',
      fullDesc:
        'Having a good product is only part of building a successful business. We help strengthen your digital presence through social media, search visibility, content strategies and paid lead-generation campaigns. Our approach focuses on measurable actions, audience understanding and continuous improvement.',
      highlights: ['SEO & Search Visibility', 'Social Media Campaigning', 'Targeted Lead Generation'],
    },
    {
      id: 'creative',
      icon: <Paintbrush size={28} />,
      title: 'Creative & Freelance Services',
      shortDesc: 'Flexible creative assets including graphic design, video editing, photography & branding.',
      fullDesc:
        'We provide flexible creative support for businesses and individuals, including graphic design, content creation, photo editing, video editing, promotional posters, photography and social media management. Services can be arranged individually or combined according to your requirements.',
      highlights: ['Brand Assets & Graphic Design', 'Video Editing & Content Prep', 'Promotional Posters & Social Media'],
    },
  ];

  return (
    <section id="services" style={{ padding: '100px 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: '720px' }}>
          <div className="section-badge" style={{ justifyContent: 'center' }}>
            What We Do
          </div>
          <h2 className="section-title">Digital Solutions Built Around Your Business</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 56px' }}>
            Digital solutions designed around your business, your customers and your goals.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '28px',
            alignItems: 'start',
          }}
        >
          {servicesData.map((svc, index) => {
            const isOpen = activeService === index;
            return (
              <div
                key={svc.id}
                className="glass-panel interactive-card"
                onClick={() => toggleService(index)}
                style={{
                  padding: '32px',
                  cursor: 'pointer',
                  borderRadius: 'var(--theme-border-radius)',
                  background: isOpen ? 'var(--bg-card-hover)' : 'var(--bg-card)',
                  borderColor: isOpen ? 'var(--border-active)' : 'var(--border-color)',
                  boxShadow: isOpen ? 'var(--card-shadow-hover)' : 'var(--card-shadow)',
                  transform: isOpen ? 'translateY(-4px)' : 'none',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '16px',
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
                      width: '36px',
                      height: '36px',
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
                    <ChevronDown size={20} />
                  </div>
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-primary)' }}>
                  {svc.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                  {svc.shortDesc}
                </p>

                {isOpen && (
                  <div
                    style={{
                      marginTop: '20px',
                      paddingTop: '20px',
                      borderTop: '1px solid var(--border-color)',
                      animation: 'fadeIn 0.4s ease-out',
                    }}
                  >
                    <p style={{ fontSize: '0.925rem', color: 'var(--text-primary)', lineHeight: 1.7, marginBottom: '20px' }}>
                      {svc.fullDesc}
                    </p>

                    {svc.process && (
                      <div style={{ marginBottom: '20px' }}>
                        <h4
                          style={{
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            color: 'var(--accent-secondary)',
                            marginBottom: '10px',
                          }}
                        >
                          Execution Process:
                        </h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                          {svc.process.map((step, sIdx) => (
                            <Fragment key={step}>
                              <span style={{ padding: '4px 10px', borderRadius: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                                {step}
                              </span>
                              {sIdx < svc.process.length - 1 && (
                                <span style={{ color: 'var(--accent-primary)', fontSize: '0.75rem' }}>→</span>
                              )}
                            </Fragment>
                          ))}
                        </div>
                      </div>
                    )}

                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                      {svc.highlights.map((item) => (
                        <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                          <CheckCircle2 size={16} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
                      Discuss This Service <ArrowUpRight size={16} />
                    </div>
                  </div>
                )}

                {!isOpen && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-primary)', marginTop: '8px' }}>
                    Click to Expand <ArrowUpRight size={14} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Services;
