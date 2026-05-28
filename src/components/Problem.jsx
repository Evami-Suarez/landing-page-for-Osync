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
