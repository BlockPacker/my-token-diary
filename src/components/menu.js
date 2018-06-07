import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './menu.css';

import Home from './home.js';
import Vote from './vote.js';
import Diary from './diary.js';
import Faq from './faq.js';
import Admin from './admin.js';

class Menu extends Component {
  render() {
    return (
      <div>
        <div className='menuWrapper'>
          <div className='ib'>
            <span className='teamTitle'>MyTokenDiary</span>
          </div>
          <div className='ib'>
            <span className='menuItem'><Link to='/'>홈</Link></span>
            <span className='menuItem'><Link to='/diary'>다이어리</Link></span>
            <span className='menuItem'><Link to='/vote'>인증</Link></span>
            <span className='menuItem'><Link to='/faq'>FAQ</Link></span>
          </div>
          {/* <div className='right'>
            <span className='menuItem loginMenu'>로그인</span>
          </div> */}
        </div>
        <div className='content'>
          <Route path='/' exact component={Home} />
          <Route path='/diary' component={Diary} />
          <Route path='/vote' component={Vote} />
          <Route path='/faq' component={Faq} />
          <Route path='/admin' component={Admin} />
        </div>
      </div>
    );
  }
}

export default Menu
