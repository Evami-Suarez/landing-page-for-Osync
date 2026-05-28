import React from 'react';

export default function Navbar() {
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
          <a href="/" aria-current="page" className="brand w-nav-brand w--current">
            <h2 style={{ margin: "0" }}>ΩSYNC</h2>
          </a>
        </div>
        <nav role="navigation" className="menu-right w-nav-menu">
          <a href="#About" className="nav-link w-inline-block">
            <div>About</div>
          </a>
          <a href="#Problem" className="nav-link w-inline-block">
            <div>Problem We Solve</div>
          </a>
          <a href="#Team" className="nav-link w-inline-block">
            <div>Team</div>
          </a>
          <a href="#Contact" className="nav-link w-inline-block">
            <div>Contact</div>
          </a>
        </nav>
        <div className="menu-button w-nav-button">
          <div className="w-icon-nav-menu"></div>
        </div>
      </div>
    </div>
  );
}
