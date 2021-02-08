import React from 'react';
import '../../styles/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Header = () => {
    return (
      <div className="header">
        <nav className="navbar headerInner" role="navigation" aria-label="main navigation" style={{ borderBottomWidth: 2, boxShadow: 10  }}>
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="http://istesrmncr.com/img/favicon.png" width="30" height="40" alt="SRM ISTE Logo"/> <strong> INDIAN SOCIETY FOR TECHNICAL EDUCATION </strong>
          </a>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="/">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item" href="/">
      🏠 Home
      </a>

      <a className="navbar-item" href="/">
      🚀 Upcoming Event
      </a>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link" href="/">
          More
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item" href="/">
          👋 About
          </a>
          <a className="navbar-item" href="/">
          👥 Team
          </a>
          <a className="navbar-item" href="/">
          📞 Contact Us
          </a>
          <hr className="navbar-divider" />
          <a className="navbar-item" href="/">
          🤝  Join us
          </a>
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-light" href="/">
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
          <a className="button is-light" href="/">
          <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          <a className="button is-light" href="/">
          <FontAwesomeIcon icon={["fab", "instagram"]} />
          </a>
          <a className="button is-light" href="/">
          <FontAwesomeIcon icon={["fab", "facebook"]} />
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</div>
    );
}


export default Header;
