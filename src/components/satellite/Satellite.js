import React, { Component } from "react";
import styles from "./Satellite.module.css";

export default class Satellite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
    this.state.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(e) {
    e.preventDefault();
    const value = e.target.children[0].value;
    if (!value?.trim()) return;
    e.target.children[0].value = "";
    try {
      const response = await fetch(
        "https://space-api-abh80.vercel.app/sats?q=" + encodeURIComponent(value)
      );

      const data = await response.json();
      console.log(data);
    } catch {
      console.log("error");
    }
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
            />
            <input className="submit" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
