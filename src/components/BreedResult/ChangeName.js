import React from 'react'
import './breedresult.css'
import Babythief from '../../assets/img/Characters/png/babythief.png'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export default function ChangeName() {
  return (
    <div className='breedResultCont'>
      <div>
        <h2 className='highlight-text mt-3 mb-3'>Change Your Gang Leader Name</h2>
        <div className='breed__controler'>
          <div className='arrow'>
            <IoIosArrowBack />
          </div>
          <div className='titlebox'>
            <p>F Gang Leader 101</p>
          </div>
          <div className='arrow'>
            <IoIosArrowForward />
          </div>
        </div>
        <div className='mb-4'>
          <small className='smalltext'>Max Characters ( 30 )</small>
        </div>
        <div className="mycard">
          <img style={{ height: '80%' }} src={Babythief} alt="" />
          <p className='highlight-text' style={{ position: 'absolute', bottom: 2, left: 0, right: 0 }}>Expand View</p>
        </div>
        <div  className='mt-5'>
          <div className='highlight-text' style={{width: '60%', margin: 'auto'}}>
            <p className=' mb-0'>Cost: 10 GOTM</p>
          </div>
          <div>
            <button className='mybtn mybtn-p mt-2' style={{ marginRight: '5px' }}>Cancel</button>
            <button className='mybtn mt-2' style={{ background: '#34c412' }}>Change</button>
          </div>
        </div>


      </div>
    </div>
  )
}
