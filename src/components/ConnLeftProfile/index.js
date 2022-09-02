import React from 'react'
import './index.css'

const ConnLeftProfile = () => {
  return (
    <div className="main-container">
        <div className="info-card">
            <div className="profile-picc">
                <img src="../rectangle.png"  alt="pp"/>
            </div>
            <div className='profile-user-name'>
            <h1>User Name 01</h1>
            <p>Graphic Designer @ Trengully</p>
        </div>
        <ul className='profile-info-list'>
            <li>
                    <h1>Your connections</h1>
                    <p>350</p>
            </li>
            <li>
                    <h1>Connection Invites</h1>
                    <p>7</p>
            </li>
            <li>
                    <h1>Your Invites</h1>
                    <p>16</p>
            </li>
            <li>
                    <h1>Groups</h1>
                    <p>2</p>
            </li>
            <li>
                    <h1>Topics</h1>
                    <p>13</p>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default ConnLeftProfile