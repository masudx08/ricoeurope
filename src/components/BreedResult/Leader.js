import React from 'react'
import './breedresult.css'
import LeaderImg from '../../assets/img/Characters/png/leader.png'
export default function Leader() {
  return (
    <div className='breedResultCont'>
      <div>
        <h1>Congratualtions</h1>
        <p className='highlight-text mt-3 mb-3'>Your birth was successful and heres what you got</p>
        <h2 className='highlight-text' style={{fontWeight:'900', fontFamily:'Gilroy', letterSpacing:'2px'}}>1X LEADER</h2>
        <div className="mycard">
          <img style={{height:'80%'}} src={LeaderImg} alt="" />
          <p className='highlight-text' style={{position:'absolute', bottom: 2, left:0, right: 0}}>Expand View</p>
        </div>
        <button className='mybtn mybtn-p mt-4'>Return</button>
        <p className='mt-5'>After breeding your new NFTS will show up in <span className="highlight-text">Staking</span></p>
        <p>Please allow a few minutes for the block chain to propergate</p>
      </div>
    </div>
  )
}
