import React from 'react'
import './jail.css'
import Prison1 from '../../assets/img/Prison/80.png'
import { Col, Row } from 'react-bootstrap'
import LeaderImg from '../../assets/img/Characters/png/gang_leader_m.png'
export default function Jail() {
  return (
    <div className='jailCont'>
      <div className="container">
        <h1 className='mb-4'>Jail</h1>
        <Row>
          <Col md={7}>
            <p className="highlight-text text-start">Pay a bribe to the police and get released or serve your sentence</p>
            <div className="my_card">
              <div>
                <div className='imgCont'>
                  <img src={LeaderImg} alt="" />
                  <p>Expand View</p>
                </div>
              </div>
              <div className='yellow-square'>
                <div className='apply'>08 D</div>
                <div className='apply'>12 H</div>
                <div className='apply'>26 M</div>
                <div className='apply'>32 S</div>
                <div className='special'>
                  <p>1355 $Dollar</p>
                  <button className='mybtn mybtn-p'>Pay</button>
                </div>
              </div>
            </div>
            <div className="my_card mt-4">
              <div>
                <div className='imgCont'>
                  <img src={LeaderImg} alt="" />
                  <p>Expand View</p>
                </div>
              </div>
              <div className='yellow-square'>
                <div className='apply'>0 D</div>
                <div className='apply'>0 H</div>
                <div className='apply'>21 M</div>
                <div className='apply'>19 S</div>
                <div className='special'>
                  <p>5 $Dollar</p>
                  <button className='mybtn mybtn-p'>Pay</button>
                </div>
              </div>
            </div>
          </Col>
          <Col md={5}>
            <img src={Prison1} alt="" />
          </Col>
        </Row>
        <p className='mt-4'>75% of bribes paid to be released are distributed to police holders, 15% Is paid into the amenity pool and 15% is burned</p>
      </div>
    </div>
  )
}
