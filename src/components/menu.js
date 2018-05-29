import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './menu.css';

import Home from './home.js';
import Vote from './vote.js';
import Diary from './diary.js';

class Menu extends Component {
    render(){
        return (
            <div>
                <div className='menuWrapper'>
                    <div className='ib'>
                        <span className='teamTitle'>BP Crew</span>
                    </div>
                    <div className='ib'>
                        <span className='menuItem'><Link to='/'>홈</Link></span>
                        <span className='menuItem'><Link to='/diary'>다이어리</Link></span>
                        <span className='menuItem'><Link to='/vote'>인증</Link></span>
                    </div>
                    <div className='right'>
                        <span className='menuItem loginMenu'>로그인</span>
                    </div>
                </div>
                <div class='content'>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/diary' component={Diary}/>
                    <Route exact path='/vote' component={Vote}/>
                </div>
            </div>
        );
    }
}

export default Menu
