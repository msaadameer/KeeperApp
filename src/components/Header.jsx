import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStickyNote } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="custom-header">
      <FontAwesomeIcon icon={faStickyNote} className="header-icon" />
      <h1 className="header-title">My Notes</h1>
    </header>
  );
}

export default Header;
