import React from 'react';

export default function Problem() {
  return (
    <div id="Problem" className="section wf-section" style={{ backgroundColor: "#f7f9fc" }}>
      <div className="container">
        <div className="content-grid" style={{ gridTemplateColumns: "1fr", textAlign: "center" }}>
          <div className="text-column" style={{ margin: "0 auto", maxWidth: "900px" }}>
            <h2 className="h2-title">The Problem We Solve</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px", marginTop: "40px", textAlign: "left" }}>
              <div style={{ background: "white", padding: "30px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
                <h3 style={{ marginBottom: "15px", fontSize: "1.25rem" }}>Connectivity Limitations</h3>
                <p className="text">Many communities continue to experience unreliable internet connectivity, making digital payments inaccessible during outages, emergencies, and low-connectivity situations.</p>
              </div>
              <div style={{ background: "white", padding: "30px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
                <h3 style={{ marginBottom: "15px", fontSize: "1.25rem" }}>Lack of Shared Financial Coordination</h3>
                <p className="text">Families, OFW-supported households, cooperatives, organizations, and community groups often lack transparent shared wallet solutions for managing funds, tracking contributions, allocating budgets, and maintaining spending accountability.</p>
              </div>
              <div style={{ background: "white", padding: "30px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
                <h3 style={{ marginBottom: "15px", fontSize: "1.25rem" }}>Limited Financial Transparency</h3>
                <p className="text">Most payment platforms are designed primarily for individual account management and provide limited visibility into shared financial activities, making it challenging for groups to track contributions, monitor fund usage, and maintain transparency.</p>
              </div>
              <div style={{ background: "white", padding: "30px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
                <h3 style={{ marginBottom: "15px", fontSize: "1.25rem" }}>Costly & Inefficient Transfers</h3>
                <p className="text">Traditional fund transfers can involve higher transaction fees and settlement delays that create friction when moving value between participants. ΩSYNC leverages Stellar to enable fast, low-cost settlement and financial coordination among users within the ecosystem.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
