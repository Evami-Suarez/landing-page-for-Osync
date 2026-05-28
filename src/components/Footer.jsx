import React from 'react';

export default function Footer() {
  return (
    <div className="footer wf-section">
      <div className="container">
        <div className="w-layout-grid footer-split-grid">
          <div className="footer-column">
            <h2 style={{ color: "white", marginBottom: "20px" }}>ΩSYNC</h2>
            <p className="footer-text">Offline-First Payment Infrastructure<br/>Contact: contact@osync.ph</p>
            <div className="footer-social-wrapper">
              <a href="#" target="_blank" rel="noreferrer" className="social-link w-inline-block">
                <img src="https://assets.website-files.com/60ea9f30b63de7972189acfa/60eae63e8c8efb6adb77c52a_facebook.svg" alt="" />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="social-link w-inline-block">
                <img src="https://assets.website-files.com/60ea9f30b63de7972189acfa/60eae63e8c8efbfb4677c52b_twitter.svg" alt="" />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="social-link w-inline-block">
                <img src="https://assets.website-files.com/60ea9f30b63de7972189acfa/60eae63e8c8efb6f5177c529_instagram.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="footer-3-columns-grid">
            <div className="footer-column">
              <div className="footer-title">Navigation</div>
              <a href="#About" className="footer-link">About</a>
              <a href="#Problem" className="footer-link">Problem We Solve</a>
              <a href="#Team" className="footer-link">Team</a>
            </div>
            <div className="footer-column">
              <div className="footer-title">Product</div>
              <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
              <a href="/terms-of-use" className="footer-link">Terms of Use</a>
              <a href="/template-info/licenses" className="footer-link">Image Licence Info</a>
            </div>
            <div className="footer-column-right">
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-credits">
            © 2026 ΩSYNC
          </div>
        </div>
      </div>
    </div>
  );
}
