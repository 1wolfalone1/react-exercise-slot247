import React, { Component, useContext } from "react";
import "./Navigation.css";
import { ThemeContext } from "../theme/ThemeContext";
export default function Navigation() {
   const { theme, toggle, dark } = useContext(ThemeContext);
   return (
      <nav
         className="nav-container"
         style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
         <ul>
            <li className="active">
               <a href="#home">Home</a>
            </li>
            <li>
               <a href="#news">News</a>
            </li>
            <li>
               <a href="#about">About</a>
            </li>
            <li>
               <a href="#contact">Contact</a>
            </li>
         </ul>
         <div style={{ position: "relative", marginLeft: 'auto' }}>
            <button
               className="switch-mode"
               href="#"
               onClick={toggle}
               style={{
                  backgroundColor: theme.backgroundColor,
                  color: theme.color,
                  outline: "none",
               }}
               data-testid="toggle-theme-btn"
            >
               Switch Nav to {!dark ? "Dark" : "Light"} mode
            </button>
         </div>
      </nav>
   );
}
