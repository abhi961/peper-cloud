import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <ul class="nav nav_color">
        <li class="nav-item">
          <Link class="nav-link active" to="/activity">
            ACTIVITY
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/information">
            INFORMATION
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
