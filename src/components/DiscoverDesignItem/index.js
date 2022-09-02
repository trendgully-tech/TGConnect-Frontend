import React from 'react'
import './index.css'

const DiscoverDesignItem = props => {
    const {userDetails} = props
    const {imgUrl,name,likeCount,viewCount}=userDetails
    console.log(props)
  return (
    <li className='col-12 col-sm-6 col-md-4  col-lg-3 designer-card mb'>
                <div className='img-container'>
                    <img src={imgUrl} alt="designs" />
                </div>
                <div className='d-flex justify-content-between bottom-card'>
                    <div className='d-flex align-items-center'>
                        <img src='../smallpp.png' alt='pp'/>
                    <p className='username'>{name}</p>
                    </div>
                    
                    <div className="d-flex justify-content-between name-view-like-container">
                        <p><i className="fa-solid fa-heart"></i><span>{likeCount}</span></p>
                        <p><i className="fa-solid fa-eye"></i><span>{viewCount}</span></p>
                    </div>
                    
                </div>
    </li>
  )
}

export default DiscoverDesignItem
