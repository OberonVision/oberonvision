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
      icon: <GraduationCap size={24} />,
      desc: 'We assist coaching institutes, tutors, and academies with online course platforms, student enquiry portals, lead generation, and digital schedules.',
    },
    {
      id: 'photography',
      name: 'Photography & Studios',
      icon: <Camera size={24} />,
      desc: 'High-impact visual portfolio websites, client gallery delivery platforms, online booking systems, and creative branding for photographers.',
    },
    {
      id: 'interior',
      name: 'Interior Design',
      icon: <Home size={24} />,
      desc: 'Immersive portfolio showcases, interactive project galleries, client consultation forms, and social media campaigns for interior studios.',
    },
    {
      id: 'auto',
      name: 'Automobile & Garages',
      icon: <Car size={24} />,
      desc: 'Service booking tools, inventory showcases for vehicles/parts, localized Google maps search visibility, and customer feedback management.',
    },
    {
      id: 'construction',
      name: 'Construction & Civil',
      icon: <HardHat size={24} />,
      desc: 'Corporate project portfolios, quotation enquiry modules, safety compliance highlights, and B2B digital credibility systems.',
    },
    {
      id: 'driving',
      name: 'Driving School',
      icon: <Award size={24} />,
      desc: 'Batch slot registration forms, course details, digital fee enquiry, and automated WhatsApp/Email customer communication.',
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing & Industrial',
      icon: <Factory size={24} />,
      desc: 'Product catalog platforms, machinery specification showcases, international B2B lead generation, and data analytics dashboards.',
    },
    {
      id: 'realestate',
      name: 'Real Estate & Property',
      icon: <Building2 size={24} />,
      desc: 'Property listing web apps, location filters, Virtual walkthrough integration, and targeted digital advertising campaigns.',
    },
    {
      id: 'catering',
      name: 'Catering & Events',
      icon: <Utensils size={24} />,
      desc: 'Digital menus, event package customizers, inquiry forms, photo galleries of event setups, and social media management.',
    },
    {
      id: 'salon',
      name: 'Salon & Wellness',
      icon: <Scissors size={24} />,
      desc: 'Online appointment scheduling, service rate cards, Instagram marketing campaigns, and customer retention offers.',
    },
    {
      id: 'logistics',
      name: 'Logistics & Fleet',
      icon: <Truck size={24} />,
      desc: 'Rate calculator interfaces, tracking updates display, fleet service inquiries, and clear B2B service breakdowns.',
    },
    {
      id: 'business',
      name: 'Business & More',
      icon: <Briefcase size={24} />,
      desc: 'Custom digital strategy tailored to any retail, consultancy, agency, tech startup, or local service business model.',
    },
  ];

  return (
    <section id="industries" style={{ padding: '100px 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px' }}>
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
          }}
        >
          {industriesList.map((item) => (
            <div
              key={item.id}
              className="glass-panel interactive-card"
              onClick={() => setSelectedIndustry(item)}
              style={{
                padding: '28px 24px',
                borderRadius: 'var(--theme-border-radius)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-primary)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
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
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                  {item.name}
                </h3>
                <span style={{ fontSize: '0.78rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
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
              background: 'rgba(0,0,0,0.65)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
            }}
            onClick={() => setSelectedIndustry(null)}
          >
            <div
              className="glass-panel"
              style={{
                width: '100%',
                maxWidth: '540px',
                padding: '36px',
                borderRadius: '24px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-active)',
                boxShadow: 'var(--card-shadow-hover)',
                position: 'relative',
                animation: 'modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedIndustry(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
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
              >
                <X size={20} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
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
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: 'var(--accent-secondary)',
                    }}
                  >
                    Industry Focus
                  </span>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {selectedIndustry.name}
                  </h3>
                </div>
              </div>

              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
                How OberonVison Helps This Industry:
              </h4>
              <p style={{ fontSize: '0.975rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
                {selectedIndustry.desc}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                  <Check size={16} style={{ color: 'var(--accent-primary)' }} /> Optimized Customer Acquisition Funnel
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                  <Check size={16} style={{ color: 'var(--accent-primary)' }} /> Mobile-Responsive & Fast Page Load
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                  <Check size={16} style={{ color: 'var(--accent-primary)' }} /> Dedicated Ongoing Technical Assistance
                </div>
              </div>

              <a
                href="#contact"
                onClick={() => setSelectedIndustry(null)}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '14px',
                  borderRadius: '30px',
                  background: 'var(--accent-primary)',
                  color: 'var(--text-on-accent)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                }}
              >
                Discuss {selectedIndustry.name} Project
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Industries;
