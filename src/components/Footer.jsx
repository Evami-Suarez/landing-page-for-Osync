import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <div className="footer wf-section" style={{ backgroundColor: 'transparent', color: '#333', padding: '40px 0 30px 0', textAlign: 'center' }}>
      {!isContactPage && (
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
          <Link 
            to="/contact" 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px 24px',
              backgroundColor: '#517df5',
              color: 'white',
              borderRadius: '30px',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'background-color 0.2s',
              boxShadow: '0 4px 12px rgba(81, 125, 245, 0.2)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4165c7'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#517df5'}
          >
            Get in Touch
          </Link>
        </div>
      )}
      <div className="footer-credits" style={{ fontSize: '0.9rem', opacity: 0.8, color: '#666' }}>SCF © 2026</div>
    </div>
  );
}
