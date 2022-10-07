import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import Styles from "./Styles.module.css";

import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const location = useLocation();

  const [DropDown, setDropDown] = useState(false);
  return (
    <nav className={Styles.navbar}>
      <div>
        <h1>PostsTask</h1>
      </div>
      <div className={Styles.link_Nav}>
        <ul className={DropDown ? Styles.nav_list : Styles.nav_list_None}>
          <li>
            <NavLink
              to="/PostTask"
              className={location.pathname === "/" ? Styles.active : ""}
            >
              Home
            </NavLink>
          </li>
        </ul>
        <div className={Styles.hamburger_Menu}>
          <GiHamburgerMenu onClick={() => setDropDown(!DropDown)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
