import React, { Component } from "react";
import "./Concept.css";
import states from "./datayanolja2020.json";

class Concept extends Component {
  render() {
    return (
      <div className="header">
        <h1>재미를</h1>
        <br></br>
        <h1>찾아서</h1>
        <Datayanolja2020></Datayanolja2020>
      </div>
    );
  }
}

class Datayanolja2020 extends Component {
  titleState = states.title;
  subtitle1State = states.subtitle1;
  msg1State = states.msg1;
  subtitle2State = states.subtitle2;
  msg2State = states.msg2;

  render() {
    return (
      <main>
        <section className="title">
          <h1>
            {this.titleState.split("\n").map(function (item, idx) {
              return (
                <span key={idx}>
                  {item}
                  <br />
                </span>
              );
            })}
          </h1>
        </section>
        <section className="1_contents">
          <h3>
            {this.subtitle1State.split("\n").map(function (item, idx) {
              return (
                <span key={idx}>
                  {item}
                  <br />
                </span>
              );
            })}
          </h3>
          <h5>
            {this.msg1State.split("\n").map(function (item, idx) {
              return (
                <span key={idx}>
                  {item}
                  <br />
                </span>
              );
            })}
          </h5>
        </section>
        <section1 className="2_contents">
        <h3>
            {this.subtitle2State.split("\n").map(function (item, idx) {
              return (
                <span key={idx}>
                  {item}
                  <br />
                </span>
              );
            })}
          </h3>
          <h5>
            {this.msg2State.split("\n").map(function (item, idx) {
              return (
                <span key={idx}>
                  {item}
                  <br />
                </span>
              );
            })}
          </h5>
        </section1>
      </main>
    );
  }
}

export default Concept;
