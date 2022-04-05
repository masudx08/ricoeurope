import React, { useState } from 'react'
import LeaderImg from '../../assets/img/Characters/png/gang_leader_m.png'
import './mintresult.css'
export default function MintResult() {
  const [result, setResult] = useState('success')
  return (
    <div className='resultCont'>
      <div className='innerContainer'>
      <h1 className='mb-4'>Congratulations</h1>
      <p>Gang Member #12 is now yours</p>
      <div className="image">
        <img  src={LeaderImg} alt="" />
        <p className='highlight-text expand-text' >Expand View</p>
      </div>
      <button className="mybtn mybtn-p">Next</button>
      <div className="mt-5">
      <p>After minting your new NFTS will show up in <span className='highlight-text'>Staking</span></p>
      <p>Please allow a few minutes for the block chain to propergate</p>
      </div>
      </div>
    </div>
  )
}
