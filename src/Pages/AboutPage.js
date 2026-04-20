import React from 'react';
import { Handshake, Sprout, Heart, Leaf } from 'lucide-react';

const AboutPage = () => {
  return (
    <div style={styles.pageWrapper}>

      {/* HERO */}
      <section style={styles.heroSection}>
        <span style={styles.overline}>ABOUT US</span>

        <h1 style={styles.heroTitle}>
          Building bridges between <span style={styles.gradientTextGreen}>enterprises and </span>
          <span style={styles.gradientTextOrange}>people</span>
        </h1>

        <p style={styles.heroSubtext}>
          Program Management Networking connects communities with companies to build
          practical and sustainable local businesses.
        </p>
      </section>

      {/* MISSION */}
      <section style={styles.splitSection}>
        <div style={styles.imageContainer}>
          <img
src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200"            alt="Mission"
            style={styles.roundedImage}
          />
        </div>

        <div style={styles.textContainer}>
          <span style={styles.overlineLeft}>OUR MISSION</span>
          <h2 style={styles.sectionTitle}>
            Make ownership <span style={styles.gradientTextBlue}>accessible</span>
          </h2>
          <p style={styles.sectionDescription}>
            We enable local entrepreneurs with partnerships, knowledge and on-ground
            support across essential sectors.
          </p>
        </div>
      </section>

      {/* VISION */}
      <section style={styles.splitSection}>
        <div style={styles.textContainer}>
          <span style={styles.overlineLeft}>OUR VISION</span>
          <h2 style={styles.sectionTitle}>
            Self-reliant <span style={styles.gradientTextGreen}>communities</span>
          </h2>
          <p style={styles.sectionDescription}>
            A network where every neighborhood has strong local businesses serving daily needs.
          </p>
        </div>

        <div style={styles.imageContainer}>
          <img
src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"            alt="Vision"
            style={styles.roundedImage}
          />
        </div>
      </section>

      {/* VALUES */}
   <section style={styles.valuesSection}>
        <h2 style={styles.valuesTitle}>
          Our <span style={styles.gradientBlueOrange}>Core Values</span>
        </h2>
        <div style={styles.valuesGrid}>
          <ValueCard 
            icon={<Handshake size={24} color="#059669" />} 
            title="Trust" 
            desc="Honest partnerships built on transparency." 
          />
          <ValueCard 
            icon={<Sprout size={24} color="#059669" />} 
            title="Growth" 
            desc="Real, measurable progress for every partner." 
          />
          <ValueCard 
            icon={<Heart size={24} color="#059669" />} 
            title="Support" 
            desc="Hands-on guidance from setup to launch." 
          />
          <ValueCard 
            icon={<Leaf size={24} color="#059669" />} 
            title="Sustainability" 
            desc="Models that respect people and planet." 
          />
        </div>
      </section>
    </div>
  );
};

const ValueCard = ({ icon, title, desc }) => (
  <div style={styles.card}>
    <div style={styles.iconCircle}>{icon}</div>
    <h4 style={styles.cardTitle}>{title}</h4>
    <p style={styles.cardDesc}>{desc}</p>
  </div>
);

const styles = {
  pageWrapper: {
    backgroundColor: '#f8fafc',
    fontFamily: 'system-ui, sans-serif',
    color: '#1f2937',
    paddingBottom: '80px',
  },

  heroSection: {
    textAlign: 'center',
    padding: '80px 20px',
    background: 'linear-gradient(to bottom, #f0fdf4 0%, #ffffff 100%)',
  },

  heroTitle: {
    fontSize: '42px',
    fontWeight: '750',
    maxWidth: '850px',
    margin: '16px auto',
    lineHeight: '1.2',
    letterSpacing: '-0.8px',
  },

  heroSubtext: {
    fontSize: '16px',
    color: '#6b7280',
    maxWidth: '650px',
    margin: '0 auto',
    lineHeight: '1.6',
  },

  overline: {
    color: '#059669',
    fontWeight: '700',
    letterSpacing: '2px',
    fontSize: '12px',
  },

  overlineLeft: {
    color: '#059669',
    fontWeight: '700',
    letterSpacing: '2px',
    fontSize: '12px',
    display: 'block',
    marginBottom: '8px',
  },

  splitSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '50px',
    padding: '70px 10%',
    maxWidth: '1100px',
    margin: '0 auto',
  },

  textContainer: { flex: 1 },
  imageContainer: { flex: 1 },

  roundedImage: {
    width: '100%',
    height: '360px',
    objectFit: 'cover',
    borderRadius: '32px',
    boxShadow: '0 15px 30px rgba(0,0,0,0.06)',
  },

  sectionTitle: {
    fontSize: '34px',
    fontWeight: '700',
    marginBottom: '14px',
    letterSpacing: '-0.6px',
  },

  sectionDescription: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#4b5563',
  },

  valuesSection: {
    textAlign: 'center',
    padding: '100px 20px',
    // Background glow from the bottom corner
    background: 'radial-gradient(ellipse at bottom, rgba(5, 150, 105, 0.12) 0%, rgba(255, 255, 255, 0) 70%)',
  },
  valuesTitle: {
    fontSize: '46px',
    fontWeight: '800',
    marginBottom: '60px',
  },
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '24px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '40px 20px',
    borderRadius: '24px',
    border: '1px solid #f1f5f9',
    boxShadow: '0 4px 25px rgba(0,0,0,0.03)', // Soft shadow matching screenshot
  },
  iconCircle: {
    width: '56px',
    height: '56px',
    backgroundColor: '#f0fdf4',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px auto',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: '700',
    marginBottom: '10px',
  },
  cardDesc: {
    fontSize: '15px',
    color: '#6b7280',
    lineHeight: '1.5',
  },
  // COLORS AND GRADIENTS
  textEmerald: { color: '#064e3b' },
  textGreen: { color: '#059669' },
  gradientBlueOrange: {
    background: 'linear-gradient(90deg, #1e40af 0%, #d97706 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  gradientGreenBlueOrange: {
    background: 'linear-gradient(90deg, #059669 0%, #2563eb 50%, #d97706 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }
};

export default AboutPage;