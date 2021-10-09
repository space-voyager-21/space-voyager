import React, { useState, useEffect } from "react";
import "./components/index.css";
import img1 from "./components/img1.png";
import "animate.css";
import "./components/error.css";
import "./components/LoadTimePage.css";
import LoadTime from "./components/LoadTimePage";
import axiosInstance from "./axios";
import ErrorComponent from "./components/Error";
import Constants from "./components/Constant";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Particles from "react-particles-js";
import IssMap from "./components/iss-map/IssMap";

function App() {
  const [data, setData] = useState([]);
  const [path, setPath] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);
  const [querystatus, setquerystatus] = useState(false);
  // const fetchApidata = async () => {
  //   const api = await fetch('https://api.le-systeme-solaire.net/rest/bodies/');
  //   const apiData = await api.json();
  //   console.log(apiData);
  //   setData(apiData.bodies);
  // ?key=23519497-32dcbbb5403142627fd458559&q=yellow+flowers&image_type=photo&pretty=true
  // }

  useEffect(() => {
    setLoad(true);
    setError(false);
    setquerystatus(false);
  }, []);

  const storeData = async (query) => {
    try {
      setError(false);
      const result = await axiosInstance.get(query);
      setData(result.data);
      try {
        const imgPath = require("../assets/" +
          result.data.englishName +
          ".png").default;
        setPath(imgPath);
      } catch {
        setPath(img1);
      }
      setquerystatus(true);
      setQuery("");
    } catch (error) {
      setData("");
      setError(true);
      setquerystatus(true);
    }
  }

  const fetchData = (event) => {
    event.preventDefault();
    storeData(query);
  };

  const planetClick = (event,planetName) =>{
    event.preventDefault();
    storeData(planetName);
  }

  return (
    <BrowserRouter>
      {/* <div className="main_heading">
        <div className="image1">
          <img src={img1} alt="main" />
        </div>
        <div className="image2">
          <img src={img1} alt="main" />
        </div>
        <div data-testid="main_heading" className="text">
          <h1> Space Voyager </h1>

          <p> Explore the space at fingertips </p>
        </div>
      </div> */}
      <Switch>
        <Route path="/planets/" exact>
          <div data-testid="searchkabox" className="searchkabox">
            <form onSubmit={fetchData}>
              <input
                type="text"
                className="searchbar"
                placeholder="Type Planet name then press enter to search"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
              />
              <input className="submit" type="submit" value="Submit" />
            </form>
          </div>
          <div>
          <div className="bar">
                {/* <img alt="Earth" title="Earth" src={Constants.earthPath} onClick={fetchData}/> */}
                <img alt="Mercury" title="Mercury" src={Constants.mercuryPath} onClick={(event) => {planetClick(event,"Mercury")}}/>
                <img alt="Venus" value="Venus" title="Venus" src={Constants.venusPath} onClick={(event) => {planetClick(event,"Venus")}}/>
                <img alt="Earth" value="Earth" title="Earth" src={Constants.earthPath} onClick={(event) => {planetClick(event,"Earth")}}/>
                <img alt="Mars" value="Mars" title="Mars" src={Constants.marsPath} onClick={(event) => {planetClick(event,"Mars")}}/>
                <img alt="Jupiter" value="Jupiter" title="Jupiter" src={Constants.jupiterPath} onClick={(event) => {planetClick(event,"Jupiter")}}/>
                <img alt="Saturn" value="Saturn" title="Saturn" src={Constants.saturnPath} onClick={(event) => {planetClick(event,"Saturn")}}/>
                <img alt="Uranus" value="Uranus" title="Uranus" src={Constants.uranusPath} onClick={(event) => {planetClick(event,"Uranus")}}/>
                <img alt="Neptune" value="Neptune" title="Neptune" src={Constants.neptunePath} onClick={(event) => {planetClick(event,"Neptune")}}/>
                <img alt="Pluto" value="Pluto" title="Pluto" src={Constants.plutoPath} onClick={(event) => {planetClick(event,"Pluto")}}/>
              </div>
          </div>
          <Particles
            data-testid={Constants.particleName}
            className={Constants.particleName}
            params={Constants.particleParam}
          />
          {error && <ErrorComponent type="planet" />}
          {typeof data.name != "undefined" ? (
            <>
              <div className="detailbox">
                <h2> {data.englishName} </h2>
              </div>
              <div className="planimg">
                <img alt="planimg" src={path} />
              </div>

              <div className="deepbox">
                <h3>
                  {" "}
                  Mass of {data.englishName} : {data.mass.massValue}{" "}
                  <span>&#215;</span> 10<sup>{data.mass.massExponent}</sup> kg{" "}
                </h3>
                <h3>
                  {" "}
                  Mean Temperature of {data.englishName} : {data.avgTemp} K{" "}
                </h3>
                <h3>
                  {" "}
                  Mean radius of {data.englishName} : {data.meanRadius} km{" "}
                </h3>
                <h3>
                  {" "}
                  Equitorial Radius of {data.englishName} : {data.equaRadius} km{" "}
                </h3>
                <h3>
                  {" "}
                  Polar radius of {data.englishName} : {data.polarRadius} km{" "}
                </h3>
                <h3>
                  {" "}
                  Surface Gravity of {data.englishName} : {data.gravity} m/s
                  <sup>2</sup>{" "}
                </h3>
                <h3>
                  {" "}
                  Escape Velocity of {data.englishName} :{" "}
                  {Math.floor(data.escape / 1000).toFixed(2)} km/s{" "}
                </h3>
                <h3>
                  {" "}
                  Axial tilt of {data.englishName} : {data.axialTilt} °{" "}
                </h3>
                <h3>
                  {" "}
                  Rotation period of {data.englishName}: {data.sideralRotation}{" "}
                  hrs{" "}
                </h3>
                <h3>
                  {" "}
                  Revolution period of {data.englishName}: {data.sideralOrbit}{" "}
                  days{" "}
                </h3>
                <h3>
                  {" "}
                  Density of {data.englishName}: {data.density} g/cm<sup>3</sup>{" "}
                </h3>
                <h3>
                  {" "}
                  Aphelion of {data.englishName}: {data.aphelion} km{" "}
                </h3>
                <h3>
                  {" "}
                  Perihelion period of {data.englishName}: {data.perihelion} km{" "}
                </h3>
                {/* <h3> Moons of {data.englishName}: {data.moons.map((elem, index) =>{
            return (<span> {elem.moon}, </span>) 
          })}
          </h3> */}
              </div>
            </>
          ) : (
            ""
          )}
          {error === false && load && querystatus === false && <LoadTime />}
          {/* <Link to="/iss-location" className="map-button" >View ISS Location</Link> */}
        </Route>
      </Switch>
      {/* <div data-testid="footer" className="end">
        <h2 data-testid="footerText">
          {" "}
          Made with 💗 in React by{" "}
          <a href="https://mohittk.github.io"> Mohit </a>
        </h2>
      </div> */}
    </BrowserRouter>
  );
}
export default App;
