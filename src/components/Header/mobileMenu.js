import React, { Component } from "react";
import $ from "jquery";
import "../Header/mobileMenu.css";
import menuBtn from "../../img/Header/햄버거.svg";
import closeBtn from "../../img/Header/닫기.svg";

class MobileMenu extends Component {
componentDidMount() {
    var click_num = 0;
    $(document).ready(function(){
        $('.menu_btn>a').on('click', function(){
            $('.menu_bg').show(); 
            $('.sidebar_menu').animate({
                right:0
            });  
        });
        $('.close_btn>a').on('click', function(){
            $('.menu_bg').hide(); 
            $('.sidebar_menu').animate({
                right: '-' + 50 + '%'
                        });  
        });

        $('.menu_wrap>li>a')
        .each(function (index) {
            $(this).attr("menu-index", index);
        })

        .on('click', function(){
            var index = $(this).attr("menu-index");

            if(click_num %2 === 0)
                $('.mobile-menu-clicked>ul').css('display','block');
            else
                $('.mobile-menu-clicked>ul').css('display','none');
            click_num ++;
        });
    });
}

render() {
    return (
    <div className="mobile-menu">
        <div className="menu-header">
            <div className="menu_btn">
                <a href="/" onClick={function (e) {
                e.preventDefault();
            }.bind(this)}>
                <img src={menuBtn} />
                </a>
            </div>
        </div>

        <div className="menu_bg"></div>

        <div className="sidebar_menu">
            <div className="close_btn">
                <a href="/" onClick={function (e) {
                e.preventDefault();
            }.bind(this)}>       
                    <img src={closeBtn} />
                </a>
            </div>

            <ul className="menu_wrap">
                <li>
                    <a href="/" onClick={function (e) {
                        e.preventDefault();
                        this.props.onChangeMode("main");
                    }.bind(this)}>데놀랜드 소개</a>

                    <div className="mobile-menu-clicked">
                        <ul>
                            <li><a
                                href="/"
                                onClick={function (e) {
                                e.preventDefault();
                                this.props.onChangeMode("speaker");
                                }.bind(this)}>
                                데놀 즐기기
                            </a></li>
                            <li><a
                            href="/"
                            onClick={function (e) {
                            e.preventDefault();
                            this.props.onChangeMode("partners");
                            }.bind(this)}>
                            함께하는 파트너스
                        </a></li>
                        </ul>
                    </div>
                </li>

                <li>
                    <a href="/" onClick={function (e) {
                        e.preventDefault();
                        this.props.onChangeMode("concept");
                    }.bind(this)}>데놀랜드 2020</a>

                    <div className="mobile-menu-clicked">
                        <ul>
                            <li><a href="/" onClick={function (e) {
                                e.preventDefault();
                                this.props.onChangeMode("program");
                                }.bind(this)}>프로그램</a>
                            </li>
                        </ul>
                    </div>
                </li>

                <li>
                    <a href="/" onClick={function (e) {
                        e.preventDefault();
                        this.props.onChangeMode("coc");
                    }.bind(this)}>데놀랜드 이용규칙</a>
                </li>

                <li>
                    <a href="/" onClick={function (e) {
                        e.preventDefault();
                        this.props.onChangeMode("main");
                    }.bind(this)}>데놀랜드 뉴스레터</a>

                    <div className="mobile-menu-clicked">
                        <ul>
                            <li><a href="https://stib.ee/MWQ2">뉴스레터 1회차</a></li>
                            <li><a href="https://stib.ee/ILT2">뉴스레터 2회차</a></li>
                            <li><a href="https://stib.ee/BOU2">뉴스레터 3회차</a></li>
                        </ul>
                    </div>
                </li>

                <li>
                    <a href="https://event-us.kr/datayanolja2020/event/23268">데놀랜드 입장권</a>
                </li>
            </ul>
        </div>
    </div>
    );
}
}

export default MobileMenu;
