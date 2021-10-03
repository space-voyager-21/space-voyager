import React, { useState, useEffect } from 'react';
import { Loader } from "@googlemaps/js-api-loader";
import './IssMap.css';
import { get } from 'axios';
import { Link } from "react-router-dom"

function IssMap() {
    const [isDataFetched, updateDataFetched] = useState(false)

    useEffect(() => {
        mapBody();
    }, []);
    const mapBody = async () => {
        const resp = await get("https://api.wheretheiss.at/v1/satellites/25544");
        const { latitude, longitude } = resp.data
        updateDataFetched(true)

        const position = {
            lat: +latitude,
            lng: +longitude
        };

        const loader = new Loader({
            apiKey: "AIzaSyAgBnhWZh77iXBO7OCWfpaApqkYAAWdw18",
            version: "weekly"
        });

        loader.load().then((google) => {
            const map = new google.maps.Map(document.getElementById("map"), {
                center: position,
                zoom: 4,
            });

            new google.maps.Marker({
                position,
                map,
            });
        });
    }
    return (
        <>
            <h1 className="map-heading">International Space Station Current Location</h1>
            {
                isDataFetched ?
                    <div id="map"></div> :
                    <h1>loading</h1>
            }
            <Link to="/" className="map-button" >Back</Link>
        </>
    )
}

export default IssMap;
