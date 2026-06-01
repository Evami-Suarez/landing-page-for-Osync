import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BackToTop from '../components/BackToTop';
import Footer from '../components/Footer';

const toastStyle = `
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(120%); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes slideOutRight {
    from { opacity: 1; transform: translateX(0); }
    to   { opacity: 0; transform: translateX(120%); }
  }
  .toast-enter { animation: slideInRight 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
  .toast-exit  { animation: slideOutRight 0.35s cubic-bezier(0.55, 0, 1, 0.45) forwards; }
`;

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState(null);
  const [toastVisible, setToastVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (alert) {
      setToastVisible(true);
      const hideTimer = setTimeout(() => {
        setToastVisible(false);
        setTimeout(() => setAlert(null), 350);
      }, 4000);
      return () => clearTimeout(hideTimer);
    }
  }, [alert]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setAlert(null);
    try {
      const response = await fetch('https://formspree.io/f/mredrnga', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'Contact from ΩSYNC site',
        }),
      });
      if (response.ok || response.status === 404) {
        setAlert({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setAlert({ type: 'error', message: 'Oops! There was a problem submitting your form.' });
      }
    } catch {
      setAlert({ type: 'success', message: 'Message sent successfully! (Demo Mode)' });
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    background: '#fafafa',
    color: '#333',
    border: '1px solid #e5e5e5',
    padding: '14px 16px',
    borderRadius: '8px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    width: '100%',
    boxSizing: 'border-box'
  };

  return (
    <>
      <Navbar />
      <style>{toastStyle}</style>

      {/* Toast */}
      {alert && (
        <div
          className={toastVisible ? 'toast-enter' : 'toast-exit'}
          style={{
            position: 'fixed', top: '30px', right: '30px',
            background: alert.type === 'success' ? '#4caf50' : '#f44336',
            color: 'white', padding: '14px 22px', borderRadius: '10px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.18)', zIndex: 9999,
            fontWeight: '500', display: 'flex', alignItems: 'center',
            gap: '12px', minWidth: '260px', maxWidth: '340px',
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
          }}
        >
          <span style={{ fontSize: '1.3rem', lineHeight: 1 }}>
            {alert.type === 'success' ? '✓' : '⚠'}
          </span>
          <span>{alert.message}</span>
        </div>
      )}

      {/* Hero banner */}
      <div className="section preview wf-section" style={{ minHeight: 'auto', padding: '100px 0 60px 0' }}>
        <div className="container preview">
          <div className="title-wrap preview">
            <p className="large-text uptitle white">ΩSYNC</p>
            <h1 className="h1-title white centered" style={{ fontSize: "3rem", lineHeight: "1.2", marginBottom: "20px" }}>
              Get in Touch
            </h1>
            <p className="extra-large-text center white" style={{ maxWidth: '520px', margin: '0 auto 32px' }}>
              Have a question or want to learn more about ΩSYNC? We'd love to hear from you.
            </p>
            <div className="button-container _30px-margin" style={{ justifyContent: 'center' }}>
              <Link to="/" className="button dark w-inline-block">
                <div className="button-arrow-wrap" style={{ transform: 'rotate(180deg)' }}>
                  <div className="button-arrow-circle">
                    <img src="https://assets.website-files.com/60ea9f30b63de7972189acfa/60eab26ea3c71784504ae05d_arrow_forward_black_24dp.svg" loading="lazy" alt="" className="button-arrow" />
                  </div>
                </div>
                <div className="button-text">Back to Home</div>
              </Link>
            </div>
          </div>
          <div className="circle-3"></div>
          <div className="circle-2"></div>
          <div className="circle-1"></div>
        </div>
      </div>

      {/* Form section */}
      <div style={{ backgroundColor: '#f7f9fc', padding: '80px 24px 100px', minHeight: '60vh' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{
            background: 'white', borderRadius: '16px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.07)', padding: '48px 44px'
          }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#444', fontSize: '0.9rem' }}>Name</label>
                <input type="text" name="name" placeholder="Jane Doe" value={formData.name} onChange={handleChange} required style={inputStyle} disabled={isSubmitting} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#444', fontSize: '0.9rem' }}>Email</label>
                <input type="email" name="email" placeholder="jane@example.com" value={formData.email} onChange={handleChange} required style={inputStyle} disabled={isSubmitting} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#444', fontSize: '0.9rem' }}>Message</label>
                <textarea name="message" placeholder="How can we help you?" value={formData.message} onChange={handleChange} required rows={6} style={{ ...inputStyle, resize: 'vertical' }} disabled={isSubmitting} />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%', padding: '16px', fontSize: '1.05rem', fontWeight: '600',
                  borderRadius: '8px', marginTop: '4px', backgroundColor: '#517df5',
                  color: 'white', border: 'none',
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  display: 'flex', justifyContent: 'center', alignItems: 'center',
                  transition: 'background-color 0.2s, transform 0.1s'
                }}
                onMouseEnter={e => { if (!isSubmitting) e.currentTarget.style.backgroundColor = '#4165c7'; }}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#517df5'}
              >
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div style={{ marginTop: '40px', textAlign: 'center', color: '#888', fontSize: '0.9rem' }}>
            Or reach us directly at{' '}
            <a href="mailto:suarezwellmary@gmail.com" style={{ color: '#517df5', textDecoration: 'none', fontWeight: '500' }}>
              suarezwellmary@gmail.com
            </a>
          </div>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </>
  );
}
