import React, { useState } from "react";
import "../styles/Nav.css";
import { Link } from "react-router-dom";
import hamburger from "../starter-code/assets/shared/icon-hamburger.svg";
import close from "../starter-code/assets/shared/icon-close.svg";
// some js left for navbar links when clicked

export default function Navbar(props) {
  const [menuClass, setMenuClass] = useState("");

  return (
    <div className={"nav " + menuClass + "-nav"}>
      <svg
        id="logo-svg"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
      >
        <g fill="none" fillRule="evenodd">
          <circle cx="24" cy="24" r="24" fill="#FFF" />
          <path
            fill="#0B0D17"
            d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
          />
        </g>
      </svg>
      <div className="ham-options">
        <img
          onClick={() => {
            setMenuClass("open");
          }}
          className="ham"
          style={menuClass ? { display: "none" } : { display: "block" }}
          src={hamburger}
        />
        <img
          onClick={() => {
            setMenuClass("");
          }}
          className="ham"
          style={menuClass ? { display: "block" } : { display: "none" }}
          src={close}
        />
      </div>
      <div className="line"></div>
      <nav>
        <ul className={menuClass}>
          <li className={`${props.page}-1`}>
            <div>
              <Link to="/">
                <p className="no">00 </p>
                <p>Home</p>
              </Link>
            </div>
          </li>
          <li className={`${props.page}-2`}>
            <div>
              <Link to="/destination">
                <p className="no">01 </p>
                <p>Destination</p>
              </Link>
            </div>
          </li>
          <li className={`${props.page}-3`}>
            <div>
              <Link to="/crew">
                <p className="no">02 </p>
                <p>Crew</p>
              </Link>
            </div>
          </li>
          <li className={`${props.page}-4`}>
            <div>
              <Link to="/technology">
                <p className="no">03 </p>
                <p>Technology</p>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
