import React from 'react'
import './homebanner.css'
import { userContext } from '../../Context/Userconext'
import { useContext } from 'react'
function HomeBanner() {

  return (
    
    <div className="container-fluid banner">
      <div className="row">
      <div className=" ban col-sm-12">
        <div className="desc">
          <h1>We try to provide </h1>
          <h1 className='subh1'>Malayalam Subtitles  </h1>
          <h1> of best international movies here</h1>
        </div>
    
    </div>
    </div>
     
    </div>
    
  
  )
}

export default HomeBanner