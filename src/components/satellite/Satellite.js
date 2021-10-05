import React, { Component } from "react";
import styles from "./Satellite.module.css";
import LoadTime from "../LoadTimePage";
import Error from "../Error";
import { allCountriesList } from "countries-code";
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
    };
    this.state.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ error: false, data: null });
    const value = e.target.children[0].value;
    if (!value?.trim()) return;
    e.target.children[0].value = "";
    try {
      const response = await fetch(
        "https://space-api-abh80.vercel.app/sats?q=" + encodeURIComponent(value)
      );

      const data = await response.json();

      this.setState({ data: data[0].Sattelite });
    } catch (e) {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <div className={styles["content-body"]}>
        <div data-testid="searchkabox" className="searchkabox">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="searchbar"
              placeholder="Type Satellite name then press enter to search"
            />
            <input className="submit" type="submit" value="Submit" />
          </form>
        </div>
        {(this.state.error && <Error />) ||
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
                        ?.alpha2?.toLowerCase() ||
                      this.state.data.moderateInfo.country_of_origin ===
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
          )) || <LoadTime />}
      </div>
    );
  }
}
