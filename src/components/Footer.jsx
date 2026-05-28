import React from 'react';

const SocialIcon = ({ href, children }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{ 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      backgroundColor: "rgba(81, 125, 245, 0.1)",
      transition: "background-color 0.2s",
      color: "#517df5"
    }}
    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(81, 125, 245, 0.2)"}
    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "rgba(81, 125, 245, 0.1)"}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <div className="footer wf-section" style={{ backgroundColor: 'transparent', color: '#333', padding: '40px 0 30px 0', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '20px' }}>
        <SocialIcon href="mailto:suarezwellmary@gmail.com">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-5.141-5.929h21.035l-10.517 8.524-10.518-8.524zm5.922 4.795l4.596 3.725 4.592-3.722 5.536 6.842h-20.258l5.534-6.845zm4.596 1.642l-4.225-3.424-5.263-4.264h18.974l-5.262 4.263-4.224 3.425z"/>
          </svg>
        </SocialIcon>
        <SocialIcon href="#">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </SocialIcon>
        <SocialIcon href="#">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
          </svg>
        </SocialIcon>
        <SocialIcon href="#">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
          </svg>
        </SocialIcon>
      </div>
      <div className="footer-credits" style={{ fontSize: '0.9rem', opacity: 0.8, color: '#666' }}>SCF © 2026</div>
    </div>
  );
}
