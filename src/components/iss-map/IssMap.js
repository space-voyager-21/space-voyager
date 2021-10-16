import React, { useState, useEffect } from "react";
import "./IssMap.css";
import { get } from "axios";
import BingMapsReact from "bingmaps-react";
import Constants from "../Constant";

function IssMap() {
  const [isDataFetched, updateDataFetched] = useState(null);

  useEffect(() => {
    mapBody().then(() => {
      setInterval(mapBody, 3000);
    });
  }, []);
  const mapBody = async () => {
    const resp = await get(Constants.IssURL);
    const { latitude, longitude } = resp.data;

    const position = {
      lat: +latitude,
      lng: +longitude,
    };
    updateDataFetched(position);
  };
  return (
    <>
      <h1 className="map-heading">
        International Space Station Current Location
      </h1>
      {(isDataFetched && (
        <BingMapsReact
          bingMapsKey={Constants.BingMapsApiKey}
          height="650px"
          pushPins={[
            {
             options : {},
              center: {
                latitude: isDataFetched.lat,
                longitude: isDataFetched.lng,
              },
             
            },
          ]}
          viewOptions={{
            zoom: 3,
            center: {
              latitude: isDataFetched.lat,
              longitude: isDataFetched.lng,
            },
            mapTypeId: "standard",
          }}
        />
      )) || <div className="lds-hourglass" />}
    </>
  );
}

export default IssMap;
