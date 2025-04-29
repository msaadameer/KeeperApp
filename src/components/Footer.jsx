import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="custom-footer">
      <p>
        <FontAwesomeIcon icon={faCopyright} className="footer-icon" /> {year} My Notes App
      </p>
    </footer>
  );
}

export default Footer;
