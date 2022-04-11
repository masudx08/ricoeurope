import React from 'react'
import './breedresult.css'
import Leader1 from '../../assets/img/Characters/png/leader.png'
import Leader2 from '../../assets/img/Characters/png/leader2.png'
import { Col, Row } from 'react-bootstrap'
export default function SwagSuccess() {
  return (
    <div className='breedResultCont'>
      <div>
        <h1>Congratualtions</h1>
        <p className='highlight-text mt-3 mb-3'>Your successfully upgraded your Gang Leader</p>
        <p className='' >Go flex that SWAG </p>
        <Row className='justify-content-center' style={{rowGap:'20px'}}>
          <Col md={4}>
            <div className="mycard">
              <img style={{ height: '80%' }} src={Leader1} alt="" />
              <p className='highlight-text' style={{ position: 'absolute', bottom: 2, left: 0, right: 0 }}>Expand View</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="mycard">
              <img style={{ height: '80%' }} src={Leader2} alt="" />
              <p className='highlight-text' style={{ position: 'absolute', bottom: 2, left: 0, right: 0 }}>Expand View</p>
            </div>
          </Col>
        </Row>
        <button className='mybtn mybtn-p mt-4'>Return</button>
        <p className='mt-5'>Please allow a few minutes for the block chain to propergate <span className="highlight-text">Staking</span></p>
       
      </div>
    </div>
  )
}
