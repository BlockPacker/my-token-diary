import React, { Component } from 'react'
import './home.css'

class Home extends Component {
  render() {
    return (
      <div className='content'>
        <span className='midtitle'>
          투표 인증하고 토큰받자!
                </span>
        <div className='left'>
          <ol>
            <li>2018 지방선거 참여자(KLEV18)</li>
            <p>
              <span class='bu'>"블록체인 & 암호화화폐 꼭 금전적인 가치가 함께여야만 할까요?"</span><br />
              MyTokenDiary에 로그인 후, 자신의 이더리움 지갑 주소와 2018년 지방선거 투표 인증샷 링크를 남겨주시면
              누구나 무료로 받을 수 있는 MyTokenDiary의 첫 번째 기념 토큰입니다.
                        </p>
            <li>2018 지방선거 홍보왕(KLEH18)</li>
            <p>
              <span class='bu'>"서로에게 몇 배 오를 ICO 추천이 아닌, 블록체인에 대한 이야기를 해보면 어떨까요?"</span><br />
              많은 분들에게 암호화 화폐와 블록체인에 대한 지식을 나누고, 자신의 이더리움 지갑 주소를 알려주세요!
              추천 지갑 주소에 가장 많이 추천 된 Top50 분에게 나누어드리는 감사 토큰 입니다.
                        </p>
            <li>2018 지방선거 후원자(KLES18)</li>
            <p>
              <span class='bu'>"블록체인에 관심을 갖게 된 분들을 위해 도와주세요! 모두의 추억이 기록될 수 있도록"</span><br />
              이더리움 블록체인에서는 토큰을 나눔 할 때마다 소액의 수수료가 들어갑니다.
              MyTokenDiary는 블록체인이 다양하게 활용 될 수 있다는 것을 알리기 위한 프로젝트이기 떄문에 수익모델이 존재 하지 않습니다.
                            0.01ETH를 MyTokenDiary에게 후원해주시면 후원왕 토큰을 나누어 드립니다. 0.01ETH로 약 100명의 참여자에게 토큰을 나누어 주실 수 있습니다.<br />
              (후원금을 절대 개인이 사용하지 않습니다. 후원금이 조금이라도 남는다면 다음 기념 토큰의 Transaction 수수료를 위해 사용될 것 입니다.)
                        </p>
          </ol>
        </div>
        <span className='bpXyull'>
          <span className='BP'>BP</span> Crew X <br /><span className='YULL'>YULL</span> STUDIO
                </span>
      </div>
    );
  }
}

export default Home;