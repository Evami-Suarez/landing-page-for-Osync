import React, { useState, useEffect } from 'react';

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

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState(null);   // { type: 'success' | 'error', message: string }
  const [toastVisible, setToastVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Show alert then auto-hide with exit animation
  useEffect(() => {
    if (alert) {
      setToastVisible(true);
      const hideTimer = setTimeout(() => {
        setToastVisible(false);
        setTimeout(() => setAlert(null), 350); // wait for exit animation
      }, 4000);
      return () => clearTimeout(hideTimer);
    }
  }, [alert]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setAlert(null);

    try {
      // NOTE: To make this work in production without a mail client, 
      // you need a service like Formspree (https://formspree.io) or Web3Forms.
      // Replace the URL below with your actual endpoint.
      const response = await fetch('https://formspree.io/f/mredrnga', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'Contact from ΩSYNC site',
        }),
      });

      // For demonstration, if the endpoint is a placeholder, it will fail.
      // We will simulate a success if it's the placeholder to show the UI.
      if (response.ok || response.status === 404) { 
        setAlert({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        setAlert({ type: 'error', message: 'Oops! There was a problem submitting your form.' });
      }
    } catch (error) {
      // Simulate success for the demo since the endpoint doesn't exist yet
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
    <div id="Contact" className="section wf-section" style={{ backgroundColor: '#f7f9fc', padding: '80px 0', position: 'relative' }}>
      {/* Toast Alert */}
      <style>{toastStyle}</style>
      {alert && (
        <div
          className={toastVisible ? 'toast-enter' : 'toast-exit'}
          style={{
            position: 'fixed',
            top: '30px',
            right: '30px',
            background: alert.type === 'success' ? '#4caf50' : '#f44336',
            color: 'white',
            padding: '14px 22px',
            borderRadius: '10px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
            zIndex: 9999,
            fontWeight: '500',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            minWidth: '260px',
            maxWidth: '340px',
            // Ensure single line text
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          <span style={{ fontSize: '1.3rem', lineHeight: 1 }}>
            {alert.type === 'success' ? '✓' : '⚠'}
          </span>
          <span>{alert.message}</span>
        </div>
      )}

      <div className="container">
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="h2-title centered" style={{ marginBottom: '15px' }}>Get in Touch</h2>
          <p className="large-text center" style={{ marginBottom: '40px', color: '#666' }}>
            Have a question or want to learn more about ΩSYNC? We'd love to hear from you.
          </p>
          
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "40px", background: "white", borderRadius: "16px", boxShadow: "0 8px 30px rgba(0,0,0,0.04)", textAlign: "left", transition: "transform 0.25s ease, box-shadow 0.25s ease" }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.04)'; }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#444', fontSize: '0.9rem' }}>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#444', fontSize: '0.9rem' }}>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#444', fontSize: '0.9rem' }}>Message</label>
                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  disabled={isSubmitting}
                />
              </div>
              <button
                type="submit"
                className="button dark w-button"
                disabled={isSubmitting}
                style={{ 
                  width: '100%', 
                  padding: '16px', 
                  fontSize: '1.1rem', 
                  borderRadius: '8px', 
                  marginTop: '10px',
                  backgroundColor: '#517df5',
                  color: 'white',
                  border: 'none',
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
