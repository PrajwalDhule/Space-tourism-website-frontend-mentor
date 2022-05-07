import React from "react";
import "../styles/Destination.css";
import { Link } from "react-router-dom";

function move(im, titleValue, b, dt) {
  // alert("Clicked!");
  let images = document.getElementsByTagName("img");
  let title = document.getElementById("title-content");
  let bodies = document.getElementsByClassName("bodyPara");
  let distances = document.getElementsByClassName("dist");
  let times = document.getElementsByClassName("time");
  let max = images.length;
  let i;
  for (i = 0; i < max; i++) {
    images[i].style.transform = `translateY(${im})`;
    bodies[i].style.transform = `translateY(${b})`;
    distances[i].style.transform = `translateY(${dt})`;
    times[i].style.transform = `translateY(${dt})`;
  }
  // title.style.transform = `translateY(${titleValue})`;
  console.log("aaaaaa");
}

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
          <img
            src={require("../starter-code/assets/destination/image-mars.png")}
          ></img>
          <img
            src={require("../starter-code/assets/destination/image-europa.png")}
          ></img>
          <img
            src={require("../starter-code/assets/destination/image-titan.png")}
          ></img>
        </div>
        <div className="right">
          <div className="sub-nav">
            <p onClick={move("0vh", "0vh", "0vh", "0vh")}>MOON</p>

            <p onClick={move("-60vh", "-13vh", "-17.25vh", "-4vh")}>MARS</p>

            <p>EUROPA</p>

            <p>TITAN</p>
          </div>
          <div className="title">
            <p id="title-content">MOON MARS EUROPA TITAN</p>
          </div>
          <div className="body">
            <p className="bodyPara">
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
            <p className="bodyPara">
              Don’t forget to pack your hiking boots. You’ll need them to tackle
              Olympus Mons, the tallest planetary mountain in our solar system.
              It’s two and a half times the size of Everest!
            </p>
            <p className="bodyPara">
              The smallest of the four Galilean moons orbiting Jupiter, Europa
              is a winter lover’s dream. With an icy surface, it’s perfect for a
              bit of ice skating, curling, hockey, or simple relaxation in your
              snug wintery cabin.
            </p>
            <p className="bodyPara">
              The only moon known to have a dense atmosphere other than Earth,
              Titan is a home away from home (just a few hundred degrees
              colder!). As a bonus, you get striking views of the Rings of
              Saturn.
            </p>
          </div>
          <div className="line"></div>
          <div className="info">
            <div className="one">
              <p className="sub">AVG. DISTANCE</p>
              <p className="value">
                <p className="dist">384,400 KM </p>
                <p className="dist">225 MIL. KM</p>
                <p className="dist">628 MIL. KM</p>
                <p className="dist">1.6 BIL. KIM</p>
              </p>
            </div>
            <div className="two">
              <p className="sub">EST. TRAVEL TIME</p>
              <p className="value">
                <p className="time">3 DAYS</p>
                <p className="time">9 MONTHS</p>
                <p className="time">3 YEARS</p>
                <p className="time">7 YEARS</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
