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
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Big_12_logo_in_Texas_Tech_colors.svg/2560px-Big_12_logo_in_Texas_Tech_colors.svg.png"
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

