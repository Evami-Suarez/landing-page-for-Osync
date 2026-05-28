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
            <img src={phoneImg} loading="lazy" alt="" className="_100-image" />
          </div>
        </div>
      </div>
    </div>
  );
}
