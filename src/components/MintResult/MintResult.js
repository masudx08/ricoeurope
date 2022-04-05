import React, { useState } from 'react'
import LeaderImg from '../../assets/img/Characters/png/gang_leader_m.png'
import './mintresult.css'
import { BsArrowRight } from 'react-icons/bs'
export default function MintResult() {
  const [result, setResult] = useState('failure')
  return (
    <div className='resultCont'>
      <div className='innerContainer'>
        {
          result == 'success' &&
          <h1 className='mb-4'>Congratulations</h1>
        }
        {
          result == 'failure' &&
          <div>
            <h1 >Minting</h1>
            <p className='highlight-text'>Failure</p>
            <h4 className='highlight-text'>UH-OH !</h4>
          </div>
        }

        {
          result == 'success' &&
          <p>Gang Member #12 is now yours</p>
        }
        {
          result == 'failure' &&
          <p>Gang Member #12 was stolen by owner of Thief #101</p>
        }
        <div className="image">
          <img src={LeaderImg} alt="" />
          <p className='highlight-text expand-text' >Expand View</p>
        </div>
        <button className="mybtn mybtn-p">Next <span style={{ marginLeft: '7px' }}><BsArrowRight /></span></button>
        {
          result == 'success' &&
          <div className="mt-5">
          <p>After minting your new NFTS will show up in <span className='highlight-text'>Staking</span></p>
          <p>Please allow a few minutes for the block chain to propergate</p>
        </div>
        }
      </div>
    </div>
  )
}
