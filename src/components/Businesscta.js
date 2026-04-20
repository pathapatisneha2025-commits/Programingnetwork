import React from 'react';

const BusinessCTA = () => {
  return (
    <div style={styles.sectionWrapper}>
      <div style={styles.ctaCard}>
        <h2 style={styles.title}>Ready to start your local business?</h2>
        <p style={styles.description}>
          Tell us about your interest and location — our team will guide you on the 
          best-suited setup.
        </p>
        <button style={styles.ctaButton}>
          Get in touch 
          <span style={styles.arrow}>→</span>
        </button>
      </div>
    </div>
  );
};

const styles = {
  sectionWrapper: {
    width: '100%',
    padding: '60px 0', // Spacing above and below the box
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  ctaCard: {
    // --- UPDATED DIMENSIONS ---
    width: '94%',               // Controls the side margins
    maxWidth: '1100px',         // Keeps it from getting too wide on huge screens
    padding: '60px 24px',       // Reduced vertical padding makes it "slimmer"
    // ----------------------------
    background: 'linear-gradient(105deg, #058c5f 0%, #1a608d 50%, #d97706 100%)',
    borderRadius: '35px',       
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    color: '#ffffff',
    boxSizing: 'border-box',
  },
  title: {
    fontSize: '44px',           
    fontWeight: '700',
    margin: '0 0 16px 0',
    letterSpacing: '-1px',
    lineHeight: '1.2',
  },
  description: {
    fontSize: '18px',
    lineHeight: '1.5',
    maxWidth: '550px',         
    margin: '0 0 32px 0',
    opacity: '0.9',
  },
  ctaButton: {
    backgroundColor: '#ffffff',
    color: '#065f46', 
    padding: '12px 28px',
    borderRadius: '100px',
    border: 'none',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
  },
  arrow: {
    fontSize: '20px',
    fontWeight: '300',
  }
};

export default BusinessCTA;