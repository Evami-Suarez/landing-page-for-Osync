import React from 'react';
import phoneImg from '../assets/phone.png';

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
                <strong className="bold-span">Offline Transaction Infrastructure</strong> — Exchange value through QR codes, NFC, or Bluetooth without continuous internet connectivity using cryptographically signed transactions.
              </p>
            </div>

            <div className="checkmark-grid">
              <div className="checkmark-circle">
                <img src="https://assets.website-files.com/60ea9f30b63de7972189acfa/60feb2cfbbadbe111e105233_check_black_24dp.svg" alt="" className="point-icon" />
              </div>
              <p className="text">
                <strong className="bold-span">Shared Financial Coordination Layer</strong> — Enable families, cooperatives, organizations, and communities to manage funds, allocations, contributions, and spending accountability within a transparent shared wallet environment.
              </p>
            </div>

            <div className="checkmark-grid">
              <div className="checkmark-circle">
                <img src="https://assets.website-files.com/60ea9f30b63de7972189acfa/60feb2cfbbadbe111e105233_check_black_24dp.svg" alt="" className="point-icon" />
              </div>
              <p className="text">
                <strong className="bold-span">Unified Multi-Institution Experience</strong> — Coordinate finances across participating banks, e-wallets, and financial service providers through a single user experience while maintaining existing financial relationships.
              </p>
            </div>

            <div className="checkmark-grid">
              <div className="checkmark-circle">
                <img src="https://assets.website-files.com/60ea9f30b63de7972189acfa/60feb2cfbbadbe111e105233_check_black_24dp.svg" alt="" className="point-icon" />
              </div>
              <p className="text">
                <strong className="bold-span">Allocation & Contribution Management</strong> — Assign budgets, spending limits, contribution targets, and participant permissions for collaborative financial activities.
              </p>
            </div>

            <div className="checkmark-grid">
              <div className="checkmark-circle">
                <img src="https://assets.website-files.com/60ea9f30b63de7972189acfa/60feb2cfbbadbe111e105233_check_black_24dp.svg" alt="" className="point-icon" />
              </div>
              <p className="text">
                <strong className="bold-span">Stellar Settlement & Auditability</strong> — Synchronize transactions to the Stellar network for settlement, reconciliation, transparency, and verifiable financial records.
              </p>
            </div>

            <div className="checkmark-grid no-margin">
              <div className="checkmark-circle">
                <img src="https://assets.website-files.com/60ea9f30b63de7972189acfa/60feb2cfbbadbe111e105233_check_black_24dp.svg" alt="" className="point-icon" />
              </div>
              <p className="text">
                <strong className="bold-span">Regulatory-Ready Architecture</strong> — Designed with auditability, transparency, and standards-based interoperability in mind, following architectural principles commonly used in regulated financial systems and ISO 20022-based ecosystems.
              </p>
            </div>

          </div>
          <div className="image-wrap">
            <img src={phoneImg} loading="lazy" alt="" className="_100-image" />
          </div>
        </div>
      </div>
    </div>
  );
}
