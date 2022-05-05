import React from "react";
import "../styles/Nav.css";
import { Link } from "react-router-dom";
// some js left for navbar links when clicked

export default function Navbar() {
  return (
    <div className="nav">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
        <g fill="none" fill-rule="evenodd">
          <circle cx="24" cy="24" r="24" fill="#FFF" />
          <path
            fill="#0B0D17"
            d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
          />
        </g>
      </svg>
      <div className="line"></div>
      <nav>
        <ul>
          <li>
            <div>
              <Link to="/home">
                <p className="no">00 </p>
                <p>Home</p>
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="/destination">
                <p className="no">01 </p>
                <p>Destination</p>
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="#">
                <p className="no">02 </p>
                <p>Crew</p>
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="#">
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
