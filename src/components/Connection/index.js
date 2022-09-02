import React from 'react'
import ConnLeftProfile from '../ConnLeftProfile'
import ConnFeed from '../ConnFeed'
import './index.css'

const Connection = () => {
  return (
    <div class="d-flex connection-main-container">
      <ConnLeftProfile/>
      <ConnFeed/>
      <div>c</div>
    </div>
  )
}
export default Connection