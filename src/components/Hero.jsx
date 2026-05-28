import React from 'react';

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
