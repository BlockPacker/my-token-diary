import React, { Component } from 'react';
import './diary.css';
import getWeb3 from './utils/getWeb3';
import Eth from 'web3-eth';

const contractAddress = '0x86b714dca366b22bbfe2f81045dd35a997ed5e9a';
const ABI = '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"a_bIsLock","type":"bool"}],"name":"EndEvent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"m_aOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"a_receiver","type":"address[]"}],"name":"AllocateToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"m_bIsLock","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"a_receiver","type":"address[]"}],"name":"BurnToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"a_totalSupply","type":"uint256"},{"name":"a_tokenName","type":"string"},{"name":"a_tokenSymbol","type":"string"},{"name":"a_decimals","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Approval","type":"event"}]';
// const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/VrxQkXJhBFanUZWXsOmt'));




class Diary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      web3: null,
      balance: 100,
    };
  }

  componentWillMount() {
    getWeb3.then(results => {
      this.setState({
        web3: results.web3
      });

      this.instantiateContract();
    }).catch((err) => {
      console.log(err);
    });
  }

  instantiateContract () {
    const eth = new Eth(this.state.web3.currentProvider);
    console.log(this.state.web3.currentProvider);
    const b = new eth.Contract(JSON.parse(ABI), contractAddress);
    b.methods.balanceOf('0xa0899cD698409FB089a7B0AE8a3C1Ee49dB934bF').call().then(res => {
      this.setState({
        balance: res
      })
    });
  }

  render() {
    return (
      <div className='content left'>
        <span className='etherAaddress'>나의 이더리움 지갑 주소</span><br />
        <span>........</span>
        {this.state.balance}
        <div className='diary'>
          <div className='card'>
            <span className='title'>2018 지방선거 참여자</span>
            <div className='token'>
              토큰 이미지
            </div>
          </div>
          <div className='card'>
            <span className='title'>2018 지방선거 참여자</span>
            <div className='token'>
              토큰 이미지
          </div>
          </div>
          <div className='card'>
            <span className='title'>2018 지방선거 참여자</span>
            <div className='token'>
              토큰 이미지
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Diary