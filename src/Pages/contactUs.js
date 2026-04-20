import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const styles = {
    container: {
      fontFamily: "'Inter', sans-serif",
      color: '#1a1a1a',
      background: 'linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)',
      padding: '60px 20px',
      minHeight: '100vh',
      boxSizing: 'border-box',
    },
    heroSection: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: '1100px',
      margin: '0 auto 80px auto',
      gap: '40px',
      flexWrap: 'wrap',
    },
    heroContent: {
      flex: '1',
      minWidth: '300px',
    },
    heroTag: {
      color: '#059669',
      fontSize: '14px',
      fontWeight: '600',
      letterSpacing: '1px',
      marginBottom: '12px',
      textTransform: 'uppercase',
    },
    heroTitle: {
      fontSize: '56px',
      fontWeight: '700',
      lineHeight: '1.1',
      margin: '0 0 24px 0',
      color: '#064e3b',
    },
    heroSpan: {
      background: 'linear-gradient(90deg, #059669 0%, #d97706 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    heroSubtext: {
      fontSize: '18px',
      color: '#475569',
      maxWidth: '450px',
      lineHeight: '1.6',
    },
    heroImage: {
      flex: '1',
      minWidth: '350px',
      height: '450px',
      backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '32px',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    },
    gridSection: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      maxWidth: '1100px',
      margin: '0 auto',
      gap: '30px',
    },
    infoColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
    card: {
      backgroundColor: '#ffffff',
      padding: '24px',
      borderRadius: '24px',
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
      border: '1px solid #f1f5f9',
    },
    iconBox: {
      width: '48px',
      height: '48px',
      borderRadius: '12px',
      backgroundColor: '#f0fdf4',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#059669',
    },
    cardLabel: {
      fontSize: '12px',
      fontWeight: '600',
      color: '#94a3b8',
      textTransform: 'uppercase',
      marginBottom: '2px',
    },
    cardValue: {
      fontSize: '16px',
      fontWeight: '500',
      color: '#1e293b',
    },
    hoursCard: {
      background: 'linear-gradient(135deg, #065f46 0%, #0369a1 50%, #ea580c 100%)',
      padding: '30px',
      borderRadius: '24px',
      color: '#ffffff',
      marginTop: '10px',
    },
    formCard: {
      backgroundColor: '#ffffff',
      padding: '40px',
      borderRadius: '32px',
      boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.04)',
      border: '1px solid #f1f5f9',
    },
    formTitle: {
      fontSize: '32px',
      fontWeight: '700',
      marginBottom: '8px',
      color: '#0f172a',
    },
    formSub: {
      color: '#64748b',
      marginBottom: '32px',
      fontSize: '16px',
    },
    inputGroup: {
      marginBottom: '24px',
    },
    label: {
      display: 'block',
      fontWeight: '600',
      marginBottom: '10px',
      fontSize: '14px',
      color: '#334155',
    },
    input: {
      width: '100%',
      padding: '16px 20px',
      borderRadius: '16px',
      border: '1px solid #e2e8f0',
      backgroundColor: '#fcfcfc',
      fontSize: '16px',
      boxSizing: 'border-box',
      outline: 'none',
      transition: 'border-color 0.2s',
    },
    textarea: {
      width: '100%',
      padding: '16px 20px',
      borderRadius: '16px',
      border: '1px solid #e2e8f0',
      backgroundColor: '#fcfcfc',
      fontSize: '16px',
      minHeight: '130px',
      boxSizing: 'border-box',
      resize: 'none',
      outline: 'none',
      transition: 'border-color 0.2s',
    },
    submitBtn: {
      width: '100%',
      padding: '18px',
      backgroundColor: '#059669',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @media (max-width: 768px) {
            h1 { font-size: 38px !important; }
            .hero-img-div { height: 300px !important; min-width: 100% !important; }
            .grid-container { grid-template-columns: 1fr !important; }
          }
          input:focus, textarea:focus { border-color: #059669 !important; }
          .submit-btn:hover { opacity: 0.9; }
        `}
      </style>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <p style={styles.heroTag}>CONTACT US</p>
          <h1 style={styles.heroTitle}>
            Let's <span style={styles.heroSpan}>start a conversation</span>
          </h1>
          <p style={styles.heroSubtext}>
            Share a few details and our team will get back to you with the next steps.
          </p>
        </div>
        <div className="hero-img-div" style={styles.heroImage}></div>
      </section>

      {/* Main Grid Content */}
      <section className="grid-container" style={styles.gridSection}>
        {/* Left Info Column */}
        <div style={styles.infoColumn}>
          <div style={styles.card}>
            <div style={styles.iconBox}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <div>
              <div style={styles.cardLabel}>Phone</div>
              <div style={styles.cardValue}>+91 98765 43210</div>
            </div>
          </div>

          <div style={styles.card}>
            <div style={styles.iconBox}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <div>
              <div style={styles.cardLabel}>Email</div>
              <div style={styles.cardValue}>hello@pmnetworking.com</div>
            </div>
          </div>

          <div style={styles.card}>
            <div style={styles.iconBox}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <div>
              <div style={styles.cardLabel}>Address</div>
              <div style={styles.cardValue}>Jubilee Hills, Hyderabad, Telangana — 500033, India</div>
            </div>
          </div>

          <div style={styles.hoursCard}>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '22px' }}>Working hours</h3>
            <p style={{ margin: '0 0 4px 0', opacity: 0.85 }}>Monday – Saturday</p>
            <p style={{ margin: 0, fontWeight: '600', fontSize: '18px' }}>10:00 AM – 7:00 PM IST</p>
          </div>
        </div>

        {/* Right Form Column */}
        <div style={styles.formCard}>
          <h2 style={styles.formTitle}>Send us a message</h2>
          <p style={styles.formSub}>We typically respond within one business day.</p>
          
          <form onSubmit={(e) => e.preventDefault()}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Your name</label>
              <input type="text" placeholder="Full name" style={styles.input} />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Phone number</label>
              <input type="text" placeholder="+91 ..." style={styles.input} />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Message</label>
              <textarea placeholder="Tell us which service interests you and your location..." style={styles.textarea} />
            </div>

            <button className="submit-btn" style={styles.submitBtn}>
              Send message <span style={{fontSize: '18px'}}>↗</span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;