import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      title: "End-to-end Support",
      description: "Site survey, equipment, training and launch — all coordinated for you.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
        </svg>
      )
    },
    {
      title: "Community First",
      description: "We design models that benefit local entrepreneurs and their neighborhoods.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    },
    {
      title: "Sustainable Growth",
      description: "Sectors with steady demand, designed to grow with your effort.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
        </svg>
      )
    }
  ];

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <div style={styles.header}>
          <p style={styles.subHeader}>WHY CHOOSE US</p>
          <h1 style={styles.mainTitle}>
            A trusted bridge between <span style={styles.greenText}>companies</span><br />
            and <span style={styles.gradientText}>communities</span>
          </h1>
        </div>

        <div style={styles.grid}>
          {features.map((item, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.iconContainer}>
                {item.icon}
              </div>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    backgroundColor: '#f1fcf5',
    padding: '60px 20px', // Reduced top padding for mobile
    fontFamily: "'Inter', sans-serif",
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    marginBottom: '48px',
  },
  subHeader: {
    color: '#059669',
    fontSize: '13px',
    fontWeight: '700',
    letterSpacing: '0.15em',
    marginBottom: '12px',
    textTransform: 'uppercase',
  },
  mainTitle: {
    fontSize: 'clamp(32px, 5vw, 52px)', // Mobile-responsive font size
    fontWeight: '600',
    color: '#111827',
    lineHeight: '1.1',
    letterSpacing: '-0.03em',
    margin: 0,
  },
  greenText: {
    color: '#064e3b',
  },
  gradientText: {
    backgroundImage: 'linear-gradient(to right, #065f46, #d97706)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
  },
  grid: {
    display: 'grid',
    // RESPONSIVE LOGIC:
    // It will be 3 columns on desktop, but stack on mobile.
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
    gap: '24px',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '32px',
    border: '1px solid rgba(0,0,0,0.02)',
    boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.05)',
  },
  iconContainer: {
    width: '52px',
    height: '52px',
    backgroundColor: '#f0fdf4',
    borderRadius: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px',
    border: '1px solid #dcfce7',
  },
  cardTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '12px',
  },
  cardDescription: {
    fontSize: '16px',
    color: '#4b5563',
    lineHeight: '1.6',
    margin: 0,
  }
};

export default WhyChooseUs;