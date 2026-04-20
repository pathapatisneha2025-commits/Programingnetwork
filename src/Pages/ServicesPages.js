import React from 'react';

const ServicesPage = () => {
  const servicesData = [
    {
      id: 'water-plant',
      name: 'Water Plant',
      icon: '💧',
      tagline: 'Pure, safe drinking water for every home and shop',
      description: 'Set up a complete RO mineral water plant that delivers clean, safe drinking water to homes, offices, schools and retailers in your locality. Backed by quality testing, branding and supply network support — so you build a trusted essential service from day one.',
      image: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80',
      included: ['Multi-stage RO purification system with storage tanks', 'Automatic bottle filling, capping and labelling unit', 'TDS, pH and microbial testing instruments', 'Custom branding, jar dispatch and route planning'],
      benefits: ['Daily, recurring demand from households and businesses', 'Recognised as an essential community service', 'Low manpower requirement with simple operations', 'Easily scalable to nearby villages, schools and offices'],
      requirements: ['300–500 sq.ft covered space with proper drainage', 'Reliable raw water source (borewell or municipal)', 'Three-phase electricity connection', 'Local trade licence and water testing approvals'],
      process: ['On-site water sample testing and feasibility study', 'Custom plant design and equipment procurement', 'Installation, commissioning and water quality validation', 'Operator training, brand setup and market launch']
    },
    {
      id: 'paper-plates',
      name: 'Paper Plates Machines',
      icon: '🍽️',
      tagline: 'Eco-friendly disposables with non-stop demand',
      description: 'Manufacture high-quality paper plates and bowls used every day by caterers, hotels, food trucks and street vendors. With fully automatic machinery, raw material support and ready buyer connections, you start producing — and selling — quickly.',
      image: 'https://images.unsplash.com/photo-1610614819513-58e34989848b?auto=format&fit=crop&w=800&q=80',
      included: ['Single or double-die fully automatic plate machine', 'Hydraulic press with multiple size dies', 'Raw paper sourcing tie-ups at competitive rates', 'Packing setup and assured buyer linkages'],
      benefits: ['Short production cycle — output within minutes', 'Year-round demand from the food industry', 'Compact setup ideal for small towns and home units', 'Operable by 1–2 people with basic training'],
      requirements: ['200–400 sq.ft clean, dry workspace', 'Single-phase or three-phase power supply', 'Dedicated storage for raw paper rolls', 'Local manufacturing / GST registration'],
      process: ['Capacity planning and machine model selection', 'Doorstep delivery and professional installation', 'Hands-on operator training and trial production', 'Introduction to wholesalers and bulk buyers']
    },
    { id: 'solar', name: 'Digital Solar Plant', icon: '☀️', tagline: 'Sustainable energy solutions', description: 'Complete solar panel installation and maintenance.', image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80', included: ['Premium panels'], benefits: ['Lower bills'], requirements: ['Roof space'], process: ['Site visit'] },
    { id: 'tea', name: 'Tea Franchise', icon: '☕', tagline: 'Start your own cafe', description: 'Join a winning brand in the beverage industry.', image: 'https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?auto=format&fit=crop&q=80&w=1200', included: ['Store design'], benefits: ['High ROI'], requirements: ['Commercial area'], process: ['Agreement'] },
    { id: 'dairy', name: 'Dairy Farm', icon: '🥛', tagline: 'Fresh milk production', description: 'Automated dairy farming solutions.', image: 'https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&q=80&w=1200', included: ['Milking machines'], benefits: ['Pure products'], requirements: ['Farm land'], process: ['Cattle selection'] },
  {
      id: 'hen',
      name: 'Hen Farm',
      icon: '🥚',
      tagline: 'Poultry business setup',
      description: 'Large scale poultry management.',
      image:
        'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80',
      included: ['Climate control'],
      benefits: ['Consistent sales'],
      requirements: ['Ventilated sheds'],
      process: ['Layer setup']
    },
        { id: 'salon', name: 'Men\'s Beauty Salon', icon: '✂️', tagline: 'Premium grooming services', description: 'Modern salon setup and training.', image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80', included: ['Chairs & kits'], benefits: ['Loyal client base'], requirements: ['Visible location'], process: ['Interior work'] },
  ];

  const styles = {
    container: { fontFamily: "'Inter', sans-serif", color: '#1a1a1a', backgroundColor: '#f8fafc', scrollBehavior: 'smooth' },
    hero: { 
      textAlign: 'center', padding: '80px 20px', backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0'
    },
    tag: { color: '#059669', fontWeight: '700', fontSize: '12px', letterSpacing: '1.5px', marginBottom: '16px', textTransform: 'uppercase' },
    title: { fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '800', color: '#064e3b', margin: '0 0 20px 0' },
    pillContainer: { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginTop: '32px' },
    pill: {
      padding: '10px 20px', backgroundColor: '#ffffff', color: '#475569', borderRadius: '50px', fontSize: '14px', fontWeight: '600', 
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', textDecoration: 'none', transition: 'all 0.2s'
    },
    section: { padding: '80px 20px', borderBottom: '1px solid #e2e8f0', maxWidth: '1200px', margin: '0 auto' },
spotlight: {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '40px',
  marginBottom: '40px',
  alignItems: 'center',
  justifyContent: 'space-between'
},    spotlightImg: { flex: '1 1 400px', height: '400px', objectFit: 'cover', borderRadius: '24px' },
    spotlightText: { flex: '1 1 400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' },
    infoCard: { backgroundColor: '#ffffff', padding: '24px', borderRadius: '20px', border: '1px solid #e2e8f0' },
    cardHeader: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', fontWeight: '700', color: '#064e3b' },
    listItem: { display: 'flex', gap: '8px', marginBottom: '10px', fontSize: '14px', color: '#475569' },
    check: { color: '#059669', fontWeight: 'bold' },
    enquireBtn: { alignSelf: 'flex-start', marginTop: '20px', padding: '12px 24px', backgroundColor: '#059669', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' },
    spotlight: {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '40px',
  marginBottom: '40px',
  alignItems: 'center'
},


  };

  return (
     <>
  <style>{`
  @media (max-width: 768px) {

    /* HERO */
    .hero h1 {
      font-size: 28px !important;
      padding: 0 10px;
    }

    .hero p {
      font-size: 14px !important;
      padding: 0 10px;
    }

    /* PILL BUTTONS */
    .pill-container {
      gap: 8px !important;
      padding: 0 10px;
    }

    /* SERVICES LAYOUT */
    .spotlight {
      flex-direction: column !important;
      text-align: center;
      align-items: center !important;
    }

    /* ✅ FIXED IMAGE MOBILE QUALITY (IMPORTANT) */
    .spotlight img {
      width: 100% !important;
      height: auto !important;
      max-height: 260px !important;
      object-fit: cover;
      border-radius: 18px !important;
    }

    /* TEXT */
    .spotlight-text {
      align-items: center !important;
      text-align: center !important;
    }

    .spotlight-text h2 {
      font-size: 24px !important;
    }

    .spotlight-text p {
      font-size: 15px !important;
    }

    .spotlight button {
      align-self: center !important;
    }

    /* GRID STACK */
    .grid {
      grid-template-columns: 1fr !important;
    }
  }
`}</style>

    <div style={styles.container}>
      {/* HERO & QUICK NAVIGATION */}
      <div style={styles.hero}>
        <div style={styles.tag}>Our Services</div>
        <h1 style={styles.title}>Explore Our Business <span style={{color:'#059669'}}>Opportunities</span></h1>
        <p style={{color: '#64748b', maxWidth: '600px', margin: '0 auto'}}>Select a business model below to see full requirements, processes, and benefits.</p>
        <div style={styles.pillContainer}>
          {servicesData.map((s) => (
            <a key={s.id} href={`#${s.id}`} style={styles.pill}>
              {s.icon} {s.name}
            </a>
          ))}
        </div>
      </div>

      {/* ALL SERVICES RENDERED SEQUENTIALLY */}
    {servicesData.map((s, index) => (
  <section key={s.id} id={s.id} style={styles.section}>

    <div
      style={{
        ...styles.spotlight,
        flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
        alignItems: 'center'
      }}
    >
      {/* IMAGE */}
      <img src={s.image} alt={s.name} style={styles.spotlightImg} />

      {/* TEXT */}
      <div style={styles.spotlightText}>
        <h2 style={{ fontSize: '32px', color: '#064e3b', fontWeight: '800', marginBottom: '10px' }}>
          {s.icon} {s.name}
        </h2>

        <p style={{ fontSize: '18px', color: '#d97706', fontWeight: '600', marginBottom: '15px' }}>
          {s.tagline}
        </p>

        <p style={{ lineHeight: '1.7', color: '#475569' }}>
          {s.description}
        </p>

        <button style={styles.enquireBtn}>
          Get Started with {s.name} →
        </button>
      </div>
    </div>

    {/* GRID (unchanged) */}
    <div style={styles.grid}>
      <div style={styles.infoCard}>
        <div style={styles.cardHeader}>✨ Included</div>
        {s.included?.map((item, i) => (
          <div key={i} style={styles.listItem}>
            <span style={styles.check}>✓</span> {item}
          </div>
        ))}
      </div>

      <div style={styles.infoCard}>
        <div style={styles.cardHeader}>📈 Benefits</div>
        {s.benefits?.map((item, i) => (
          <div key={i} style={styles.listItem}>
            <span style={styles.check}>✓</span> {item}
          </div>
        ))}
      </div>

      <div style={styles.infoCard}>
        <div style={styles.cardHeader}>📝 Requirements</div>
        {s.requirements?.map((item, i) => (
          <div key={i} style={styles.listItem}>
            <span style={styles.check}>✓</span> {item}
          </div>
        ))}
      </div>

      <div style={styles.infoCard}>
        <div style={styles.cardHeader}>⚙️ Process</div>
        {s.process?.map((item, i) => (
          <div key={i} style={styles.listItem}>
            <span
              style={{
                background: '#f0fdf4',
                padding: '0 6px',
                borderRadius: '4px',
                color: '#059669',
                fontWeight: '800'
              }}
            >
              {i + 1}
            </span>
            {item}
          </div>
        ))}
      </div>
    </div>

  </section>
))}
    </div>
    </>
  );
};

export default ServicesPage;