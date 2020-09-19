import React, { Component } from "react";
import "./coc.css";
import logo from "../../img/Coc/Coc_img.png";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 id="upper">Code of</h1> <br />
        <h1 id="lower">Conduct</h1>
        <h3>
          데이터야놀자는
          <br />
          다음의 가치를
          <br />
          중요하게 생각합니다.
        </h3>
      </div>
    );
  }
}

class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
    );
  }
}
class SectionA extends Component {
  state = {
    contents: [
      {
        id: "head",
        desc:
          '어울림이 없는 축제를 축제라고 할 수 있을까요? 데이터야놀자의 참가자들은\n각자의 배경이 다르더라도 "데이터"라는 공통된 관심사로 모인 사람들입니다.\n데이터에 대한 관심으로 데이터야놀자에 모인 우리 모두는 동등한 데이터인입니다.\n데이터야놀자는 데이터 앞에서 모두가 평등한 축제가 되기를 희망합니다.',
      },
      {
        id: "highlight",
        desc:
          "데이터야놀자는 성별, 신체, 육체적 혹은 정신적 질병, 종교, 출신을 포함한\n서로의 다름을 비난하거나 차별하는 행위를 허용하지 않습니다.",
      },
      {
        id: "middle",
        desc:
          "데이터야놀자는 운영진, 발표자, 참가자 등 행사에 참여하는 모두가 안전하게\n즐길 수 있기를 바라며 아래 행동을 철저하게 금지합니다.\n본인의 의도와 상관없이 상대방이 불쾌하게 느끼는 모든 행동 또한 포함되며\n동성 및 이성 간 모두에게 적용됩니다.",
      },
      {
        id: "list",
        desc:
          "- 남을 불편하게 하는 관심표현 및 무례한 질문 투척\n- 동의하지 않은 신체접촉\n- 성적 농담을 포함한 부적절한 콘텐츠의 공유 및 게시",
      },
      {
        id: "bottom",
        desc:
          '데이터야놀자 내에서 위의 내용을 위반하는 상황이 발생한 경우,\n아래의 "신고하기"내용을 참고하여 알려주시기 바랍니다.\n데이터야놀자는 공정하고 즉각적인 대응을 할 것을 약속드립니다.',
      },
    ],
  };

  write_text(i) {
    const desc = this.state.contents[i].desc;

    return desc.split("\n").map(function (item, idx) {
      return (
        <span key={idx}>
          {item}
          <br />
        </span>
      );
    });
  }

  render() {
    return (
      <div className="sectionA">
        <div className="dot">
          <div id="circle">
            <p>
              Companion
              <br />
              어울림
            </p>
          </div>
        </div>
        <section className="cocSection">
          <div className="coc">{this.write_text(0)}</div>
          <div className="coc">{this.write_text(1)}</div>
          <div className="coc">{this.write_text(2)}</div>
          <div className="coc">{this.write_text(3)}</div>
          <div className="coc">{this.write_text(4)}</div>
        </section>
      </div>
    );
  }
}

class SectionB extends Component {
  state = {
    contents: [
      {
        id: "head",
        desc:
          '어울림이 없는 축제를 축제라고 할 수 있을까요? 데이터야놀자의 참가자들은\n각자의 배경이 다르더라도 "데이터"라는 공통된 관심사로 모인 사람들입니다.\n데이터에 대한 관심으로 데이터야놀자에 모인 우리 모두는 동등한 데이터인입니다.\n데이터야놀자는 데이터 앞에서 모두가 평등한 축제가 되기를 희망합니다.',
      },
      {
        id: "highlight",
        desc:
          "데이터야놀자는 성별, 신체, 육체적 혹은 정신적 질병, 종교, 출신을 포함한\n서로의 다름을 비난하거나 차별하는 행위를 허용하지 않습니다.",
      },
      {
        id: "middle",
        desc:
          "데이터야놀자는 운영진, 발표자, 참가자 등 행사에 참여하는 모두가 안전하게\n즐길 수 있기를 바라며 아래 행동을 철저하게 금지합니다.\n본인의 의도와 상관없이 상대방이 불쾌하게 느끼는 모든 행동 또한 포함되며\n동성 및 이성 간 모두에게 적용됩니다.",
      },
      {
        id: "list",
        desc:
          "- 남을 불편하게 하는 관심표현 및 무례한 질문 투척\n- 동의하지 않은 신체접촉\n- 성적 농담을 포함한 부적절한 콘텐츠의 공유 및 게시",
      },
      {
        id: "bottom",
        desc:
          '데이터야놀자 내에서 위의 내용을 위반하는 상황이 발생한 경우,\n아래의 "신고하기"내용을 참고하여 알려주시기 바랍니다.\n데이터야놀자는 공정하고 즉각적인 대응을 할 것을 약속드립니다.',
      },
    ],
  };

