import React, { Component } from 'react';
import './diary.css';
import getWeb3 from '../utils/getWeb3';
import Eth from 'web3-eth';
import VoteImage from '../img/vote.png';
import PromoImage from '../img/promo.png';
import SponImage from '../img/spon.png';

const KLEV_CONTRACT_ADDRESS = '0x86b714dca366b22bbfe2f81045dd35a997ed5e9a';
const KLEV_ABI = '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"a_bIsLock","type":"bool"}],"name":"EndEvent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"m_aOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"a_receiver","type":"address[]"}],"name":"AllocateToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"m_bIsLock","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"a_receiver","type":"address[]"}],"name":"BurnToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"a_totalSupply","type":"uint256"},{"name":"a_tokenName","type":"string"},{"name":"a_tokenSymbol","type":"string"},{"name":"a_decimals","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Approval","type":"event"}]';
const KLEH_CONTRACT_ADDRESS = '0xd61Afd34d1263d88B5D5B3BEf4d9491a04BD84dE';
const KLEH_ABI = '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"a_bIsLock","type":"bool"}],"name":"EndEvent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"m_aOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"a_receiver","type":"address[]"}],"name":"AllocateToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"m_bIsLock","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"a_receiver","type":"address[]"}],"name":"BurnToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"a_totalSupply","type":"uint256"},{"name":"a_tokenName","type":"string"},{"name":"a_tokenSymbol","type":"string"},{"name":"a_decimals","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Approval","type":"event"}]';
const KLES_CONTRACT_ADDRESS = '0xa3Ff2f003763CB5d2E01C638Ee30A786a5790323';
const KLES_ABI = '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"a_bIsLock","type":"bool"}],"name":"EndEvent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"m_aOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"a_receiver","type":"address[]"}],"name":"AllocateToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"m_bIsLock","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"a_receiver","type":"address[]"}],"name":"BurnToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"a_totalSupply","type":"uint256"},{"name":"a_tokenName","type":"string"},{"name":"a_tokenSymbol","type":"string"},{"name":"a_decimals","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Approval","type":"event"}]';
// const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/VrxQkXJhBFanUZWXsOmt'));




class Diary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      web3: null,
      walletAddress: '',
      voteBalance: 0,
      promoBalance: 0,
      sponBalance: 0,
    };
  }

  handleAddressChange = (event) => {
    this.setState({walletAddress: event.target.value});
  }

  componentWillMount() {
    getWeb3.then(results => {
      this.setState({
        web3: results.web3
      });
    }).catch((err) => {
      console.log(err);
    });
  }

  instantiateContract = () => {
    const eth = new Eth(this.state.web3.currentProvider);
    console.log(this.state.web3.currentProvider);
    const voteContract = new eth.Contract(JSON.parse(KLEV_ABI), KLEV_CONTRACT_ADDRESS);
    voteContract.methods.balanceOf(this.state.walletAddress).call().then(res => {
      this.setState({
        voteBalance: res
      })
    });

    const promoContract = new eth.Contract(JSON.parse(KLEH_ABI), KLEH_CONTRACT_ADDRESS);
    promoContract.methods.balanceOf(this.state.walletAddress).call().then(res => {
      this.setState({
        promoBalance: res
      })
    });

    const sponContract = new eth.Contract(JSON.parse(KLES_ABI), KLES_CONTRACT_ADDRESS);
    sponContract.methods.balanceOf(this.state.walletAddress).call().then(res => {
      this.setState({
        sponBalance: res
      })
    });
  }

  render() {
    return (
      <div className='content left'>
        <span className='etherAaddress'>나의 이더리움 지갑 주소</span><br />
        <input type='text' value={this.state.walletAddress} onChange={this.handleAddressChange} placeholder='이더리움 지갑 주소를 입력해주세요.'/>
        <button onClick={this.instantiateContract}>조회</button>
        <div className='diary'>
          <div className='card'>
            <span className='title'>2018 지방선거 참여자</span>
            <div className='token'>
              <img className={this.state.voteBalance == 1 ? 'exist': 'notExist'} alt='voteToken' src={VoteImage}/>
            </div>
          </div>
          <div className='card'>
            <span className='title'>2018 지방선거 홍보왕</span>
            <div className='token'>
              <img className={this.state.promoBalance == 1 ? 'exist': 'notExist'} alt='PromoToken' src={PromoImage}/>
            </div>
          </div>
          <div className='card'>
            <span className='title'>2018 지방선거 후원왕</span>
            <div className='token'>
              <img className={this.state.sponBalance == 1 ? 'exist': 'notExist'} alt='SponToken' src={SponImage}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Diary