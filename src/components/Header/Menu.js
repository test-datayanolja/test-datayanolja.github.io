import React, {Component} from 'react';
import $ from "jquery";
// import jQuery from "jquery";
// window.$ = window.jQuery = jQuery;
import '../Header/Menu.css';

class Logo extends Component {
    componentDidMount() {
        $('.menu').each(function(index){ 
            console.log("each 구문 실행");
            $(this).attr('menu-index', index);
        }).click(function(){
            var index = $(this).attr('menu-index');
            $('.menu[menu-index=' + index + ']').addClass('clicked'); 
            $('.menu[menu-index=' + index + ']').before('<div id="circle"></div>');
            $('.menu[menu-index!=' + index + ']').removeClass('clicked');
        });
    }

    render() {
        return (
            <ul id="main-menu">
                <li>
                    <a href="/" class="menu">ABOUT US</a>
                    <ul id="sub-menu">
                        <li><a href="/speaker" onClick={function(e){
                            e.preventDefault();
                            this.props.onChangeMode('speaker');
                        }.bind(this)}>데놀 즐기는 법</a></li>
                        <li><a href="/partners" onClick={function(e){
                            e.preventDefault();
                            this.props.onChangeMode('partners')
                        }.bind(this)}>함께하는 파트너스</a></li>
                        <li><a href="/">2020 막강 준비위</a></li>
                    </ul>
                </li>
                <li><a href="/" class="menu">EVENT</a>
                    <ul id="sub-menu">
                        <li><a href="/">데이터야 놀자 2020</a></li>
                        <li><a href="/">프로그램</a></li>
                        <li><a href="/presenter" onClick={function(e){
                            e.preventDefault();
                            this.props.onChangeMode('presenter');
                        }.bind(this)}>발표자</a></li>
                    </ul>
                </li>
                <li><a href="/" class="menu">COC</a></li>
                <li><a href="/" class="menu">TICKET</a></li>
                <li><a href="/" class="menu">ARCHIEVE</a></li>
            </ul>
        );
    }
}

export default Logo;