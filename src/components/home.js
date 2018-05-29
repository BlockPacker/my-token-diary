import React, { Component } from 'react'
import './home.css'

class Home extends Component {
    render() {
        return (
            <div className='content'>
                <span className='bpXyull'>
                    <span className='BP'>BP</span> Crew X <span className='YULL'>YULL</span> STUDIO
                    {/* <div className='grayUnderline'></div> */}
                </span>
                <br/>
                <div className='left'>
                    <span className='midtitle'>
                        투표 인증하고 토큰받자!
                    </span>
                    <ol>
                        <li>2018지방선거 투표자</li>
                        <span>이 토큰을 받으려면...<br/>...</span>
                        <li>한국 블록체인 홍보왕</li>
                        <span>이 토큰을 받으려면...<br/>...</span>
                        <li>한국 블록체인 기부자</li>
                        <span>이 토큰을 받으려면...<br/>...</span>
                    </ol>
                </div>
            </div>
        );
    }
}

export default Home;