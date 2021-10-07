import React, { Component } from "react";
import styles from "./Satellite.module.css";
import LoadTimeSat from "./Loadtimesat";
import Error from "../Error";
import { allCountriesList } from "countries-code";
import Constants from "../Constant";
export default class Satellite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      /**
       * @type {
       * moderateInfo : {
       * name: string,
       * date_of_launch: string,
       * sattelite_bus : string,
       * country_of_origin: string,
       * operator: string,
       * type:string,
       * coverage : string,
       * }
       *}
       */
      data: null,
      error: false,
      suggestedResults: [],
    };
    this.state.handleSubmit = this.handleSubmit.bind(this);
    this.state.handleChange = this.handleChange.bind(this);
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ error: false, data: null });
    const value = e.target.children[0].value;
    if (!this.inputIsValid(value)) return;
    e.target.children[0].value = "";
    const data = await this.fetchSatellitesData(value);
    if (data) {
      this.setState({ data: data[0].Sattelite });
    } else {
      this.setState({ error: true });
    }
  };
  handleChange = async (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (!this.inputIsValid(value)) return;
    const suggestedResults = await this.fetchSatellitesData(value);
    if (!suggestedResults) {
      this.setState({ suggestedResults: [] });
      return;
    }
    const trimmedResults = suggestedResults.slice(0, 10);
    const satNames = [];
    for (const res of trimmedResults) {
      satNames.push(res.Sattelite.moderateInfo.name);
    }
    satNames.sort();
    this.setState({ suggestedResults: satNames });
  };
  fetchSatellitesData = async (satName) => {
    try {
      const response = await fetch(Constants.URL + encodeURIComponent(satName));
      return await response.json();
    } catch (e) {
      return null;
    }
  };
  inputIsValid = (inputStr) => {
    return inputStr && inputStr.trim() !== "";
  };
  renderSuggestedSattelites(sats) {
    return sats.map(function (s) {
      return <option value={s} key={`${s}-id`}></option>;
    });
  }
  render() {
    return (
      <div className={styles["content-body"]}>
        <div data-testid="searchkabox" className="searchkabox">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="searchbar"
              placeholder="Type Satellite name then press enter to search"
              onChange={this.handleChange}
              list="sat-suggestions"
            />
            <datalist id="sat-suggestions">
              {this.renderSuggestedSattelites(this.state.suggestedResults)}
            </datalist>
            <input className="submit" type="submit" value="Submit" />
          </form>
        </div>
        {(this.state.error && <Error type="satellite" />) ||
          (this.state.data && (
            <div className={styles["satellite-info"]}>
              <h1>
                {this.state.data.moderateInfo.name}{" "}
                {this.state.data.moderateInfo.country_of_origin && (
                  <img
                    alt=""
                    src={
                      "https://www.countryflags.io/" +
                      (allCountriesList()
                        .find(
                          (x) =>
                            x.country_name_en.toLowerCase() ===
                            this.state.data.moderateInfo.country_of_origin.toLowerCase()
                        )
                        ?.alpha2?.toLowerCase()
                        ? allCountriesList()
                            .find(
                              (x) =>
                                x.country_name_en.toLowerCase() ===
                                this.state.data.moderateInfo.country_of_origin.toLowerCase()
                            )
                            ?.alpha2?.toLowerCase()
                        : this.state.data.moderateInfo.country_of_origin ===
                          "United States"
                        ? "us"
                        : undefined) +
                      "/flat/64.png"
                    }
                  ></img>
                )}
              </h1>
              <hr></hr>
              <h3>Name : {this.state.data.moderateInfo.name}</h3>
              <h3>
                Country :{" "}
                {this.state.data.moderateInfo.country_of_origin ?? "N/A"}
              </h3>
              <h3>
                Date of Launch : {this.state.data.moderateInfo.date_of_launch}
              </h3>
              <h3>Type : {this.state.data.moderateInfo.type ?? "N/A"}</h3>
              <h3>
                Coverage : {this.state.data.moderateInfo.coverage ?? "N/A"}
              </h3>
              <h3>
                Operator : {this.state.data.moderateInfo.operator ?? "N/A"}
              </h3>
              <h3>
                Sattelite Bus :{" "}
                {this.state.data.moderateInfo.sattelite_bus ?? "N/A"}
              </h3>
            </div>
          )) || <LoadTimeSat />}
      </div>
    );
  }
}
