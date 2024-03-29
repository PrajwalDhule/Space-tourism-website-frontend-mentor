import React from "react";
import "../styles/Home.css";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="home">
      <Navbar page="home"></Navbar>
      <div className="home-body">
        <div className="left">
          <p className="medium">So, you want to travel to</p>
          <p className="big">Space</p>
          <p className="small">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="right">
          <div className="button">
            <a href="/destination">EXPLORE</a>
          </div>
        </div>
      </div>
    </div>
  );
}
