import React, { useState } from "react";
import img1 from "./components/img1.png";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Particles from "react-particles-js";
import App from "./App";
// import "./cards.css";
import "./components/index.css";
import IssMap from "./components/iss-map/IssMap.js";
import "./Landingpage.css";
import WelcomePage from "./components/WelcomePage";
import Satellite from "./components/satellite/Satellite";
const LandingPage = () => {
  return (
    <>
      <div className="main_heading">
        <div className="image1">
          <img src={img1} alt="main" />
        </div>

        <div className="image2">
          <img src={img1} alt="main" />
        </div>
        <div data-testid="main_heading" className="text">
          <h1> Space Voyager </h1>

          <p> Explore the space at fingertips now </p>
        </div>
      </div>
      <Particles
        data-testid="particle"
        className="particle"
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
              },
            },
            size: {
              value: 5,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 1,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
      <Router>
        <div className="cardblock">
          <Link className="card__category" to="/">
            <span className="page1">Home</span>
          </Link>
          <Link className="card__category" to="/planets">
            <span className="page1"> Explore Planets </span>
          </Link>

          <Link className="card__category" to="/iss">
            <span className="page2"> ISS Live Location </span>
          </Link>
          <Link className="card__category" to="/satellite">
            <span class="page2"> Satellites </span>
          </Link>
        </div>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/planets" component={App} />
        <Route exact path="/iss" component={IssMap} />
        <Route exact path="/satellite" component={Satellite} />

        <div data-testid="footer" className="end">
          <h2 data-testid="footerText">
            {" "}
            Made with 💗 in React by{" "}
            <a href="https://mohittk.github.io"> Mohit </a>
          </h2>
        </div>
      </Router>
    </>
  );
};

export default LandingPage;
