import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react'; // Using lucide-react for the icons

const Footer = () => {
  return (
    <footer style={styles.footerContainer}>
      <div style={styles.mainContent}>
        {/* Left Column: Branding */}
        <div style={styles.brandColumn}>
          <div style={styles.logoRow}>
            <div style={styles.logoCircle}>
              {/* Replace with your actual <img> tag */}
              <img src="/componylogo.jpeg" alt="logo" style={styles.logoImg} />
            </div>
            <div>
              <h3 style={styles.brandTitle}>Program Management Networking</h3>
              <p style={styles.brandSubtitle}>Empowering local communities</p>
            </div>
          </div>
          <p style={styles.brandDescription}>
            We connect established companies with local entrepreneurs to set up 
            sustainable businesses across water, energy, food, and lifestyle sectors.
          </p>
        </div>

        {/* Middle Column: Quick Links */}
        <div style={styles.linkColumn}>
          <h4 style={styles.columnTitle}>QUICK LINKS</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>Home</li>
            <li style={styles.listItem}>About Us</li>
            <li style={styles.listItem}>Services</li>
            <li style={styles.listItem}>Contact</li>
          </ul>
        </div>

        {/* Right Column: Contact */}
        <div style={styles.contactColumn}>
          <h4 style={styles.columnTitle}>CONTACT</h4>
          <div style={styles.contactItem}>
            <Phone size={18} style={styles.icon} />
            <span>+91 98765 43210</span>
          </div>
          <div style={styles.contactItem}>
            <Mail size={18} style={styles.icon} />
            <span>hello@pmnetworking.com</span>
          </div>
          <div style={styles.contactItem}>
            <MapPin size={18} style={styles.icon} />
            <span>Hyderabad, Telangana, India</span>
          </div>
        </div>
      </div>

      <div style={styles.bottomBar}>
        © 2026 Program Management Networking. All rights reserved.
      </div>
    </footer>
  );
};

const styles = {
  footerContainer: {
    width: '100%',
    // Matching the soft green gradient from the screenshot
    background: 'linear-gradient(to top, #e8f5e9 0%, #ffffff 100%)',
    padding: '80px 0 20px 0',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    color: '#374151',
  },
  mainContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr 1.2fr', // Matches column proportions
    gap: '40px',
    alignItems: 'start',
  },
  brandColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  logoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  logoCircle: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '1px solid #e5e7eb',
  },
  logoImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  brandTitle: {
    fontSize: '20px',
    fontWeight: '700',
    margin: 0,
    color: '#111827',
  },
  brandSubtitle: {
    fontSize: '12px',
    color: '#059669', // Brand green
    margin: 0,
  },
  brandDescription: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: '#4b5563',
    maxWidth: '400px',
  },
  columnTitle: {
    fontSize: '14px',
    fontWeight: '700',
    letterSpacing: '0.05em',
    marginBottom: '24px',
    color: '#111827',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    fontSize: '15px',
    marginBottom: '12px',
    color: '#4b5563',
    cursor: 'pointer',
  },
  contactColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '15px',
    color: '#4b5563',
  },
  icon: {
    color: '#059669', // Green icons as seen in UI
  },
  bottomBar: {
    marginTop: '60px',
    paddingTop: '20px',
    borderTop: '1px solid rgba(0,0,0,0.05)',
    textAlign: 'center',
    fontSize: '13px',
    color: '#9ca3af',
  }
};

export default Footer;