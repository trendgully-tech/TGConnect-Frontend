import React, { Component } from 'react'
import './index.css'
import Crousel from "../Crousel"
import DiscoverDesignItem from '../DiscoverDesignItem'
const list=[{imgUrl:'https://trendgully.com/contributor-dashboard/uploads/TG2508074728thumbnail0.jpg',name:'userName01',likeCount:'173',viewCount:'173'},
{imgUrl:'https://trendgully.com/contributor-dashboard/uploads/TG2508074728thumbnail0.jpg',name:'userName01',likeCount:'173',viewCount:'173'},
{imgUrl:'https://trendgully.com/contributor-dashboard/uploads/TG2508074728thumbnail0.jpg',name:'userName01',likeCount:'173',viewCount:'173'},{imgUrl:'https://trendgully.com/contributor-dashboard/uploads/TG2508074728thumbnail0.jpg',name:'userName01',likeCount:'173',viewCount:'173'}
,{imgUrl:'https://trendgully.com/contributor-dashboard/uploads/TG2508074728thumbnail0.jpg',name:'userName01',likeCount:'173',viewCount:'173'},{imgUrl:'https://trendgully.com/contributor-dashboard/uploads/TG2508074728thumbnail0.jpg',name:'userName01',likeCount:'173',viewCount:'173'},{imgUrl:'https://trendgully.com/contributor-dashboard/uploads/TG2508074728thumbnail0.jpg',name:'userName01',likeCount:'173',viewCount:'173'},{imgUrl:'https://trendgully.com/contributor-dashboard/uploads/TG2508074728thumbnail0.jpg',name:'userName01',likeCount:'173',viewCount:'173'},{imgUrl:'https://trendgully.com/contributor-dashboard/uploads/TG2508074728thumbnail0.jpg',name:'userName01',likeCount:'173',viewCount:'173'},{imgUrl:'https://trendgully.com/contributor-dashboard/uploads/TG2508074728thumbnail0.jpg',name:'userName01',likeCount:'173',viewCount:'173'},{imgUrl:'https://trendgully.com/contributor-dashboard/uploads/TG2508074728thumbnail0.jpg',name:'userName01',likeCount:'173',viewCount:'173'},{imgUrl:'https://trendgully.com/contributor-dashboard/uploads/TG2508074728thumbnail0.jpg',name:'userName01',likeCount:'173',viewCount:'173'},{imgUrl:'https://trendgully.com/contributor-dashboard/uploads/TG2508074728thumbnail0.jpg',name:'userName01',likeCount:'173',viewCount:'173'},{imgUrl:'https://trendgully.com/contributor-dashboard/uploads/TG2508074728thumbnail0.jpg',name:'userName01',likeCount:'173',viewCount:'173'},{imgUrl:'https://trendgully.com/contributor-dashboard/uploads/TG2508074728thumbnail0.jpg',name:'userName01',likeCount:'173',viewCount:'173'}
]
    
class DiscoverDesigner extends Component {
    state={itemList:list}
  render() {
    const {itemList}=this.state
    return (
      <>
      <Crousel/>
      <div className='container-fluid discover-designer'>
        <div className='row'>
            <div className='col-12 text-center heading-container'>
                <h1 className='heading'>
                    Discover Designers
                </h1>
                <p className='sub-heading'>and get inspired!</p>
            </div>
        </div>
        <ul className='row card-container'>
            {itemList.map((each)=>(<DiscoverDesignItem userDetails={each}/>))}
            
            
        </ul>
      </div>
      </>
    )
  }
}
 export default DiscoverDesigner