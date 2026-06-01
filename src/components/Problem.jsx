import React from 'react';

const problems = [
  {
    title: "Connectivity Limitations",
    body: "Many communities continue to experience unreliable internet connectivity, making digital payments inaccessible during outages, emergencies, and low-connectivity situations."
  },
  {
    title: "Lack of Shared Financial Coordination",
    body: "Families, OFW-supported households, cooperatives, organizations, and community groups often lack transparent shared wallet solutions for managing funds, tracking contributions, allocating budgets, and maintaining spending accountability."
  },
  {
    title: "Limited Financial Transparency",
    body: "Most payment platforms are designed for individual account management and provide limited visibility into shared financial activities, making it challenging for groups to track contributions, monitor fund usage, and maintain transparency."
  },
  {
    title: "Costly & Inefficient Transfers",
    body: "Traditional fund transfers can involve higher transaction fees and settlement delays that create friction. ΩSYNC leverages Stellar to enable fast, low-cost settlement and financial coordination among users."
  }
];

export default function Problem() {
  return (
    <div id="Problem" className="section wf-section" style={{ backgroundColor: "#f7f9fc" }}>
      <div className="container">
        <h2 className="h2-title centered" style={{ marginBottom: "16px" }}>The Problem We Solve</h2>
        <p className="large-text center" style={{ maxWidth: "680px", margin: "0 auto 60px auto", color: "#555" }}>
          Real barriers that prevent inclusive, transparent financial access across communities in the Philippines.
        </p>
        <div className="problem-row" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px"
        }}>
          {problems.map((p, i) => (
            <div key={i} style={{
              background: "white",
              padding: "32px 28px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0", lineHeight: "1.3" }}>{p.title}</h3>
              <p className="text" style={{ margin: 0, lineHeight: "1.65", color: "#555" }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #Problem .problem-row { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          #Problem .problem-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
