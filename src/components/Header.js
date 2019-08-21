import React from "react";
import headerImg from "../media/header.png";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <img src={headerImg} alt="KOB Translation" />
      </div>
    );
  }
}
