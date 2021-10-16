import React from "react";
import img1 from "./components/img1.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Particles from "react-particles-js";
import App from "./App";
import "./components/index.css";
import IssMap from "./components/iss-map/IssMap.js";
import "./Landingpage.css";
import WelcomePage from "./components/WelcomePage";
import Satellite from "./components/satellite/Satellite";
import Apod from "./components/apod/Apod";
import Tilt from "react-parallax-tilt";


const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "auto",
    /* you can also use 'auto' behaviour
		in place of 'smooth' */
  });
};
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
          <Tilt>
          <Link className="card__category" to="/" onClick={scrollToBottom}>
            <img src="../images/home.png" id="navimg" alt="mkdv" />

            <span className="page1">Home</span>
          </Link>
          </Tilt>

<Tilt>
          <Link
            className="card__category"
            to="/planets"
            onClick={scrollToBottom}
          >
            <img src="../images/planetexp.jpg" alt="mkdv" />
            <span className="page1"> Explore Planets </span>
          </Link>
          </Tilt>
          
          <Tilt>
          <Link className="card__category" to="/iss" onClick={scrollToBottom}>
            <img src="../images/iss.jpg" alt="mkdv" />
            <span className="page2"> ISS Live Location </span>
          </Link>
          </Tilt>

          <Tilt>
          <Link
            className="card__category"
            to="/satellite"
            onClick={scrollToBottom}
          >
            <img src="../images/satellite.jpg" alt="mkdv" />
            <span class="page2"> Satellites </span>
          </Link>
          </Tilt>

          <Tilt>
          <Link className="card__category" to="/apod" onClick={scrollToBottom}>
            <img src="../images/astronomypic.jpg" alt="mkdv" />
            <span class="page2"> Apod </span>
          </Link>
          </Tilt>
        </div>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/planets" component={App} />
        <Route exact path="/iss" component={IssMap} />
        <Route exact path="/satellite" component={Satellite} />
        <Route exact path="/apod" component={Apod} />

        <div data-testid="footer" className="end">
          <h2 data-testid="footerText">
            {" "}
            <div className="github-button">
            <a className="github" href="https://github.com/space-voyager-21/space-voyager" target="_blank">
              <img src="../images/github-img.png" />

              </a>
            </div>
            Made with 💗 in React by{" "}
            <a href="https://mohittk.github.io"> Mohit </a>
          </h2>
        </div>
      </Router>
    </>
  );
};

export default LandingPage;
