import React, { Component } from 'react';
import './diary.css';

class Diary extends Component {
  render() {
    return (
      <div className='content left'>
        <span class='etherAaddress'>나의 이더리움 지갑 주소</span><br />
        <span>........</span>

        <div class='diary'>
          <div class='card'>
            <span class='title'>2018 지방선거 참여자</span>
            <div class='token'>
              토큰 이미지
            </div>
          </div>
          <div class='card'>
            <span class='title'>2018 지방선거 참여자</span>
            <div class='token'>
              토큰 이미지
          </div>
          </div>
          <div class='card'>
            <span class='title'>2018 지방선거 참여자</span>
            <div class='token'>
              토큰 이미지
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Diary