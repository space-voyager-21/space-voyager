import React from "react";
import './LoadTimePage.css';

function LoadTime() {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <img
        alt="img-satelite"
        className="load__wrapper__img2"
        src={require("../components/planets.png").default}
        width="100%"
      />
      <h2
        style={{
          marginBottom: "10%",
          color: "white",
          fontFamily: '"Secular One", sans-serif',
          fontSize: "1.5rem",
          fontStyle: "normal",
        }}
      >
        Search for the Planets! I am sure you will find something that interests
        you 😁
      </h2>
    </div>
  );
}
export default LoadTime;
