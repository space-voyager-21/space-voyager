import React, { useState, useEffect } from 'react';
import { Loader } from "@googlemaps/js-api-loader";
import './IssMap.css';
import { get } from 'axios';
import { Link } from "react-router-dom"
import Constants from '../Constant';

function IssMap() {
    const [isDataFetched, updateDataFetched] = useState(false)

    useEffect(() => {
        mapBody();
    }, []);
    const mapBody = async () => {
        const resp = await get(Constants.IssURL);
        const { latitude, longitude } = resp.data
        updateDataFetched(true)

        const position = {
            lat: +latitude,
            lng: +longitude
        };

        const loader = new Loader({
            apiKey: Constants.apiKey,
            version: Constants.version
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
                    <div class="lds-hourglass"></div>
            }
           
        </>
    )
}

export default IssMap;
