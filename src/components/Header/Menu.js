import React, { Component } from "react";
import $ from "jquery";
// import logo from "../../img/Header/logo.png";
// import jQuery from "jquery";
// window.$ = window.jQuery = jQuery;
import "../Header/Menu.css";

class Menu extends Component {
componentDidMount() {
    $(".menu")
    .each(function (index) {
        console.log("each 구문 실행");
        $(this).attr("menu-index", index);
    })
    .click(function () {
        var index = $(this).attr("menu-index");
        $(".menu[menu-index=" + index + "]").addClass("clicked");
        $(".menu[menu-index=" + index + "]").before('<div id="circle"></div>');
        $(".menu[menu-index!=" + index + "]").removeClass("clicked");
    });
}

render() {
    return (
    <ul id="main-menu">
        <li>
        <a href="/" className="menu">
            ABOUT US
        </a>
        <ul id="sub-menu">
            <li>
            <a
                href="/speaker"
                onClick={function (e) {
                e.preventDefault();
                this.props.onChangeMode("speaker");
                }.bind(this)}
            >
                데놀 즐기는 법
            </a>
            </li>
            <li>
            <a
                href="/"
                onClick={function (e) {
                e.preventDefault();
                this.props.onChangeMode("partners");
                }.bind(this)}
            >
                함께하는 파트너스
            </a>
            </li>
            <li>
            <a
                href="/"
                onClick={function (e) {
                e.preventDefault();
                this.props.onChangeMode("members");
                }.bind(this)}
            >
                2020 막강 준비위
            </a>
            </li>
        </ul>
        </li>
        <li>
        <a href="/" className="menu">
            EVENT
        </a>
        <ul id="sub-menu">
            <li>
            <a
                href="/"
                onClick={function (e) {
                e.preventDefault();
                this.props.onChangeMode("concept");
                }.bind(this)}
            >
                데이터야 놀자 2020
            </a>
            </li>
            <li>
            <a
                href="/program"
                onClick={function (e) {
                e.preventDefault();
                this.props.onChangeMode("program");
                }.bind(this)}
            >
                프로그램
            </a>
            </li>
            <li>
            <a
                href="/presenter"
                onClick={function (e) {
                e.preventDefault();
                this.props.onChangeMode("presenter");
                }.bind(this)}
            >
                발표자
            </a>
            </li>
        </ul>
        </li>
        <li>
        <a
            href="/coc"
            className="menu"
            onClick={function (e) {
            e.preventDefault();
            this.props.onChangeMode("coc");
            }.bind(this)}
        >
            COC
        </a>
        </li>
        <li>
        <a
            href="/"
            className="menu"
            onClick={function (e) {
            e.preventDefault();
            this.props.onChangeMode("archieve");
            }.bind(this)}
        >
            NEWSLETTER
        </a>
        </li>
        <li>
        <a href="/" className="menu">
            TICKET
        </a>
        </li>
        <li>
        <a
            href="/"
            className="menu"
            onClick={function (e) {
            e.preventDefault();
            this.props.onChangeMode("archieve");
            }.bind(this)}
        >
            ARCHIEVE
        </a>
        </li>
    </ul>
    );
}
}

export default Menu;    