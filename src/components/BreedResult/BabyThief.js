import React from 'react'
import './breedresult.css'
import BabyThiefImg from '../../assets/img/Characters/png/babythief.png'
export default function BabyThief() {
  return (
    <div className='breedResultCont'>
      <div>
        <h1>OH-NO!</h1>
        <p className='highlight-text mt-3 mb-3'>Your breed was stolen by babythief <span className='text-white'>#101</span></p>
        <p>Heres what you could of had</p>
        <div className="mycard">
          <img style={{height:'80%'}} src={BabyThiefImg} alt="" />
          <p className='highlight-text' style={{position:'absolute', bottom: 2, left:0, right: 0}}>Expand View</p>
        </div>
        <button className='mybtn mybtn-p mt-4'>Return</button>
        
      </div>
    </div>
  )
}
