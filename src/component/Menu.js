import React, { useState } from "react";
import navicon from "./navicon.png";
import CloseNav from "./close.png";
import { Link } from "react-router-dom";
import { SidebarData } from "./MenuData";
import "./Menu.css";

function Menu() {
  const [Menu, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!Menu);
  return (
    <>
      <div className="Menu">
        <Link to="#" className="menu-bars">
          <img src={navicon} alt="logo" onClick={showSidebar} />
        </Link>
        <nav className={Menu ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <img src={CloseNav} alt="menu" onClick={showSidebar} />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span> <hr />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Menu;
