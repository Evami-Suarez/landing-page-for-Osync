import React from 'react';
import evamiImg from '../assets/evami.png';
import jeraldImg from '../assets/jerald.png';
import maryImg from '../assets/mary.jpeg'

export default function Team() {
  const teamMembers = [
    { name: "Mary Suarez", role: "Founder / Product Lead / Frontend Support", github: "https://github.com/Swellmary", linkedin: "https://www.linkedin.com/in/well-mary-suarez-2b511217b", image: maryImg },
    { name: "Al Dave Alba", role: "Lead Backend Architect / Infrastructure Engineering" },
    { name: "Jerald Timbang", role: "Full-Stack Engineering", github: "https://github.com/jerald-timbang", linkedin: "https://www.linkedin.com/in/jeraldtimbang", image: jeraldImg },
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
          ΩSYNC is actively built by a multidisciplinary team of experts with the combined experience to deliver every layer of a complex financial protocol. We have aligned specialized talent across backend architecture, full-stack development, UI/UX design, cybersecurity, and regulatory compliance to ensure our platform is robust, secure, and audit-ready.
        </p>
        <div className="content-grid preview" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "30px" }}>
          {teamMembers.map((member, index) => {
            return (
              <div key={index} className="preview-card" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "20px", background: "white", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", height: "100%", boxSizing: "border-box", transition: "transform 0.3s ease, box-shadow 0.3s ease" }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)"; }}>
                {member.image ? (
                  <img src={member.image} alt={member.name} style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover", margin: "0 auto 15px", display: "block" }} />
                ) : (
                  <div style={{ width: "100px", height: "100px", borderRadius: "50%", background: "#eee", margin: "0 auto 15px" }}></div>
                )}
                <h3 style={{ fontSize: "1.25rem", marginBottom: "5px" }}>{member.name}</h3>
                <p style={{ color: "#666", marginBottom: "15px", flexGrow: 1 }}>{member.role}</p>
                <div style={{ marginTop: "auto" }}>
                  <a href={member.linkedin || "#"} style={{ color: "#333", margin: "0 5px", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">LinkedIn</a> 
                  <span style={{ color: "#ccc" }}>|</span> 
                  <a href={member.github || "#"} style={{ color: "#333", margin: "0 5px", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
