import React, { Component } from "react";
import logo from "../images/logo.png";
import style from "../styles/Navbar.module.css";

class Navbar extends Component {
  render() {
    return (
      <nav className={style.sidebar}>
        <div className={style.logo}>
          <img src={logo} alt="logo" />
          <div className={style.c_name}>Cinemeye</div>
          <div className={style.search}>
            <input
              id="search"
              type="search"
              placeholder="Search..."
              autofocus
              required
            />
          </div>
          <div className={style.lang}>
            <input
              id="search"
              type="search"
              placeholder="EN"
              autofocus
              required
            />
          </div>
          <div className={style.login}>
            <input id="search" type="button" value="Login" />
          </div>
          <div className={style.trynow}>
            <input id="search" type="button" value="Try Now" />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
