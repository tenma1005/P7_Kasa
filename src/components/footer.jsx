import React from "react";

import logoFooter from "../images/logo_footer.png";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <img src={logoFooter} alt="" />
      <p className="copyright"> © {currentYear} Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
