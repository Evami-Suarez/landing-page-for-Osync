import os

hero_code = """import React from 'react';

export default function Hero() {
  return (
    <div className="section preview wf-section">
      <div className="container preview _80px-padding">
        <div className="title-wrap preview">
          <p className="large-text uptitle white">ΩSYNC</p>
          <h1 className="h1-title white centered" style={{ fontSize: "3rem", lineHeight: "1.2" }}>
            Offline-First Payment Infrastructure &<br />Unified Wallet
          </h1>
          <p className="extra-large-text center white">
            Enabling peer-to-peer fiat transactions without constant internet connectivity — built for millions of unbanked and underserved Filipinos.
          </p>
          <div className="button-container _30px-margin">
            <a href="#About" className="button dark w-inline-block">
              <div className="button-arrow-wrap">
                <div className="button-arrow-circle">
                  <img src="https://assets.website-files.com/60ea9f30b63de7972189acfa/60eab26ea3c71784504ae05d_arrow_forward_black_24dp.svg" loading="lazy" alt="" className="button-arrow" />
                </div>
              </div>
              <div className="button-text">Learn More</div>
            </a>
            <a href="mailto:contact@osync.ph" className="button secondary white-text w-inline-block">
              <div className="button-arrow-wrap">
                <div className="button-arrow-circle">
                  <img src="https://assets.website-files.com/60ea9f30b63de7972189acfa/60eab26ea3c71784504ae05d_arrow_forward_black_24dp.svg" loading="lazy" alt="" className="button-arrow" />
                </div>
              </div>
              <div className="button-text">Contact Team</div>
            </a>
          </div>
        </div>
        <div className="circle-3"></div>
        <div className="circle-2"></div>
        <div className="circle-1"></div>
      </div>
    </div>
  );
}
"""

about_code = """import React from 'react';

export default function About() {
  return (
    <div id="About" className="section wf-section">
      <div className="container">
        <div className="content-grid">
          <div className="text-column _500px-max-width">
            <h2 className="h2-title">What We Build</h2>
            
            <div className="checkmark-grid">
              <div className="checkmark-circle">
                <img src="https://assets.website-files.com/60ea9f30b63de7972189acfa/60feb2cfbbadbe111e105233_check_black_24dp.svg" alt="" className="point-icon" />
              </div>
              <p className="text">
                <strong className="bold-span">Offline transaction engine</strong> - exchange value without internet using QR, NFC, or Bluetooth with cryptographic security.
              </p>
            </div>

            <div className="checkmark-grid">
              <div className="checkmark-circle">
                <img src="https://assets.website-files.com/60ea9f30b63de7972189acfa/60feb2cfbbadbe111e105233_check_black_24dp.svg" alt="" className="point-icon" />
              </div>
              <p className="text">
                <strong className="bold-span">Unified wallet shared ledger</strong> - transact across different Philippine financial institutions in one ecosystem.
              </p>
            </div>

            <div className="checkmark-grid">
              <div className="checkmark-circle">
                <img src="https://assets.website-files.com/60ea9f30b63de7972189acfa/60feb2cfbbadbe111e105233_check_black_24dp.svg" alt="" className="point-icon" />
              </div>
              <p className="text">
                <strong className="bold-span">Not a bank</strong> - a payment orchestration layer.
              </p>
            </div>

            <div className="checkmark-grid">
              <div className="checkmark-circle">
                <img src="https://assets.website-files.com/60ea9f30b63de7972189acfa/60feb2cfbbadbe111e105233_check_black_24dp.svg" alt="" className="point-icon" />
              </div>
              <p className="text">
                <strong className="bold-span">Compliant & Standardized</strong> - Aligned with BSP regulations and ISO 20022 standards.
              </p>
            </div>

            <div className="checkmark-grid no-margin">
              <div className="checkmark-circle">
                <img src="https://assets.website-files.com/60ea9f30b63de7972189acfa/60feb2cfbbadbe111e105233_check_black_24dp.svg" alt="" className="point-icon" />
              </div>
              <p className="text">
                <strong className="bold-span">Stellar Integration</strong> - Built on the Stellar network.
              </p>
            </div>

          </div>
          <div className="image-wrap">
            <img src="https://assets.website-files.com/60ea9f30b63de7972189acfa/60eeef1dfea493bf3f34785d_Black.jpg" loading="lazy" alt="" className="_100-image" />
          </div>
        </div>
      </div>
    </div>
  );
}
"""

problem_code = """import React from 'react';

export default function Problem() {
  return (
    <div id="Problem" className="section wf-section" style={{ backgroundColor: "#f7f9fc" }}>
      <div className="container">
        <div className="content-grid" style={{ gridTemplateColumns: "1fr", textAlign: "center" }}>
          <div className="text-column" style={{ margin: "0 auto", maxWidth: "900px" }}>
            <h2 className="h2-title">The Problem We Solve</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px", marginTop: "40px", textAlign: "left" }}>
              <div style={{ background: "white", padding: "30px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
                <h3 style={{ marginBottom: "15px", fontSize: "1.25rem" }}>Financial Inclusion</h3>
                <p className="text">Millions of Filipinos remain unbanked or underserved by traditional financial institutions.</p>
              </div>
              <div style={{ background: "white", padding: "30px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
                <h3 style={{ marginBottom: "15px", fontSize: "1.25rem" }}>Connectivity Issues</h3>
                <p className="text">Unreliable internet connectivity in many areas prevents consistent access to digital payments.</p>
              </div>
              <div style={{ background: "white", padding: "30px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
                <h3 style={{ marginBottom: "15px", fontSize: "1.25rem" }}>Inefficiencies</h3>
                <p className="text">High fees and slow processing times plague traditional interbank transfers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
"""

footer_code = """import React from 'react';

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
              <a href="#Navigation-Bar" className="footer-arrow w-inline-block">
                <img src="https://assets.website-files.com/60ea9f30b63de7972189acfa/60eae63e8c8efb2d3d77c527_BackTop_Arrow.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-credits">
            SCF © 2026
          </div>
        </div>
      </div>
    </div>
  );
}
"""

with open("src/components/Hero.jsx", "w") as f: f.write(hero_code)
with open("src/components/About.jsx", "w") as f: f.write(about_code)
with open("src/components/Problem.jsx", "w") as f: f.write(problem_code)
with open("src/components/Footer.jsx", "w") as f: f.write(footer_code)

