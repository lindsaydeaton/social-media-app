import React, {useState} from 'react';
import "./HeaderBar.css";
import { NavMenu } from "../navMenu/NavMenu.js"
import { ProfileMenu } from "../profileMenu/ProfileMenu.js"


export function HeaderBar(data, setData) {
  const [navOpen, setNavOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const navOnClick = () => {
    setNavOpen(!navOpen);
  }
  const profileOnClick = () => {
    setProfileOpen(!profileOpen);
  }
    return (
      <>
      <div className="headerBar">
        <div className="leftMenu">
          <button onClick={navOnClick} className="material-icons-outlined menuIcon">menu</button>
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
          <span className="material-icons-outlined searchIcon">search</span>
          <button onClick={profileOnClick} className="extraRightMenu">
          <img
            className="loggedInUser"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="userLoggedIn"
          />
            <span className="material-icons-outlined downArrow">expand_more</span>
            </button>
        </div>
      </div>
      {navOpen ? <NavMenu /> : <></>}
      {profileOpen ? <ProfileMenu data={data} setData={setData} /> : <></>}

      </>
    );
}

