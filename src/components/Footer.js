import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from "react-router-dom";

const Footer = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <footer style={styles.footerContainer}>
      <div style={{
        ...styles.mainContent,
        gridTemplateColumns: isMobile ? '1fr' : '1.5fr 1fr 1.2fr',
        gap: isMobile ? '30px' : '40px',
      }}>

        {/* BRAND */}
        <div style={styles.brandColumn}>
          <div style={styles.logoRow}>
            <div style={styles.logoCircle}>
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

        {/* LINKS */}
        <div>
          <h4 style={styles.columnTitle}>QUICK LINKS</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}><Link to="/" style={styles.link}>Home</Link></li>
            <li style={styles.listItem}><Link to="/about" style={styles.link}>About Us</Link></li>
            <li style={styles.listItem}><Link to="/services" style={styles.link}>Services</Link></li>
            <li style={styles.listItem}><Link to="/contact" style={styles.link}>Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
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
    background: 'linear-gradient(to top, #e8f5e9 0%, #ffffff 100%)',
    padding: '80px 0 20px 0',
    fontFamily: 'system-ui, sans-serif',
    color: '#374151',
  },

  mainContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'grid',
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
    color: '#059669',
    margin: 0,
  },

  brandDescription: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: '#4b5563',
  },

  columnTitle: {
    fontSize: '14px',
    fontWeight: '700',
    marginBottom: '20px',
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
  },

  link: {
    textDecoration: 'none',
    color: '#4b5563',
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
  },

  icon: {
    color: '#059669',
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