import React, { useState } from "react";
import "../styles/Destination.css";
import Navbar from "./Navbar";
import Record from "../starter-code/data.json";
import image1 from "../starter-code/assets/destination/image-moon.png";
import image2 from "../starter-code/assets/destination/image-mars.png";
import image3 from "../starter-code/assets/destination/image-europa.png";
import image4 from "../starter-code/assets/destination/image-titan.png";

export default function Destination() {
  const [index, setIndex] = useState(0);
  const arr = [image1, image2, image3, image4];
  return (
    <div className="dest-body">
      <Navbar page="dest"></Navbar>
      <div className="container">
        <div className="heading">
          <p>01</p>
          <p>Pick your destination</p>
        </div>
        <div className="content">
          <div className="left">
            <img className="planet" src={arr[index]} alt="planet"></img>
          </div>
          <div className="right">
            <div className="sub-nav">
              <p onClick={() => setIndex(0)}>MOON</p>
              <p onClick={() => setIndex(1)}>MARS</p>
              <p onClick={() => setIndex(2)}>EUROPA</p>
              <p onClick={() => setIndex(3)}>TITAN</p>
            </div>
            <div className="title">
              <p className="planet">
                {Record.destinations[index].name.toUpperCase()}
              </p>
            </div>
            <div className="desc">
              <p>{Record.destinations[index].description}</p>
            </div>
            <div className="line"></div>
            <div className="info">
              <div className="one">
                <p className="sub">AVG. DISTANCE</p>
                <h6 className="value">
                  <p className="dist">
                    {Record.destinations[index].distance.toUpperCase()}
                  </p>
                </h6>
              </div>
              <div className="two">
                <p className="sub">EST. TRAVEL TIME</p>
                <h6 className="value">
                  <p className="time">
                    {Record.destinations[index].travel.toUpperCase()}
                  </p>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
