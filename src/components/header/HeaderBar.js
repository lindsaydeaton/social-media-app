import React from 'react';
import "./HeaderBar.css";

export function HeaderBar(props) {
    return (
      <div className="headerBar">
        <div className="leftMenu">
          <span class="material-icons-outlined menuIcon">menu</span>
          <a href="https://www.gir.co/">
          <img
            className="logo"
            src="https://logodix.com/logo/313435.png"
            alt="Logo"
            height="60px"
            />
            </a>
        </div>

        <div className="rightMenu">
          <span class="material-icons-outlined searchIcon">search</span>
          <div className="extraRightMenu">
          <img
            className="loggedInUser"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="userLoggedIn"
          />
            <span class="material-icons-outlined downArrow">expand_more</span>
            </div>
        </div>
      </div>
    );
}

