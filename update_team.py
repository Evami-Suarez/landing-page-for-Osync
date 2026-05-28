import re

with open("src/components/Team.jsx", "r") as f:
    content = f.read()

# Add import for evami image
if "import evamiImg" not in content:
    content = content.replace("import React from 'react';", "import React from 'react';\nimport evamiImg from '../assets/evami.png';")

# Update Evami Suarez entry
content = content.replace(
    '{ name: "Evami Suarez", role: "Full-Stack Engineering" },',
    '{ name: "Evami Suarez", role: "Full-Stack Engineering", github: "https://github.com/Evami-Suarez", linkedin: "https://www.linkedin.com/in/evami-suarez", image: evamiImg },'
)

# Update rendering logic
old_render = """<div style={{ width: "100px", height: "100px", borderRadius: "50%", background: "#eee", margin: "0 auto 15px" }}></div>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "5px" }}>{member.name}</h3>
              <p style={{ color: "#666", marginBottom: "15px" }}>{member.role}</p>
              <a href="#" style={{ color: "#333", margin: "0 5px" }}>LinkedIn</a> | <a href="#" style={{ color: "#333", margin: "0 5px" }}>GitHub</a>"""

new_render = """{member.image ? (
                <img src={member.image} alt={member.name} style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover", margin: "0 auto 15px", display: "block" }} />
              ) : (
                <div style={{ width: "100px", height: "100px", borderRadius: "50%", background: "#eee", margin: "0 auto 15px" }}></div>
              )}
              <h3 style={{ fontSize: "1.25rem", marginBottom: "5px" }}>{member.name}</h3>
              <p style={{ color: "#666", marginBottom: "15px" }}>{member.role}</p>
              <a href={member.linkedin || "#"} style={{ color: "#333", margin: "0 5px" }} target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a href={member.github || "#"} style={{ color: "#333", margin: "0 5px" }} target="_blank" rel="noopener noreferrer">GitHub</a>"""

content = content.replace(old_render, new_render)

with open("src/components/Team.jsx", "w") as f:
    f.write(content)
