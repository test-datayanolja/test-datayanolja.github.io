import React, {Component} from 'react';
import speaker from '../../img/Speaker/man.png';
import '../Speaker/Speaker.css';
import '../Speaker/media-Speaker.css';

class Speaker extends Component {
    render() {
        return (
            <div class="nav">
                <style>{'body { background-color: #082138; }'}</style>
                <div class="top">
                    <h1>데놀<br></br>즐기기</h1>
                    <button>청중</button>
                    <button id="selected">발표자</button>
                </div>
                <div class="content">
                    <div class="first-content">
                        <img src={speaker} alt="발표자 사진"/>
                        
                        <div id="text">
                            <h2>데놀을 맘껏 즐길 수 있는 방법</h2>
                            <p>스폰서 채용 패널 토크 : 사전 신청을 통해 이력서를 받고,</p>
                            <p>스폰서로 참여해주신 분들이 이력서를 리뷰하면서 진행하는</p>
                            <p>패널 토크 / 언택트 시대에서의 채용에 대한 이야기</p>
                            <br></br>
                            <p><b>네트워킹 트랙</b></p>
                            <p>발표자 + 청중이 자유롭게 참여할 수 있는 화상 네트워킹 세션</p>
                            <p>(발표자 분들의 의무 참여를 고려하고 있습니다)</p>
                        </div>
                    </div>
                    

                    <div class="second-content">
                        <img src={speaker} alt="발표자 사진"/>
                        
                        <div id="text">
                            <p>스폰서 채용 패널 토크 : 사전 신청을 통해 이력서를 받고,</p>
                            <p>스폰서로 참여해주신 분들이 이력서를 리뷰하면서 진행하는</p>
                            <p>패널 토크 / 언택트 시대에서의 채용에 대한 이야기</p>
                            <br></br>
                            <p><b>네트워킹 트랙</b></p>
                            <p>발표자 + 청중이 자유롭게 참여할 수 있는 화상 네트워킹 세션</p>
                            <p>(발표자 분들의 의무 참여를 고려하고 있습니다)</p>
                        </div>
                    </div>

                    <div class="third-content">
                        <img src={speaker} alt="발표자 사진"/>
                        
                        <div id="text">
                            <p><b>네트워킹 트랙</b></p>
                            <p>발표자 + 청중이 자유롭게 참여할 수 있는 화상 네트워킹 세션</p>
                            <p>(발표자 분들의 의무 참여를 고려하고 있습니다)</p>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Speaker;