import re

# Update BackToTop.jsx
with open("src/components/BackToTop.jsx", "r") as f:
    bt_code = f.read()

bt_code = bt_code.replace("window.scrollY > 300", "window.scrollY > 700")

bt_code = re.sub(
    r"opacity: 1,\s*transition: 'opacity 0.3s ease-in-out'",
    r"opacity: isVisible ? 1 : 0,\n            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',\n            pointerEvents: isVisible ? 'auto' : 'none',\n            transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out'",
    bt_code
)

# wait, the original code wraps the button in {isVisible && (...) } so if it's not visible, it's unmounted and the transition doesn't happen.
# Let's rewrite BackToTop.jsx entirely for proper css transition.
bt_code = """import React, { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 700) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <a 
      href="#Navigation-Bar" 
      onClick={scrollToTop}
      className="footer-arrow w-inline-block"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 999,
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        pointerEvents: isVisible ? 'auto' : 'none',
        transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)'
      }}
    >
      <img src="https://assets.website-files.com/60ea9f30b63de7972189acfa/60eae63e8c8efb2d3d77c527_BackTop_Arrow.svg" alt="Back to top" />
    </a>
  );
}
"""

with open("src/components/BackToTop.jsx", "w") as f:
    f.write(bt_code)

# Update About.jsx image
with open("src/components/About.jsx", "r") as f:
    about_code = f.read()

# Since we need to import phone.png or use it from assets folder
# In vite, we can import it: import phoneImg from '../assets/phone.png';
if "import phoneImg from" not in about_code:
    about_code = about_code.replace("import React from 'react';", "import React from 'react';\nimport phoneImg from '../assets/phone.png';")

about_code = about_code.replace(
    'src="https://assets.website-files.com/60ea9f30b63de7972189acfa/60eeef1dfea493bf3f34785d_Black.jpg"',
    'src={phoneImg}'
)

with open("src/components/About.jsx", "w") as f:
    f.write(about_code)

# Update index.css to hide webflow badge
with open("src/index.css", "a") as f:
    f.write("\n\n/* Hide Webflow badge */\n.w-webflow-badge {\n  display: none !important;\n}\n")
