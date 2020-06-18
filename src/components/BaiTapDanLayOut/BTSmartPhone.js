import React, { Component } from "react";
import BTPhone from "./BTPhone";

export default class BTSmartPhone extends Component {
  render() {
    return (
      <div>
        <section id="smartphone" className="container-fluid pt-5 pb-5  bg-dark">
          <h1 className="text-white text-center">BEST SMARTPHONE</h1>
          <div className="row">
                <BTPhone></BTPhone>
                <BTPhone></BTPhone>
                <BTPhone></BTPhone>
                <BTPhone></BTPhone>
                </div>
        </section>
      </div>
    );
  }
}
