import React, { Component } from "react";
import "./Main.css";
import mainLogo from "../../img/Main/title_04.png";
import logoImg from "../../img/Main/back_04.png";
import states from "./aboutus.json";

class Mainlogo extends Component {
render() {
    return (
    <div className="main-left">
        <section>
            <img className="mainLogo" src={mainLogo} alt="웰컴투 데놀랜드" />
        </section>

        <ol id="iconField">
            <li className="SNS facebook">
                <a href="https://www.facebook.com/datayanolja.github.io"></a>
            </li>

            <li className="SNS instagram">
                <a href="https://www.instagram.com/dataya_nolja/"></a>
            </li>
        </ol>

        <img className="logoImg" src={logoImg} alt="회전목마" />
    </div>
    );
}
}

// class BackgroundImg extends Component {
// render() {
//     return (
//     <section>
//         <img className="logoImg" src={logoImg} />
//     </section>
//     );
// }
// }

class Aboutus extends Component {
titleState = states.title;
msgState = states.msg;

render() {
    return (
    <main>
        <section className="main-right">
            <section className="title">
                <h5>SINCE 2016</h5>
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

            <section className="dots">
                ........................................
            </section>

            <section className="aboutUs">
                <h5>
                {this.msgState.split("\n").map(function (item, idx) {
                    return (
                    <span key={idx}>
                        {item}
                        <br />
                    </span>
                    );
                })}
                </h5>
            </section>

            <section className="contact">
                <h5>CONTACT | datayanolja.master@gmail.com</h5>
            </section>
        </section>
    </main>
    );
}
}

class Main extends Component {
render() {
    return (
    <div className="main-body">
        <style>{"body { background-color: #6BEEFF; }"}</style>
        <Mainlogo title="데이터야놀자 2020"></Mainlogo>
        <Aboutus></Aboutus>
    </div>
    );
}
}

export default Main;