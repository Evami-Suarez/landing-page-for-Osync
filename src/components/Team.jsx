import React from 'react';
import evamiImg from '../assets/evami.png';
import jeraldImg from '../assets/jerald.png';
import maryImg from '../assets/mary.jpeg';
import carlImg from '../assets/CarL.PNG';
import erwinImg from '../assets/Erwin.jpeg';
import daveImg from '../assets/Dave.jpg';
import natImg from '../assets/Nat.jpeg';
import leaImg from '../assets/Lea.png';
import clarkImg from '../assets/clark.jpeg';


export default function Team() {
  // 9 members → 3 cols × 3 rows
  const teamMembers = [
    { name: "Well Mary Suarez",    role: "Founder | Product Lead | Frontend Support",     linkedin: "https://www.linkedin.com/in/well-mary-suarez-2b511217b", image: maryImg },
    { name: "Al Dave Alba",        role: "Lead Backend Architect | Infrastructure & Security Engineering",  linkedin: "https://www.linkedin.com/in/aldavee", image: daveImg },
    { name: "Jesus Carl Sancheja", role: "Mobile Engineering Lead",           linkedin: "https://linkedin.com/in/jesus-carl-sancheja-58555713b/", image: carlImg },
    { name: "Renato Jr. Estravela",role: "UI/UX | Frontend Developer | Security Engineering", linkedin: "https://www.linkedin.com/in/renato-estravela", image: natImg },
    { name: "Jie Clark Terec",     role: "Security Engineering Lead | Full-Stack Engineering", linkedin: "https://www.linkedin.com/in/jieclarkterec/", image: clarkImg},
    { name: "Jerald Timbang",      role: "Full-Stack Engineering",         linkedin: "https://www.linkedin.com/in/jeraldtimbang", image: jeraldImg },
    { name: "Evami Suarez",        role: "Full-Stack Engineering",     linkedin: "https://www.linkedin.com/in/evami-suarez", image: evamiImg },
    { name: "Lea Rose Geroy",      role: "Compliance & Marketing", linkedin: "https://www.linkedin.com/in/lgeroy/", image: leaImg },
    { name: "Jesus Erwin Suarez",  role: "Senior Advisor | Audit | Infrastructure Engineering", linkedin: "https://www.linkedin.com/in/jesus-erwin-suarez-69127566/", image: erwinImg  }
  ];

  return (
    <div id="Team" className="section wf-section">
      <div className="container">
        <h2 className="h2-title centered" style={{ marginBottom: "16px" }}>Team</h2>
        <p className="large-text center" style={{ maxWidth: "760px", margin: "0 auto 60px auto", color: "#555" }}>
          ΩSYNC is built by a team of 9 professionals with experience in software engineering, mobile application development,
          backend architecture, infrastructure engineering, compliance, and secure system design.
        </p>

        {/* 3 × 3 grid */}
        <div className="team-grid-inner" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "28px"
        }}>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "32px 24px 28px",
                background: "white",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                boxSizing: "border-box",
                border: "2px solid transparent",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease"
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#517df5"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "transparent"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)"; }}
            >
              {member.image ? (
                <img src={member.image} alt={member.name} style={{ width: "88px", height: "88px", borderRadius: "50%", objectFit: "cover", marginBottom: "18px", flexShrink: 0 }} />
              ) : (
                <div style={{ width: "88px", height: "88px", borderRadius: "50%", background: "#e8edf2", marginBottom: "18px", flexShrink: 0 }}></div>
              )}
              <h3 style={{ fontSize: "1.05rem", fontWeight: "700", marginBottom: "6px" }}>{member.name}</h3>
              <p style={{ color: "#666", fontSize: "0.88rem", lineHeight: "1.5", marginBottom: "16px", flexGrow: 1 }}>{member.role}</p>
              <div style={{ marginTop: "auto", fontSize: "0.85rem" }}>
                <a href={member.linkedin || "#"} style={{ color: "#517df5", margin: "0 6px", textDecoration: "none", fontWeight: "500" }} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #Team .team-grid-inner { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          #Team .team-grid-inner { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
