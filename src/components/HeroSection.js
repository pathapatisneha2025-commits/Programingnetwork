import React from 'react';

const HeroSection = () => {
  const styles = {
    heroContainer: {
      fontFamily: "'Inter', 'Segoe UI', Roboto, sans-serif",
      // Updated to match the specific green-glow background from the screenshot
      background: 'radial-gradient(circle at 80% 20%, #dcfce7 0%, #f0fdf4 35%, #ffffff 100%)',
      padding: '60px 8%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    },
    layout: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 0.8fr',
      alignItems: 'center',
      gap: '40px',
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      backgroundColor: 'white',
      border: '1px solid #d1fae5',
      padding: '8px 16px',
      borderRadius: '20px',
      fontSize: '14px',
      fontWeight: '600',
      color: '#059669',
      marginBottom: '24px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
    },
    heading: {
      fontSize: 'clamp(48px, 6vw, 84px)',
      fontWeight: '800',
      color: '#064e3b',
      lineHeight: '1.05',
      margin: '0 0 30px 0',
      letterSpacing: '-2px',
    },
    businessGradient: {
      // Updated to match the green-to-brown/orange gradient in "Businesses"
      background: 'linear-gradient(to right, #0d9488 20%, #92400e 80%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'inline-block',
    },
    description: {
      fontSize: '20px',
      lineHeight: '1.6',
      color: '#4b5563',
      maxWidth: '600px',
      marginBottom: '40px',
    },
    btnRow: {
      display: 'flex',
      gap: '16px',
      marginBottom: '80px',
    },
    exploreBtn: {
      backgroundColor: '#059669',
      color: 'white',
      padding: '16px 32px',
      borderRadius: '30px',
      border: 'none',
      fontSize: '17px',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    talkBtn: {
      backgroundColor: 'white',
      color: '#1f2937',
      padding: '16px 32px',
      borderRadius: '30px',
      border: '1px solid #e5e7eb',
      fontSize: '17px',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    },
    statsGrid: {
      display: 'flex',
      gap: '80px',
    },
    statItem: {
      display: 'flex',
      flexDirection: 'column',
    },
    statNum: {
      fontSize: '36px',
      fontWeight: '700',
      color: '#064e3b',
    },
    statLabel: {
      fontSize: '14px',
      color: '#6b7280',
    },
    imageWrapper: {
      position: 'relative',
    },
    mainImg: {
      width: '100%',
      borderRadius: '32px',
      display: 'block',
      boxShadow: '0 30px 60px -12px rgba(0,0,0,0.1)',
    },
    floatingCard: {
      position: 'absolute',
      bottom: '-30px',
      left: '-30px',
      backgroundColor: 'white',
      padding: '16px 24px',
      borderRadius: '20px',
      boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
    },
    graphCircle: {
      backgroundColor: '#f0fdf4',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#22c55e',
    },
    whatsapp: {
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      backgroundColor: '#22c55e',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0 10px 15px rgba(34, 197, 94, 0.3)',
      cursor: 'pointer',
      zIndex: 1000,
    },
    /* ================= MOBILE RESPONSIVE ONLY ================= */
'@media (max-width: 768px)': {
  heroContainer: {
    padding: '40px 5%',
  },

  layout: {
    gridTemplateColumns: '1fr',
    gap: '30px',
  },

  heading: {
    fontSize: '38px',
    letterSpacing: '-1px',
  },

  description: {
    fontSize: '16px',
    marginBottom: '25px',
  },

  btnRow: {
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '40px',
  },

  exploreBtn: {
    width: '100%',
    justifyContent: 'center',
  },

  talkBtn: {
    width: '100%',
  },

  statsGrid: {
    gap: '25px',
    flexWrap: 'wrap',
  },

  imageWrapper: {
    marginTop: '20px',
  },

  floatingCard: {
    bottom: '-15px',
    left: '10px',
    padding: '12px 16px',
    borderRadius: '16px',
  },

  whatsapp: {
    width: '50px',
    height: '50px',
    bottom: '20px',
    right: '20px',
  }
}
  };

  return (
    <section style={styles.heroContainer}>
      <div style={styles.layout}>
        {/* Left Column */}
        <div>
          <div style={styles.badge}>
            <span style={{ color: '#22c55e' }}>✨</span>
            Building local businesses, together
          </div>

          <h1 style={styles.heading}>
            Empowering <span style={{color: '#064e3b'}}>Local</span><br />
            <span style={styles.businessGradient}>Businesses</span>
          </h1>

          <p style={styles.description}>
            Connecting companies with people for real business opportunities 
            — from water plants and solar setups to dairy, poultry and modern salons.
          </p>

          <div style={styles.btnRow}>
            <button style={styles.exploreBtn}>
              Explore Services <span>→</span>
            </button>
            <button style={styles.talkBtn}>Talk to us</button>
          </div>

          <div style={styles.statsGrid}>
            <div style={styles.statItem}>
              <span style={styles.statNum}>7+</span>
              <span style={styles.statLabel}>Sectors</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statNum}>100%</span>
              <span style={styles.statLabel}>Setup support</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statNum}>Pan-India</span>
              <span style={styles.statLabel}>Reach</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div style={styles.imageWrapper}>
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
            alt="Business team" 
            style={styles.mainImg}
          />
          <div style={styles.floatingCard}>
            <div style={styles.graphCircle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
            </div>
            <div>
              <div style={{ fontWeight: '800', color: '#111827', fontSize: '15px' }}>Growing every month</div>
              <div style={{ fontSize: '13px', color: '#6b7280' }}>Sustainable & scalable</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Icon */}
      <div style={styles.whatsapp}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.002 12.048c0 2.12.54 4.19 1.563 6.02L0 24l6.15-1.612a11.77 11.77 0 005.898 1.583h.005c6.634 0 12.046-5.412 12.048-12.05a11.75 11.75 0 00-3.489-8.513z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;