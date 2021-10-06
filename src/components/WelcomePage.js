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
      <span className="typing"
        style={{
  
          color: "white",
          fontFamily: '"Secular One", sans-serif',
   
    
          fontStyle: "normal",
        }}
      >
        Welcome to the Space Exploration World !
      </span>
    </div>
  );
}

export default Welcomepage;
