import React from 'react';

export default function About() {
  const leftPoints = [
    {
      title: "Offline Transaction Infrastructure",
      body: "Exchange value through QR codes, NFC, or Bluetooth without continuous internet connectivity using cryptographically signed transactions."
    },
    {
      title: "Shared Financial Coordination Layer",
      body: "Enable families, cooperatives, organizations, and communities to manage funds, allocations, contributions, and spending accountability within a transparent shared wallet environment."
    },
    {
      title: "Unified Multi-Institution Experience",
      body: "Coordinate finances across participating banks, e-wallets, and financial service providers through a single user experience while maintaining existing financial relationships."
    }
  ];

  const rightPoints = [
    {
      title: "Allocation & Contribution Management",
      body: "Assign budgets, spending limits, contribution targets, and participant permissions for collaborative financial activities."
    },
    {
      title: "Stellar Settlement & Auditability",
      body: "Synchronize transactions to the Stellar network for settlement, reconciliation, transparency, and verifiable financial records."
    },
    {
      title: "Regulatory-Ready Architecture",
      body: "Designed with auditability, transparency, and standards-based interoperability in mind, following architectural principles commonly used in regulated financial systems and ISO 20022-based ecosystems."
    }
  ];

  const checkIcon = "https://assets.website-files.com/60ea9f30b63de7972189acfa/60feb2cfbbadbe111e105233_check_black_24dp.svg";

  return (
    <div id="About" className="section wf-section">
      <div className="container">
        <h2 className="h2-title centered" style={{ marginBottom: "16px" }}>What We Build</h2>
        <p className="large-text center" style={{ maxWidth: "680px", margin: "0 auto 60px auto", color: "#555" }}>
          A comprehensive infrastructure layer for offline payments and shared financial coordination, powered by Stellar.
        </p>
        <div className="about-two-col" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px 60px",
          maxWidth: "1000px",
          margin: "0 auto"
        }}>
          {/* Left column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
            {leftPoints.map((pt, i) => (
              <div key={i} className="checkmark-grid" style={{ marginBottom: 0 }}>
                <div className="checkmark-circle">
                  <img src={checkIcon} alt="" className="point-icon" />
                </div>
                <p className="text">
                  <strong className="bold-span">{pt.title}</strong> <br />{pt.body}
                </p>
              </div>
            ))}
          </div>
          {/* Right column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
            {rightPoints.map((pt, i) => (
              <div key={i} className="checkmark-grid" style={{ marginBottom: 0 }}>
                <div className="checkmark-circle">
                  <img src={checkIcon} alt="" className="point-icon" />
                </div>
                <p className="text">
                  <strong className="bold-span">{pt.title}</strong> <br /> {pt.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive: stack on mobile */}
      <style>{`
        @media (max-width: 768px) {
          #About .about-two-col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
