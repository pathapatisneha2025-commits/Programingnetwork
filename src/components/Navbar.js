import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid #f1f5f9;
          padding: 1rem 5%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: 'Inter', sans-serif;
        }
          .logo-img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}
        .logo-group { display: flex; align-items: center; gap: 10px; }
        .logo-icon { width: 32px; height: 32px; background: #dcfce7; border-radius: 50%; }
        .logo-text h1 { font-size: 1rem; margin: 0; color: #0f172a; font-weight: 700; }
        .logo-text span { color: #166534; font-size: 0.7rem; font-weight: 700; display: block; margin-top: -2px; }

        .nav-links { display: flex; gap: 2rem; align-items: center; }

        .nav-links a {
          text-decoration: none;
          color: #64748b;
          font-weight: 500;
          font-size: 0.9rem;
          transition: 0.2s;
        }

        .nav-links a:hover { color: #064e3b; }

        .btn-touch {
          background: #064e3b;
          color: white;
          padding: 10px 22px;
          border-radius: 50px;
          border: none;
          font-weight: 600;
          cursor: pointer;
        }

        .hamburger { display: none; cursor: pointer; font-size: 1.5rem; background: none; border: none; }

        .mobile-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: white;
          flex-direction: column;
          padding: 2rem;
          gap: 1.5rem;
          box-shadow: 0 10px 15px rgba(0,0,0,0.1);
        }

        .mobile-menu.open { display: flex; }

        .mobile-menu a {
          text-decoration: none;
          color: #64748b;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .hamburger { display: block; }
        }
      `}</style>

      <nav className="navbar">
        {/* Logo */}
        <div className="logo-group">
<img src="/componylogo.jpeg" alt="Logo" className="logo-img" />
          <div className="logo-text">
            <h1>Program Management</h1>
            <span>Networking</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="nav-links">
          <Link to="/" className="active">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact Us</Link>
          <button className="btn-touch">Get in touch</button>
        </div>

        {/* Mobile toggle */}
        <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
          <button className="btn-touch">Get in touch</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;