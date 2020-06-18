import React, { Component } from "react";

export default class DataBinding extends Component {
  hocVien = {
    ma: 1,
    ten: "Quang Dat",
    hinhAnh: "https://picsum.photos/200/300",
  };

  renderImg() {
    return <img src="https://picsum.photos/200/300" alt="123" />;
  }

  render() {
    let title = "Hello and GudBye";

    // Phương thức render do mình tạo ra

    // Phunog7 thức return của Component React
    return (
      <div>
        <div className="card text-left">
          <img width = {100} height = {100} className="card-img-top" src={this.hocVien.hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">{this.hocVien.ten}</h4>
            <p className="card-text">{this.hocVien.ma}</p>
          </div>
        </div>

        {/* Biding theo biến */}
        <h1>{title}</h1>
        {/* Binding theo phương thức */}
        {this.renderImg()}
      </div>
    );
  }
}
