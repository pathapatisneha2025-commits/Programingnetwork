import React from 'react';
import { Handshake, Sprout, Heart, Leaf } from 'lucide-react';

const AboutPage = () => {
  return (
    <>
      {/* ✅ MOBILE RESPONSIVE CSS ONLY */}
      <style>{`
        @media (max-width: 768px) {

          .heroTitle {
            font-size: 28px !important;
            padding: 0 10px;
          }

          .heroSubtext {
            font-size: 14px !important;
            padding: 0 10px;
          }

          .splitSection {
            flex-direction: column !important;
            padding: 50px 16px !important;
            text-align: center;
          }

          .roundedImage {
            height: 240px !important;
          }

          .sectionTitle {
            font-size: 24px !important;
          }

          .valuesTitle {
            font-size: 28px !important;
          }

          .card {
            padding: 30px 16px !important;
          }
        }
      `}</style>

      <div style={styles.pageWrapper}>

        {/* HERO */}
        <section style={styles.heroSection}>
          <span style={styles.overline}>ABOUT US</span>

          <h1 className="heroTitle" style={styles.heroTitle}>
            Building bridges between <span style={styles.gradientTextGreen}>enterprises and </span>
            <span style={styles.gradientTextOrange}>people</span>
          </h1>

          <p className="heroSubtext" style={styles.heroSubtext}>
            Program Management Networking connects communities with companies to build
            practical and sustainable local businesses.
          </p>
        </section>

        {/* MISSION */}
        <section className="splitSection" style={styles.splitSection}>
          <div style={styles.imageContainer}>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200"
              alt="Mission"
              className="roundedImage"
              style={styles.roundedImage}
            />
          </div>

          <div style={styles.textContainer}>
            <span style={styles.overlineLeft}>OUR MISSION</span>
            <h2 className="sectionTitle" style={styles.sectionTitle}>
              Make ownership <span style={styles.gradientTextBlue}>accessible</span>
            </h2>
            <p style={styles.sectionDescription}>
              We enable local entrepreneurs with partnerships, knowledge and on-ground
              support across essential sectors.
            </p>
          </div>
        </section>

        {/* VISION */}
        <section className="splitSection" style={styles.splitSection}>
          <div style={styles.textContainer}>
            <span style={styles.overlineLeft}>OUR VISION</span>
            <h2 className="sectionTitle" style={styles.sectionTitle}>
              Self-reliant <span style={styles.gradientTextGreen}>communities</span>
            </h2>
            <p style={styles.sectionDescription}>
              A network where every neighborhood has strong local businesses serving daily needs.
            </p>
          </div>

          <div style={styles.imageContainer}>
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
              alt="Vision"
              className="roundedImage"
              style={styles.roundedImage}
            />
          </div>
        </section>

        {/* VALUES */}
        <section style={styles.valuesSection}>
          <h2 className="valuesTitle" style={styles.valuesTitle}>
            Our <span style={styles.gradientBlueOrange}>Core Values</span>
          </h2>

          <div style={styles.valuesGrid}>
            <ValueCard icon={<Handshake size={24} color="#059669" />} title="Trust" desc="Honest partnerships built on transparency." />
            <ValueCard icon={<Sprout size={24} color="#059669" />} title="Growth" desc="Real, measurable progress for every partner." />
            <ValueCard icon={<Heart size={24} color="#059669" />} title="Support" desc="Hands-on guidance from setup to launch." />
            <ValueCard icon={<Leaf size={24} color="#059669" />} title="Sustainability" desc="Models that respect people and planet." />
          </div>
        </section>
      </div>
    </>
  );
};

const ValueCard = ({ icon, title, desc }) => (
  <div className="card" style={styles.card}>
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
    flexWrap: 'wrap'
  },

  textContainer: { flex: 1, minWidth: '280px' },
  imageContainer: { flex: 1, minWidth: '280px' },

  roundedImage: {
    width: '100%',
    height: '360px',
    objectFit: 'cover',
    borderRadius: '32px',
  },

  sectionTitle: {
    fontSize: '34px',
    fontWeight: '700',
    marginBottom: '14px',
  },

  sectionDescription: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#4b5563',
  },

  valuesSection: {
    textAlign: 'center',
    padding: '100px 20px',
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
  },

  gradientBlueOrange: {
    background: 'linear-gradient(90deg, #1e40af 0%, #d97706 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }
};

export default AboutPage;