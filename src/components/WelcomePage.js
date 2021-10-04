import React from "react";

function Welcomepage() {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <img
        alt="img-satelite"
        className="load__wrapper__img"
        src={require("../components/satellite.png").default}
        width="30%"
        height="30%"
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

export default Welcomepage;
