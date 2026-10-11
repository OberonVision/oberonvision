import { useState } from 'react';
import {
  GraduationCap,
  Camera,
  Home,
  Car,
  HardHat,
  Award,
  Factory,
  Building2,
  Utensils,
  Scissors,
  Truck,
  Briefcase,
  Check,
  X,
} from 'lucide-react';

export const Industries = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const industriesList = [
    {
      id: 'tuition',
      name: 'Tuition & Education',
      icon: <GraduationCap size={22} />,
      desc: 'We assist coaching institutes, tutors, and academies with online course platforms, student enquiry portals, lead generation, and digital schedules.',
    },
    {
      id: 'photography',
      name: 'Photography & Studios',
      icon: <Camera size={22} />,
      desc: 'High-impact visual portfolio websites, client gallery delivery platforms, online booking systems, and creative branding for photographers.',
    },
    {
      id: 'interior',
      name: 'Interior Design',
      icon: <Home size={22} />,
      desc: 'Immersive portfolio showcases, interactive project galleries, client consultation forms, and social media campaigns for interior studios.',
    },
    {
      id: 'auto',
      name: 'Automobile & Garages',
      icon: <Car size={22} />,
      desc: 'Service booking tools, inventory showcases for vehicles/parts, localized Google maps search visibility, and customer feedback management.',
    },
    {
      id: 'construction',
      name: 'Construction & Civil',
      icon: <HardHat size={22} />,
      desc: 'Corporate project portfolios, quotation enquiry modules, safety compliance highlights, and B2B digital credibility systems.',
    },
    {
      id: 'driving',
      name: 'Driving School',
      icon: <Award size={22} />,
      desc: 'Batch slot registration forms, course details, digital fee enquiry, and automated WhatsApp/Email customer communication.',
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing & Industrial',
      icon: <Factory size={22} />,
      desc: 'Product catalog platforms, machinery specification showcases, international B2B lead generation, and data analytics dashboards.',
    },
    {
      id: 'realestate',
      name: 'Real Estate & Property',
      icon: <Building2 size={22} />,
      desc: 'Property listing web apps, location filters, virtual walkthrough integration, and targeted digital advertising campaigns.',
    },
    {
      id: 'catering',
      name: 'Catering & Events',
      icon: <Utensils size={22} />,
      desc: 'Digital menus, event package customizers, inquiry forms, photo galleries of event setups, and social media management.',
    },
    {
      id: 'salon',
      name: 'Salon & Wellness',
      icon: <Scissors size={22} />,
      desc: 'Online appointment scheduling, service rate cards, Instagram marketing campaigns, and customer retention offers.',
    },
    {
      id: 'logistics',
      name: 'Logistics & Fleet',
      icon: <Truck size={22} />,
      desc: 'Rate calculator interfaces, tracking updates display, fleet service inquiries, and clear B2B service breakdowns.',
    },
    {
      id: 'business',
      name: 'Business & More',
      icon: <Briefcase size={22} />,
      desc: 'Custom digital strategy tailored to any retail, consultancy, agency, tech startup, or local service business model.',
    },
  ];

  return (
    <section id="industries" style={{ padding: '80px 0', background: 'var(--bg-primary)' }} className="industries-section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
          <div className="section-badge" style={{ justifyContent: 'center' }}>
            Industries We Serve
          </div>
          <h2 className="section-title">Tailored For Diverse Business Models</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Every business has different customers, challenges and goals. We adapt our digital solutions to suit
            different industries and business models.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: '16px',
          }}
          className="industries-grid"
        >
          {industriesList.map((item) => (
            <div
              key={item.id}
              className="glass-panel interactive-card industry-card"
              onClick={() => setSelectedIndustry(item)}
              style={{
                padding: '20px',
                borderRadius: 'var(--theme-border-radius)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                transition: 'all 0.25s ease',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(49, 90, 71, 0.15)',
                  color: 'var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '3px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {item.name}
                </h3>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                  Explore Solutions →
                </span>
              </div>
            </div>
          ))}
        </div>

        {selectedIndustry && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 10000,
              background: 'rgba(0, 0, 0, 0.72)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
            }}
            onClick={() => setSelectedIndustry(null)}
          >
            <div
              className="glass-panel"
              style={{
                width: '100%',
                maxWidth: '520px',
                maxHeight: '88vh',
                overflowY: 'auto',
                padding: '28px 20px',
                borderRadius: '24px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-active)',
                boxShadow: 'var(--card-shadow-hover)',
                position: 'relative',
                animation: 'modalSlideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedIndustry(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
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

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: 'var(--accent-primary)',
                    color: 'var(--text-on-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {selectedIndustry.icon}
                </div>
                <div>
                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: 'var(--accent-secondary)',
                    }}
                  >
                    Industry Focus
                  </span>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {selectedIndustry.name}
                  </h3>
                </div>
              </div>

              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
                How OberonVision Helps:
              </h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                {selectedIndustry.desc}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: 'var(--text-primary)' }}>
                  <Check size={15} style={{ color: 'var(--accent-primary)' }} /> Optimized Customer Acquisition Funnel
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: 'var(--text-primary)' }}>
                  <Check size={15} style={{ color: 'var(--accent-primary)' }} /> Mobile-Responsive & Fast Page Load
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: 'var(--text-primary)' }}>
                  <Check size={15} style={{ color: 'var(--accent-primary)' }} /> Dedicated Ongoing Technical Assistance
                </div>
              </div>

              <a
                href="#contact"
                onClick={() => setSelectedIndustry(null)}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '13px',
                  borderRadius: '30px',
                  background: 'var(--accent-primary)',
                  color: 'var(--text-on-accent)',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                }}
              >
                Discuss {selectedIndustry.name} Project
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .industries-section {
            padding: 50px 0 !important;
          }
          .industries-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 10px !important;
          }
          .industry-card {
            padding: 14px 12px !important;
          }
        }
        @media (max-width: 480px) {
          .industries-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Industries;
