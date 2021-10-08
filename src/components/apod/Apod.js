import React, { useState, useEffect } from "react";
import axios from "axios";
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
  return (
    <div className={styles["apod"]}>
      {apod && (
        <div>
          <div className={styles["apod__header"]}>{apod.title}</div>
          <div className={styles["apod__description"]}>{apod.explanation}</div>
        </div>
      )}
      <div
        className={styles["apod__image"]}
        onClick={() => apod && window.open(apod.url)}
      >
        {(apod && <img src={apod.url} alt={apod.title} />) || (
          <div class="lds-hourglass"></div>
        )}
      </div>
    </div>
  );
}
