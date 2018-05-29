import React, { Component } from 'react'
import './vote.css'

class Vote extends Component {
    render() {
        return (
            <div class='content'>
                <span className='midtitle'>BP Crew</span>

                <form>
                    {/* 이더리움 지갑 주소 로그인<br/> */}
                    <input type='text' placeholder='이더리움 지갑 주소를 적어주세요'/>
                    <input type='text' placeholder='키번호를 적어주세요'/>
                </form>
            </div>
        )
    }
}

export default Vote;