
//All APIs used in the website can be found here.

let apiKey = "AIzaSyAgBnhWZh77iXBO7OCWfpaApqkYAAWdw18";
let version = "weekly";
let IssURL = "https://api.wheretheiss.at/v1/satellites/25544";
let URL = "https://space-api-abh80.vercel.app/sats?q=";
let BaseURL = "https://api.le-systeme-solaire.net/rest/bodies/";
let NasaApiKey = "RMSK1F6elq4x31FQSsoAtQpfz7Zbsdr4OphLjrVn";
let earthPath = "../images/Earth.png";
let mercuryPath = "../images/Mercury.png";
let venusPath = "../images/Venus.png";
let jupiterPath = "../images/Jupiter.png";
let saturnPath = "../images/Saturn.png";
let uranusPath = "../images/Uranus.png";
let neptunePath = "../images/Neptune.png";
let plutoPath = "../images/Pluto.png";
let marsPath = "../images/Mars.png";



let particleParam = {
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
};

let particleName = "particle";

const Constants = {
  particleParam,
  particleName,
  apiKey,
  version,
  IssURL,
  URL,
  BaseURL,
  NasaApiKey,
  earthPath,
  marsPath,
  plutoPath,
  neptunePath,
  uranusPath,
  saturnPath,
  jupiterPath,
  venusPath,
  mercuryPath
};

export default Constants;
