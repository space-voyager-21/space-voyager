import React from "react";
import './WelcomePage.css';

function Welcomepage() {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <img
        alt="img-satelite"
        className="load__wrapper__img"
        src={require("../components/logo.png").default}
        width="100%"
        
      />
      <h2 className="typing"
        style={{
          marginBottom: "10%",
          color: "white",
          fontFamily: '"Secular One", sans-serif',
          fontSize: "2rem",
          fontStyle: "normal",
        }}
      >
        Welcome to the Space Exploration World!
      </h2>
    </div>
  );
}

export default Welcomepage;
