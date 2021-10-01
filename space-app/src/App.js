import React, { useState, useEffect } from "react";
import './index.css';
import img1 from './components/img1.png';
import 'animate.css';




import Particles from 'react-particles-js';

const api = {
  base: "https://api.le-systeme-solaire.net/rest/bodies/",
};

function App() {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');

  // const fetchApidata = async () => {
  //   const api = await fetch('https://api.le-systeme-solaire.net/rest/bodies/');
  //   const apiData = await api.json();
  //   console.log(apiData);
  //   setData(apiData.bodies);
  // ?key=23519497-32dcbbb5403142627fd458559&q=yellow+flowers&image_type=photo&pretty=true
  // }



  const search = evt =>{

    if(evt.key === "Enter"){
  
      fetch(`${api.base}${query}`)
      

      .then(res=>res.json())
      .then(result =>{
        setData(result);
        setQuery('');
        console.log(result);
      });
      



     

    }
  }

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
 
       
        <p> Explore the space at fingertips </p>
        </div>
        
      </div>
            
      <div data-testid="searchkabox" className="searchkabox">
        <input type="text" className="searchbar" placeholder="Enter Planet name here"
        onChange={e => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
        />      
        </div>
        <Particles data-testid="particle"  className="particle"
    params={{
	    "particles": {
	        "number": {
	            "value": 200,
	            "density": {
	                "enable": true
	            }
	        },
	        "size": {
	            "value": 5,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 1,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} />
  
        {(typeof data.name != "undefined" ) ? (

          <>
          <div className="detailbox">
          <h2> {data.englishName} </h2>
          </div>
          <div className="planimg">
                  <img  src={require("../assets/"+data.englishName+".png").default} />
            </div>
          

          <div data-testid="info" className="deepbox">
          
          <h3> Mass of {data.englishName} : {data.mass.massValue} <span>&#215;</span> 10<sup>{data.mass.massExponent}</sup> kg </h3>
          <h3> Mean Temprature of {data.englishName} : {data.avgTemp} K </h3>
          <h3> Mean radius of {data.englishName} : {data.meanRadius} km </h3>
          <h3>  Equitorial Radius of {data.englishName} : {data.equaRadius} km </h3>
          <h3> Polar radius of {data.englishName} : {data.polarRadius} km </h3>
          <h3> Surface Gravity of {data.englishName} : {data.gravity} m/s<sup>2</sup> </h3>
          <h3> Escape Velocity of {data.englishName} : {Math.floor(data.escape/1000).toFixed(2)} km/s </h3>
          <h3> Axial tilt of {data.englishName} : {data.axialTilt} ° </h3>
          <h3> Rotation period of {data.englishName}: {data.sideralRotation} hrs </h3>
          <h3> Revolution period of {data.englishName}: {data.sideralOrbit} days </h3>
          <h3> Density of {data.englishName}: {data.density} g/cm<sup>3</sup> </h3>
          <h3> Aphelion of {data.englishName}: {data.aphelion} km </h3>
          <h3> Perihelion period of {data.englishName}: {data.perihelion} km </h3>
          {/* <h3> Moons of {data.englishName}: {data.moons.map((elem, index) =>{
            return (<span> {elem.moon}, </span>) 

          })}
          </h3> */}
          
          </div>
          </>
    
          

        ):('')}
        

        <div data-testid="footer" className="end">
          <h2> Made with 💗 in React by  <a href="https://mohittk.github.io"> Mohit  </a></h2>
          </div>



        
        
      
      
    </>
  );
}

export default App;
