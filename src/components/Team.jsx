import React from 'react';
import evamiImg from '../assets/evami.png';
import jeraldImg from '../assets/jerald.png';
import maryImg from '../assets/mary.jpeg'
import carlImg from '../assets/CarL.PNG'

export default function Team() {
  const teamMembers = [
    { name: "Well Mary Suarez", role: "Founder | Product Lead | Frontend Support", github: "https://github.com/Swellmary", linkedin: "https://www.linkedin.com/in/well-mary-suarez-2b511217b", image: maryImg },
    { name: "Al Dave Alba", role: "Lead Backend Architect | Infrastructure & Security Engineering", github: "https://github.com/aldavee", linkedin: "https://www.linkedin.com/in/aldavee" },
    { name: "Jesus Carl Sancheja", role: "Mobile Engineering Lead", github: "https://github.com/CarLKnight6", linkedin: "https://linkedin.com/in/jesus-carl-sancheja-58555713b/", image: carlImg },
    { name: "Renato Jr. Estravela", role: "UI/UX | Frontend Developer | Security Engineering" },
    { name: "Jie Clark Terec", role: "Security Engineering Lead | Full-Stack Engineering" },
    { name: "Jerald Timbang", role: "Full-Stack Engineering", github: "https://github.com/jerald-timbang", linkedin: "https://www.linkedin.com/in/jeraldtimbang", image: jeraldImg },
    { name: "Evami Suarez", role: "Full-Stack Engineering", github: "https://github.com/Evami-Suarez", linkedin: "https://www.linkedin.com/in/evami-suarez", image: evamiImg },
    { name: "Lea Rose Geroy", role: "Compliance & Marketing" },
    { name: "Jesus Erwin Suarez", role: "Senior Advisor | Audit | Infrastructure Engineering" }
  ];

  return (
    <div id="Team" className="section wf-section">
      <div className="container">
        <h2 className="h2-title centered" style={{ marginBottom: "20px" }}>Team</h2>
        <p className="large-text center" style={{ maxWidth: "800px", margin: "0 auto 50px auto" }}>
          ΩSYNC is built by a team of 9 professionals with experience in software engineering, mobile application development, backend architecture, infrastructure engineering, compliance, and secure system design. Team members have collectively delivered web platforms, mobile applications, enterprise systems, API integrations, business management systems, and digital products across multiple industries.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px", alignItems: "stretch", width: "100%" }}>
          {teamMembers.map((member, index) => {
            return (
              <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "20px", background: "white", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", boxSizing: "border-box", transition: "transform 0.3s ease, box-shadow 0.3s ease", height: "100%" }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)"; }}>
                {member.image ? (
                  <img src={member.image} alt={member.name} style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover", margin: "0 auto 15px", display: "block", flexShrink: 0 }} />
                ) : (
                  <div style={{ width: "100px", height: "100px", borderRadius: "50%", background: "#eee", margin: "0 auto 15px", flexShrink: 0 }}></div>
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
