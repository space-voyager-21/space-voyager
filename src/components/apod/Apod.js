import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player/lazy";
import styles from "./Apod.module.css";
import Constants from "./../Constant";

export default function Apod() {
  const [apod, setApod] = useState(null);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://api.nasa.gov/planetary/apod?api_key=" + Constants.NasaApiKey
      );

      setApod(data);
    })();
  }, []);
  // console.log(apod.url)
  return (
    <div className={styles["apod"]}>
      {apod && (
        <div>
          <div className={styles["apod__main__header"]}>
            🌌Astronomy Pic of the day!🌌
          </div>
          <div className={styles["apod__header"]}>{apod.title}</div>
          <div className={styles["apod__description"]}>{apod.explanation}</div>
          {(apod.url?.endsWith(".jpg") && (
            <div
              className={styles["apod__image"]}
              onClick={() => apod && window.open(apod.url)}
            >
              <img src={apod.url} alt={apod.title} />
            </div>
          )) || (
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                width="100%"
                url={apod.url}
                playing="true"
                controls="true"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
