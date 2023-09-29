import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
function Footer() {
  return (
    <div className="footer">
      Made by Nodirbek Developer &nbsp;
      <Link
        to={`https://github.com/numonovnodirbek`}
        style={{ fontSize: "14px" }}
      >
        GITHUB
      </Link>
    </div>
  );
}

export default Footer;
