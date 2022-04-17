import React from "react";

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
            <a href="">
              <p>00 </p>Home
            </a>
          </li>
          <li>
            <a href="">
              <p>01 </p>Destination
            </a>
          </li>
          <li>
            <a href="">
              <p>02 </p>Crew
            </a>
          </li>
          <li>
            <a href="">
              <p>03 </p>Technology
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
