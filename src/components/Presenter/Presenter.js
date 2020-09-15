import React, {Component} from 'react';
import speaker from '../../img/Speaker/man.png';
import '../Presenter/Presenter.css';

class Presenter extends Component {
    render() {
        return (
            <div class="present-background">
                <div class="left">
                    <p>쿠팡<br /><b>윤선미님</b></p>
                    <hr align="left"></hr>
                    <span>
                        xxxxx@gmail.com
                        <a href="/">Github</a>
                    </span>
                    <img src={speaker} alt="발표자 사진"/>
                </div>
                <div class="right">
                    <h1>
                        회사는 어떤 사람을 <br></br>
                        데이터 분석가로 <br></br>
                        채용하고 싶어하는 것일까? <br></br> 
                    </h1>
                    
                    <p>
                        여기는 발표에 대한 간단한 소개가 들어가는 자리입니다. <br></br>
                        로 채용하고 싶어하는 것일까? 회사는 어떤 사람을 데이터 분석가로 채용<br></br>
                        하고 싶어하는 것일까? 회사는 어떤 사람을 데이터 분석가입니다.<br></br>
                        <br></br>
                        <br></br>
                        발표시간 20min<br></br>
                        난이도 ㅇㅇㅇㅇㅇ
                    </p>
                </div>

                <div class="background-line">
                </div>
            </div>
        );
    }
}

export default Presenter;