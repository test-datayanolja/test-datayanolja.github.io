import React, { Component } from "react";
import "./Program.css";
import logoImg from "../../img/Concept/Concept.png";

class Program extends Component {
    render() {
        return (
            <div className="pro-body">
                <style>{"body { background-color: #281C61; }"}</style>

                <div className="pro-top">
                    <div className="Word-title">
                        <p>
                            데놀의 꽃<br />
                            <strong>
                                프로그램
                            </strong>
                        </p>
                    </div>

                    <button>TRACK 2</button>
                    <button id="selected">TRACK 1</button>
                </div>

                <div className="pro-left">
                    <img className="leftImg" src={logoImg} alt="회전목마" />
                </div>

                <div className="pro-right">
                    <table>
                        <tr>
                            <td>
                                데이터 분석팀과 이스포츠 선수단의 신뢰쌓기
                                프로세스
                            </td>
                            <td>윤정환님</td>
                            <td>PDF</td>
                            <td>LINK</td>
                        </tr>
                        <tr>
                            <td>
                                데이터 분석팀과 이스포츠 선수단의 신뢰쌓기
                                프로세스
                            </td>
                            <td>윤정환님</td>
                            <td>PDF</td>
                            <td>LINK</td>
                        </tr>
                        <tr>
                            <td>
                                데이터 분석팀과 이스포츠 선수단의 신뢰쌓기
                                프로세스
                            </td>
                            <td>윤정환님</td>
                            <td>PDF</td>
                            <td>LINK</td>
                        </tr>
                        <tr>
                            <td>
                                데이터 분석팀과 이스포츠 선수단의 신뢰쌓기
                                프로세스
                            </td>
                            <td>윤정환님</td>
                            <td>PDF</td>
                            <td>LINK</td>
                        </tr>
                        <tr>
                            <td>
                                데이터 분석팀과 이스포츠 선수단의 신뢰쌓기
                                프로세스
                            </td>
                            <td>윤정환님</td>
                            <td>PDF</td>
                            <td>LINK</td>
                        </tr>

                        <tr>
                            <td>
                                데이터 분석팀과 이스포츠 선수단의 신뢰쌓기
                                프로세스
                            </td>
                            <td>윤정환님</td>
                            <td>PDF</td>
                            <td>LINK</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}
export default Program;
