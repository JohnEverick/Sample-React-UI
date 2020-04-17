import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <ul className="footer-nav">
          <li className="clickable">運営会社</li>
          <li className="clickable">個人情報保護について</li>
        </ul>
        <p className="copyright">©2016 Sample</p>
      </div>
    );
  }
}

export default Footer;
