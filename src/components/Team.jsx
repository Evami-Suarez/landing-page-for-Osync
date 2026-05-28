import React from 'react';
import evamiImg from '../assets/evami.png';

export default function Team() {
  const teamMembers = [
    { name: "Mary Suarez", role: "Founder / Product Lead / Frontend Support" },
    { name: "Al Dave Alba", role: "Lead Backend Architect / Infrastructure Engineering" },
    { name: "Jerald Timbang", role: "Full-Stack Engineering" },
    { name: "Evami Suarez", role: "Full-Stack Engineering", github: "https://github.com/Evami-Suarez", linkedin: "https://www.linkedin.com/in/evami-suarez", image: evamiImg },
    { name: "Renato Estravela Jr.", role: "Frontend & Product Experience / Security Support" },
    { name: "Jie Clark Terec", role: "Security Engineering Lead / Backend Engineering" },
    { name: "Jesus Carl Sanchez", role: "Mobile Engineering Lead / Full-Stack / Infrastructure Support" },
    { name: "Lea Rose Geroy", role: "Compliance & Regulatory Readiness" },
    { name: "Jesus Erwin Suarez", role: "Senior Advisor / Audit / Infrastructure Support" }
  ];

  return (
    <div id="Team" className="section wf-section">
      <div className="container">
        <h2 className="h2-title centered" style={{ marginBottom: "20px" }}>Team</h2>
        <p className="large-text center" style={{ maxWidth: "800px", margin: "0 auto 50px auto" }}>
          ΩSYNC is built by a multidisciplinary team of experts with the combined experience to deliver every layer of a complex financial protocol. We have aligned specialized talent across backend architecture, full-stack development, UI/UX design, cybersecurity, and regulatory compliance to ensure our platform is robust, secure, and audit-ready.
        </p>
        <div className="content-grid preview" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "30px" }}>
          {teamMembers.map((member, index) => (
            <div key={index} className="preview-card" style={{ textAlign: "center", padding: "20px", background: "white", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
              {member.image ? (
                <img src={member.image} alt={member.name} style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover", margin: "0 auto 15px", display: "block" }} />
              ) : (
                <div style={{ width: "100px", height: "100px", borderRadius: "50%", background: "#eee", margin: "0 auto 15px" }}></div>
              )}
              <h3 style={{ fontSize: "1.25rem", marginBottom: "5px" }}>{member.name}</h3>
              <p style={{ color: "#666", marginBottom: "15px" }}>{member.role}</p>
              <a href={member.linkedin || "#"} style={{ color: "#333", margin: "0 5px" }} target="_blank" rel="noopener noreferrer">LinkedIn</a> <a href={member.github || "#"} style={{ color: "#333", margin: "0 5px" }} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
