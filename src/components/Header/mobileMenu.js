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

        $('.menu_wrap>li>a').on('click', function(){
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
                    }.bind(this)}>데놀랜드 소개</a>

                    <div className="mobile-menu-clicked">
                        <ul>
                            <li>데놀 즐기기</li>
                            <li>함께하는 파트너스</li>
                        </ul>
                    </div>
                    
                </li>
                {/* <li></li>
                <li><a href="/">메뉴03</a></li>
                <li><a href="/">메뉴04</a></li> */}
            </ul>
        </div>
    </div>
    );
}
}

export default MobileMenu;
