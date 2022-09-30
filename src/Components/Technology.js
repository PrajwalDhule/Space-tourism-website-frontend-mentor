import React, { useState } from "react";
import "../styles/Destination.css";
import Navbar from "./Navbar";
import Record from "../starter-code/data.json";
import image1 from "../starter-code/assets/technology/image-launch-vehicle-portrait.jpg";
import image2 from "../starter-code/assets/technology/image-spaceport-portrait.jpg";
import image3 from "../starter-code/assets/technology/image-space-capsule-portrait.jpg";
import image4 from "../starter-code/assets/technology/image-launch-vehicle-landscape.jpg";
import image5 from "../starter-code/assets/technology/image-spaceport-landscape.jpg";
import image6 from "../starter-code/assets/technology/image-space-capsule-landscape.jpg";

export default function Technology() {
  const [index, setIndex] = useState(0);
  const arr = [image1, image2, image3, image4, image5, image6];
  const toggle = (index) => {
    setIndex(index);
    let activeItems = document.getElementsByClassName("active");
    let items = document.getElementsByClassName("nav-item");
    for (let i = 0; i < activeItems.length; i++) {
      activeItems[i].classList.remove("active");
    }
    items[index].classList.add("active");
  };
  return (
    <div className="tech-body">
      <Navbar page="tech"></Navbar>
      <div className="container">
        <div className="heading">
          <p>03</p>
          <p>Space launch 101 </p>
        </div>
        {/* <picture>
          <source media="(max-width: 1250px)" srcset={arr[index + 3]} />
          <img src={arr[index]} alt="IfItDoesntMatchAnyMedia" />
        </picture> */}

        <div className="content">
          <img
            className="small"
            src={arr[index + 3]}
            alt={Record.technology[index].name.toUpperCase()}
          />
          <div className="sub-nav">
            <div className="nav-item active" onClick={() => toggle(0)}>
              <p>1</p>
            </div>
            <div className="nav-item" onClick={() => toggle(1)}>
              <p>2</p>
            </div>
            <div className="nav-item" onClick={() => toggle(2)}>
              <p>3</p>
            </div>
          </div>

          <div className="text">
            <p className="role">The terminology...</p>
            <div className="title">
              <p>{Record.technology[index].name.toUpperCase()}</p>
            </div>
            <div className="desc">
              <p>{Record.technology[index].description}</p>
            </div>
          </div>
        </div>
      </div>
      <img
        className="large"
        src={arr[index]}
        alt={Record.technology[index].name.toUpperCase()}
      />

      {/* <img src={arr[index]} alt="planet"></img> */}
    </div>
  );
}
