import React, {Component} from 'react';
import speaker2 from "../../img/Speaker/guide_02.png";
import speaker3 from "../../img/Speaker/guide_03.png";
import speaker4 from "../../img/Speaker/guide_04.png";
import '../Speaker/Speaker.css';
// import '../Speaker/media-Speaker.css';

class Speaker extends Component {
    render() {
        return (
            <div className="spe-body">
                <style>{'body { background-color: #082138; }'}</style>

                <div className="spe-top">
                    <div className="Word-title">
                        <p>
                            <strong>
                                데놀<br />
                                즐기기
                            </strong>
                        </p>
                    </div>
                    
                    <button>청중</button>
                    <button id="selected">발표자</button>
                </div>

                <div className="spe-contents">
                    <div className="left-content">
                        <img src={speaker2} alt="발표자 사진" />

                        <div id="spe-text">
                            <h2>
                                1<br />
                                데이터야놀자에서 오직 <br />
                                당신만이 들려줄 수 있는 <br />
                                소중한 이야기
                            </h2>
                            <p>
                                데이터와 함께 하며 겪었던 모든 고난, 시련, 역경, 삽질, 기쁨,
                            </p>
                            <p>환희나 데이터를 통해 얻은 통찰, 데이터를 통한</p>
                            <p>
                                새로운 가치 창출의 경험 등 당신만의 소중한 경험을 공유해주세요
                            </p>
                        </div>
                    </div>

                    <div className="right-content">
                        <div id="spe-text">
                            <h2>
                                2<br />
                                데이터에 관심 있는 <br />
                                다양한 직군의 사람들이 모이는<br />
                                데이터야놀자
                            </h2>
                            <p>데이터야 놀자는 데이터 분석가, 개발자, 마케터, 대학(원)생,</p>
                            <p>
                                연구원, 고등학생 등 다양한 사람들이 모여서 만드는 행사입니다.
                            </p>
                            <p>발표 소개에서 대상 청중을 구체적으로 작성해주시면,</p>
                            <p>청중이 더 원하는 발표를 들을 수 있어요</p>
                        </div>

                        <img src={speaker3} alt="발표자 사진" />
                    </div>

                    <div className="left-content">
                            <img src={speaker4} alt="발표자 사진" />

                            <div id="spe-text">
                            <h2>
                                3<br />
                                특정 기술에 대한 이야기도 환영
                            </h2>
                            <p>
                                데이터를 다루는 특정 기술에 대한 전문적인 이야기도 환영합니다.
                            </p>
                            <p>단, 발표 전 이러한 점을 청중에게 미리 알려주시면,</p>
                            <p>미리 마음의 준비를 할 수 있어요!</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Speaker;