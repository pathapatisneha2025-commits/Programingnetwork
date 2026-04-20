import React from 'react';

const BusinessServices = () => {
  const services = [
    {
      title: "Water Filtration",
      description: "End-to-end setups for premium purified water production.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1200",
      icon: "💧"
    },
    {
      title: "Sustainable Packaging",
      description: "Automated manufacturing lines for eco-friendly disposables.",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=1200",
      icon: "🍽️"
    },
    {
      title: "Solar Energy Systems",
      description: "Next-gen renewable energy with intelligent grid monitoring.",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1200",
      icon: "☀️"
    },
    {
      title: "Hospitality Ventures",
      description: "Scalable models for high-traffic food and beverage outlets.",
      image: "https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?auto=format&fit=crop&q=80&w=1200",
      icon: "☕"
    },
    {
      title: "Dairy Enterprise",
      description: "Industrial-grade milk processing and supply chain solutions.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
      icon: "🥛"
    },
    {
      title: "Livestock Management",
      description: "Optimized poultry farming systems for commercial output.",
      image: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&q=80&w=1200",
      icon: "🥚"
    },
    {
      title: "Premium Grooming",
      description: "Turnkey setups for high-end modern salon experiences.",
      image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=1200",
      icon: "✂️"
    }
  ];

  return (
    <div style={styles.container}>
      {/* Header Section Updated to match Screenshot */}
      <div style={styles.headerSection}>
        <p style={styles.subHeader}>WHAT WE OFFER</p>
        <h1 style={styles.mainTitle}>
          Business setups across <span style={styles.highlightText}>essential</span> sectors
        </h1>
        <p style={styles.description}>
          Each service comes with end-to-end guidance — from planning to launch — so you can focus on running your business.
        </p>
      </div>

      <div style={styles.grid}>
        {services.map((service, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.imageWrapper}>
              <img src={service.image} alt={service.title} style={styles.image} />
              <div style={styles.iconBadge}>{service.icon}</div>
            </div>
            <div style={styles.cardBody}>
              <h3 style={styles.cardTitle}>{service.title}</h3>
              <p style={styles.cardText}>{service.description}</p>
              <a href="#" style={styles.viewDetails}>
                View details <span style={{ marginLeft: '4px' }}>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Inter', sans-serif",
    padding: '80px 24px',
    backgroundColor: '#ffffff',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  headerSection: {
    textAlign: 'center',
    marginBottom: '64px',
  },
  subHeader: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#059669',
    letterSpacing: '0.2em',
    marginBottom: '16px',
    textTransform: 'uppercase',
  },
  mainTitle: {
    fontSize: '48px',
    fontWeight: '800',
    color: '#1f2937',
    marginBottom: '24px',
    lineHeight: '1.2',
  },
  highlightText: {
    // Multi-color gradient for the word "essential" as seen in screenshot
    backgroundImage: 'linear-gradient(to right, #059669, #3b82f6, #f59e0b)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
  },
  description: {
    fontSize: '18px',
    color: '#6b7280',
    maxWidth: '750px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', 
    gap: '32px',
  },
  card: {
    borderRadius: '24px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    border: '1px solid #f3f4f6',
  },
  imageWrapper: {
    position: 'relative',
    height: '240px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  iconBadge: {
    position: 'absolute',
    top: '16px',
    left: '16px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '10px',
    borderRadius: '12px',
    fontSize: '20px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
  },
  cardBody: {
    padding: '24px',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '10px',
  },
  cardText: {
    fontSize: '14px',
    color: '#6b7280',
    marginBottom: '20px',
    lineHeight: '1.5',
    minHeight: '42px',
  },
  viewDetails: {
    textDecoration: 'none',
    color: '#059669',
    fontWeight: '700',
    fontSize: '14px',
    display: 'inline-flex',
    alignItems: 'center',
  }
};

export default BusinessServices;