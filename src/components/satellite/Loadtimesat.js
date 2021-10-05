import React from "react";

function LoadTimeSat() {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <img
        alt="img-satelite"
        className="load__wrapper__img"
        src={require("../satellite/satellite.png").default}
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
        Search for the Satellites! Know there details right here.
      </h2>
    </div>
  );
}
export default LoadTimeSat;
