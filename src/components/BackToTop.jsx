import React, { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 2500) {
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
