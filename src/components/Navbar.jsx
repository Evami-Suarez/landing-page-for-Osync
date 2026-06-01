import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      id="Navigation-Bar"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="navigation w-nav"
    >
      <div className="nav-container">
        <div className="menu-left">
          <Link to="/" aria-current="page" className="brand w-nav-brand w--current">
            <h2 style={{ margin: "0" }}>ΩSYNC</h2>
          </Link>
        </div>
        <nav role="navigation" className="menu-right w-nav-menu" data-nav-menu-open={isMenuOpen ? "true" : undefined} style={{ backgroundColor: isMenuOpen ? "#fff" : "" }}>
          <a href="/#About" className="nav-link w-inline-block" onClick={() => setIsMenuOpen(false)}>
            <div>About</div>
          </a>
          <a href="/#Problem" className="nav-link w-inline-block" onClick={() => setIsMenuOpen(false)}>
            <div>Problem We Solve</div>
          </a>
          <a href="/#Team" className="nav-link w-inline-block" onClick={() => setIsMenuOpen(false)}>
            <div>Team</div>
          </a>
          <Link to="/contact" className="nav-link w-inline-block" onClick={() => setIsMenuOpen(false)}>
            <div>Contact</div>
          </Link>
        </nav>
        <div className="menu-button w-nav-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="w-icon-nav-menu"></div>
        </div>
      </div>
    </div>
  );
}
