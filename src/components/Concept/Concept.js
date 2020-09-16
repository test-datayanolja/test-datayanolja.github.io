import React, { Component } from "react";
import "./Concept.css";
import states from "./datayanolja2020.json";

class Concept extends Component {
  render() {
    return (
      <div className="header">
        <h2>재미를</h2>
        <br></br>
        <h2>찾아서</h2>
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
        <section className="wrap">
          <section className="title">
            <h2>
              {this.titleState.split("\n").map(function (item, idx) {
                return (
                  <span key={idx}>
                    {item}
                    <br />
                  </span>
                );
              })}
            </h2>
          </section>
          <section className="contents1">
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
          <section className="contents2">
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
          </section>
        </section>
      </main>
    );
  }
}

export default Concept;
