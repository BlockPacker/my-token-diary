import React, { Component } from 'react'

import firebase from 'firebase/app';
import 'firebase/firestore';

import './vote.css'

firebase.initializeApp({
  apiKey: 'AIzaSyAqF_ts74PnuemldvOJVoYaGb0oelIKmxM',
  authDomain: "mytokendiray.firebaseapp.com",
  databaseURL: "https://mytokendiray.firebaseio.com",
  projectId: "mytokendiray",
  storageBucket: "mytokendiray.appspot.com",
  messagingSenderId: "403467372211"
});
const db = firebase.firestore();

class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      etherAddress: '',
      voteUrl: '',
      recommenderAddress: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEthChange = this.handleEthChange.bind(this);
    this.handleVoteChange = this.handleVoteChange.bind(this);
  }

    
  componentWillMount () {
      this.setState({
          etherAddress: window.localStorage.getItem('ethAddress')
      })
  }
    

  handleEthChange(event) {
      this.setState({etherAddress: event.target.value});
  }

  handleVoteChange(event) {
    this.setState({ voteUrl: event.target.value });
  }

  handleRecoChange = (event) => {
      this.setState({recommenderAddress: event.target.value});
  }
    
  handleSubmit(event) {
    if(!this.state.web3.utils.isAddress(this.state.walletAddress))
    {
      alert('지갑 주소가 유효하지 않습니다!');
      return false;
    }
    window.localStorage.setItem('ethAddress', this.state.etherAddress);
    db.collection('vote').add({
      ether_address: this.state.etherAddress,
      recommender_address: this.state.recommenderAddress,
      user: null,
      vote_url: this.state.voteUrl,
      insert_time: Date.now(),
      done: false
    }).then(function(docRef) {
      console.log('Document written with ID: ', docRef.id);
    }).catch(function(error){
      console.error('Error adding document: ', error);
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className='content'>
        <span className='midtitle'>MyTokenDiary</span><br />
        <span className='warning'>거래소 지갑 주소는 넣지 마세요!!</span><br />
        <br />
        <div className='tutorial'>
          <span className='beforeInput'>입력하기 전에 확인해주세요</span><br />
          <a className='tutorial' href='https://steemit.com/mytokendiary/@ryugihyeok/mytokendiary-feat-metamask-1-2'>MetaMask 지갑 만들기</a><br />
          <a className='tutorial' href='https://steemit.com/mytokendiary/@ryugihyeok/mytokendiary-feat-facebook-instagram-1-2'>인증샷 URL 복사하기</a><br />
          <a className='tutorial' href='https://steemit.com/mytokendiary/@ryugihyeok/mytokendiary-mytokendiary'>MyTokenDiary란</a>
        </div>
        <form onSubmit={this.handleSubmit}>
          {/* 이더리움 지갑 주소 로그인<br/> */}
          <input type='text' value={this.state.etherAddress} onChange={this.handleEthChange} placeholder='이더리움 지갑 주소를 적어주세요' />
          <input type='text' value={this.state.recommenderAddress} onChange={this.handleRecoChange} placeholder='추천인 이더리움 지갑 주소를 입력해주세요.' />
          <input type='text' value={this.state.voteUrl} onChange={this.handleVoteChange} placeholder='인증 url을 적어주세요.' />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default Vote;