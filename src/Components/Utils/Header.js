import React from 'react';
import '../../styles/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Header = () => {
    return (
      <div className="header">
        <nav class="navbar headerInner" role="navigation" aria-label="main navigation" style={{ borderBottomWidth: 2, boxShadow: 10  }}>
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="http://istesrmncr.com/img/favicon.png" width="30" height="40" /> <strong> INDIAN SOCIETY FOR TECHNICAL EDUCATION </strong>
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
      🏠 Home
      </a>

      <a class="navbar-item">
      🚀 Upcoming Event
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
          👋 About
          </a>
          <a class="navbar-item">
          👥 Team
          </a>
          <a class="navbar-item">
          📞 Contact Us
          </a>
          <hr class="navbar-divider" />
          <a class="navbar-item">
          🤝  Join us.
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-light"href="https://www.linkedin.com/company/indian-society-for-technical-education-iste-srm-ncr/" target="_blank">
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
          <a class="button is-light"href="https://github.com/ISTESRMNCR"target="_blank">
          <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          <a class="button is-light"href="https://www.instagram.com/iste_srm_offc/"target="_blank">
          <FontAwesomeIcon icon={["fab", "instagram"]} />
          </a>
          <a class="button is-light" href="https://www.facebook.com/AskISTESRMNCR/"target="_blank">
          <FontAwesomeIcon icon={["fab", "facebook"]} />
          </a>
          <a class="button is-light" href="https://discord.gg/ZrcJ5Qv"target="_blank">
          <FontAwesomeIcon icon={["fab", "discord"]} />
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
