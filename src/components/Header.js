import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="logo-container">
        <img
          src={process.env.PUBLIC_URL + "images/Website_Logo.png"}
          className="company-logo clickable"
          alt="Website_Logo.png"
        />
      </div>
    );
  }
}

export default Header;
