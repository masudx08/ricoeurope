import React from 'react'
import './breedresult.css'
export default function Failure() {
  return (
    <div className='breedResultCont'>
      <div>
        <h1>OH-NO!</h1>
        <p className='highlight-text mt-3 mb-3'>Not every breed can be successful, better luck next time</p>
        <div className="mycard">
        </div>
        <button className='mybtn mybtn-p mt-4'>Return</button>
        <p className='mt-5'>After breeding your new NFTS will show up in <span className="highlight-text">Staking</span></p>
        <p>Please allow a few minutes for the block chain to propergate</p>
      </div>
    </div>
  )
}
