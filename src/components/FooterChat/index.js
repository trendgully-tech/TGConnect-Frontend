import React, { Component } from 'react'
import './index.css'

class FooterChat extends Component {
  state={open:false}

  openChat=()=>{
    this.setState((prev)=>({open:!prev.open})) 
  }

  render() {
    const {open}=this.state
    return (
      <div className='footer-chat'>
        <div className='chat-box-container'>
            <div className={`chat-box ${open?'open-chat':''}`}  onClick={this.openChat}>
                <div className='d-flex w-100 justify-content-between align-items-start pb-5'>
                <p className='Messages-heading'>Messages</p>
                <i class= {`fa-solid  ${open?'fa-xmark':'fa-ellipsis'}`}></i>
                </div>
                <p className='sender'>hello</p>
                <p className='reciver'>hi</p>
                
            </div> 
        </div>
        <div className='footer'></div>
      </div>
    )
  }
}

export default FooterChat
