import React, { Component } from "react";
import "./Partners.css";
import sponsor from "../../img/Partners/sponsor.png";

// 글자 : #FF9499
// 배경 : #082037

class Header extends Component {
  render() {
    return (
      <div className="head">
        <h1 id="upper">함께하는</h1>
        <h1 id="lower">파트너스</h1>
      </div>
    );
  }
}

class Sponsors extends Component {
  render() {
    return (
      <div className="sponsor">
        <img src={sponsor} alt="Logo" className="sponsor-image"/>
      </div>
    );
  }
}
class Partners extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Sponsors></Sponsors>
      </div>
    );
  }
}

export default Partners;