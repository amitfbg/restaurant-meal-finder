import React from "react";

//styling done to this header section
import "./Header.css";

//Importing all the images needed and assigning them some name
import shareIcon from "../../../assets/icons/share.svg";
import searchIcon from "../../../assets/icons/search.svg";
import bookmarkIcon from "../../../assets/icons/bookmark.svg";
import hamburgerIcon from "../../../assets/icons/hamburger.svg";

/* 
Function: Header
Description: It defined how header looks
*/

function Header() {
  return (
    <header>
      <div className="header-left">
        <div className="header-left-mainheader">Foodies Hub</div>
        <div className="header-left-subheader">Cooking Blogs</div>
      </div>
      <div className="header-right">
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>
            <img src={searchIcon} />
          </li>
          <li>
            <img src={shareIcon} />
          </li>
          <li>
            <img src={bookmarkIcon} />
          </li>
        </ul>
      </div>
      <div className="header-right-mobile">
        <img src={hamburgerIcon} />
      </div>
    </header>
  );
}

export default Header;