  write_text(i) {
    const desc = this.state.contents[i].desc;

    return desc.split("\n").map(function (item, idx) {
      return (
        <span key={idx}>
          {item}
          <br />
        </span>
      );
    });
  }

  render() {
    return (
      <div className="sectionB">
        <div className="dot">
          <div id="circle">
            <p>
              Companion
              <br />
              어울림
            </p>
          </div>
        </div>
        <section className="cocSection">
          <div className="coc">{this.write_text(0)}</div>
          <div className="coc">{this.write_text(1)}</div>
          <div className="coc">{this.write_text(2)}</div>
          <div className="coc">{this.write_text(3)}</div>
        </section>
      </div>
    );
  }
}

class SectionC extends Component {
  state = {
    contents: [
      {
        id: "head",
        desc:
          '어울림이 없는 축제를 축제라고 할 수 있을까요? 데이터야놀자의 참가자들은\n각자의 배경이 다르더라도 "데이터"라는 공통된 관심사로 모인 사람들입니다.\n데이터에 대한 관심으로 데이터야놀자에 모인 우리 모두는 동등한 데이터인입니다.\n데이터야놀자는 데이터 앞에서 모두가 평등한 축제가 되기를 희망합니다.',
      },
      {
        id: "highlight",
        desc:
          "데이터야놀자는 성별, 신체, 육체적 혹은 정신적 질병, 종교, 출신을 포함한\n서로의 다름을 비난하거나 차별하는 행위를 허용하지 않습니다.",
      },
      {
        id: "middle",
        desc:
          "데이터야놀자는 운영진, 발표자, 참가자 등 행사에 참여하는 모두가 안전하게\n즐길 수 있기를 바라며 아래 행동을 철저하게 금지합니다.\n본인의 의도와 상관없이 상대방이 불쾌하게 느끼는 모든 행동 또한 포함되며\n동성 및 이성 간 모두에게 적용됩니다.",
      },
      {
        id: "list",
        desc:
          "- 남을 불편하게 하는 관심표현 및 무례한 질문 투척\n- 동의하지 않은 신체접촉\n- 성적 농담을 포함한 부적절한 콘텐츠의 공유 및 게시",
      },
      {
        id: "bottom",
        desc:
          '데이터야놀자 내에서 위의 내용을 위반하는 상황이 발생한 경우,\n아래의 "신고하기"내용을 참고하여 알려주시기 바랍니다.\n데이터야놀자는 공정하고 즉각적인 대응을 할 것을 약속드립니다.',
      },
    ],
  };

  write_text(i) {
    const desc = this.state.contents[i].desc;

    return desc.split("\n").map(function (item, idx) {
      return (
        <span key={idx}>
          {item}
          <br />
        </span>
      );
    });
  }

  render() {
    return (
      <div className="sectionC">
        <div className="dot">
          <div id="circle">
            <p>
              Companion
              <br />
              어울림
            </p>
          </div>
        </div>
        <section className="cocSection">
          <div className="coc">{this.write_text(0)}</div>
          <div className="coc">{this.write_text(1)}</div>
          <div className="coc">{this.write_text(2)}</div>
          <div className="coc">{this.write_text(3)}</div>
          <div className="coc">{this.write_text(4)}</div>
        </section>
      </div>
    );
  }
}

class Container extends Component {
  render() {
    return (
      <section className="container">
        <SectionA></SectionA>
        <SectionB></SectionB>
        <SectionC></SectionC>
      </section>
    );
  }
}

class Coc extends Component {
  render() {
    return (
      <div className="coc-body">
        <style>{'body { background-color: #fdd2db; }'}</style>
        <Header></Header>
        <Logo></Logo>
        <Container></Container>
      </div>
    );
  }
}

export default Coc;
