import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
