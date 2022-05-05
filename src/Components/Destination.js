import React from "react";
import "../styles/Destination.css";
import { Link } from "react-router-dom";

export default function Destination(props) {
  return (
    <div className="container">
      <div className="heading">
        <p>01</p>
        <p>Pick your destination</p>
      </div>
      <div className="content">
        <div className="left">
          <img
            src={require("../starter-code/assets/destination/image-moon.png")}
          ></img>
        </div>
        <div className="right">
          <div className="nav">
            <Link to="/">
              <p>MOON</p>
            </Link>
            <Link to="/">
              <p>MARS</p>
            </Link>
            <Link to="/">
              <p>EUROPA</p>
            </Link>
            <Link to="/">
              <p>TITAN</p>
            </Link>
          </div>
          <div className="title"></div>
          <div className="body"></div>
          <div className="line"></div>
          <div className="info">
            <div className="one">
              <p className="sub"></p>
              <p className="value"></p>
            </div>
            <div className="two">
              <p className="sub"></p>
              <p className="value"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
