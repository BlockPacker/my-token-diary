import React, { Component } from 'react'
import './vote.css'

// const firebase = require('firebase');
// require('firebase/firestore');

// firebase.initializeApp({
//     apiKey: 'AIzaSyAqF_ts74PnuemldvOJVoYaGb0oelIKmxM',
//     authDomain: 'mytokendiray.firebaseapp.com',
//     projectId: 'mytokendiray',
// });

// const db = firebase.firestore();

class Vote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            etherAddress: '',
            voteUrl: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event);
    }
    
    handleSubmit(event) {
        alert('Values: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className='content'>
                <span className='midtitle'>BP Crew</span>

                <form onSubmit={this.handleSubmit}>
                    {/* 이더리움 지갑 주소 로그인<br/> */}
                    <input type='text' value={this.state.etherAddress} placeholder='이더리움 지갑 주소를 적어주세요'/>
                    <input type='text' value={this.state.voteUrl} placeholder='인증 url을 적어주세요.'/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default Vote;