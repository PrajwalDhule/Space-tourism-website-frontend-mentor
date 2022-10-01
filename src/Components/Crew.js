import React, { useState } from "react";
import "../styles/Destination.css";
import Navbar from "./Navbar";
import Record from "../starter-code/data.json";
import image1 from "../starter-code/assets/crew/image-douglas-hurley.png";
import image2 from "../starter-code/assets/crew/image-mark-shuttleworth.png";
import image3 from "../starter-code/assets/crew/image-victor-glover.png";
import image4 from "../starter-code/assets/crew/image-anousheh-ansari.png";

export default function Crew() {
  const [index, setIndex] = useState(0);
  const arr = [image1, image2, image3, image4];

  const toggle = (index) => {
    setIndex(index);
    let activeItems = document.getElementsByClassName("active-crew");
    let items = document.getElementsByClassName("nav-item-crew");
    for (let i = 0; i < activeItems.length; i++) {
      activeItems[i].classList.remove("active-crew");
    }
    items[index].classList.add("active-crew");
  };

  return (
    <div className="crew-body">
      <Navbar page="crew"></Navbar>
      <div className="container">
        <div className="heading">
          <p>02</p>
          <p>Meet your crew </p>
        </div>
        <div className="content">
          <img
            className="small"
            src={arr[index]}
            alt={Record.crew[index].name.toUpperCase()}
          />
          <div className="img-line"></div>
          <div className="sub-nav small-nav">
            <div
              className="nav-item-crew active-crew"
              onClick={() => toggle(0)}
            ></div>
            <div className="nav-item-crew" onClick={() => toggle(1)}></div>
            <div className="nav-item-crew" onClick={() => toggle(2)}></div>
            <div className="nav-item-crew" onClick={() => toggle(3)}></div>
          </div>

          <p className="role">{Record.crew[index].role.toUpperCase()}</p>
          <div className="title">
            <p>{Record.crew[index].name.toUpperCase()}</p>
          </div>
          <div className="desc">
            <p>{Record.crew[index].bio}</p>
          </div>
          <div className="sub-nav large-nav">
            <div
              className="nav-item-crew active-crew"
              onClick={() => toggle(0)}
            ></div>
            <div className="nav-item-crew" onClick={() => toggle(1)}></div>
            <div className="nav-item-crew" onClick={() => toggle(2)}></div>
            <div className="nav-item-crew" onClick={() => toggle(3)}></div>
          </div>
        </div>
      </div>
      <img
        className="large large-img"
        src={arr[index]}
        alt={Record.crew[index].name.toUpperCase()}
      />
    </div>
  );
}
