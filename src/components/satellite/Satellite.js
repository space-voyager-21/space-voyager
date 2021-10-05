import React, { Component } from "react";
import styles from "./Satellite.module.css";

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
    };
    this.state.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = async (e) => {
    e.preventDefault();
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
      console.log(e);
      console.log("error");
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
        {this.state.data && (
          <div className={styles["satellite-info"]}>
            <h3>Name : {this.state.data.moderateInfo.name}</h3>
            <h3>Country : {this.state.data.moderateInfo.country_of_origin}</h3>
          </div>
        )}
      </div>
    );
  }
}
