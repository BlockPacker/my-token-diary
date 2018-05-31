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
            voteUrl: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEthChange = this.handleEthChange.bind(this);
        this.handleVoteChange = this.handleVoteChange.bind(this);
    }

    handleEthChange(event) {
        this.setState({etherAddress: event.target.value});
    }

    handleVoteChange(event) {
        this.setState({voteUrl: event.target.value});
    }
    
    handleSubmit(event) {
        alert('eth: ' + this.state.etherAddress + '\nvote: ' + this.state.voteUrl);
        db.collection('vote').add({
            ether_address: this.state.etherAddress,
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
                <span className='midtitle'>BP Crew</span>

                <form onSubmit={this.handleSubmit}>
                    {/* 이더리움 지갑 주소 로그인<br/> */}
                    <input type='text' value={this.state.etherAddress} onChange={this.handleEthChange} placeholder='이더리움 지갑 주소를 적어주세요'/>
                    <input type='text' value={this.state.voteUrl} onChange={this.handleVoteChange} placeholder='인증 url을 적어주세요.'/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default Vote;