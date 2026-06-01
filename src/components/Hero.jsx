import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="section preview wf-section">
      <div className="container preview _80px-padding">
        <div className="title-wrap preview">
          <p className="large-text uptitle white">ΩSYNC</p>
          <h1 className="h1-title white centered" style={{ fontSize: "3rem", lineHeight: "1.2" }}>
            Offline-First Payment Infrastructure and Interoperable Shared Wallet
          </h1>
          <p className="extra-large-text center white">
            Secure offline payments, transparent shared wallets, and interoperable financial coordination powered by Stellar.
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
            <Link to="/contact" className="button secondary white-text w-inline-block">
              <div className="button-arrow-wrap">
                <div className="button-arrow-circle">
                  <img src="https://assets.website-files.com/60ea9f30b63de7972189acfa/60eab26ea3c71784504ae05d_arrow_forward_black_24dp.svg" loading="lazy" alt="" className="button-arrow" />
                </div>
              </div>
              <div className="button-text">Contact Team</div>
            </Link>
          </div>
        </div>
        <div className="circle-3"></div>
        <div className="circle-2"></div>
        <div className="circle-1"></div>
      </div>
    </div>
  );
}
