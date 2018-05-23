import React, { Component } from 'react';
import './menu.css';

class Menu extends Component {
    render(){
        return (
            <div className='menuWrapper'>
                <div class='ib'>
                    <span className='teamTitle'>BP Crew</span>
                </div>
                <div class='ib'>
                    <span className='menuItem'>홈</span>
                    <span className='menuItem'>인증</span>
                    <span className='menuItem'>메뉴3</span>
                </div>
                <div className='right'>
                    <span className='menuItem loginMenu'>로그인</span>
                </div>
            </div>
        );
    }
}

export default Menu
