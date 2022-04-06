import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './breeding.css'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import BabyMamaImg from '../../assets/img/Characters/png/babymama.png'
import MemberImg from '../../assets/img/Characters/png/member.png'
export default function Breeding() {
  return (
    <div className='breedingCont'>
      <div className="container">
        <div className='mb-3'>
          <h1>BREEDING</h1>
          <p>You can combine up to a maximum of 10 gang members with your baby mama to speed up the process.</p>
        </div>
        <Row className='rowCont'>
          <Col md={6} className='leftbox'>
            <div className='controler mb-3'>
              <h6>Baby Mama</h6>
              <div className='right'>
                <p>01/03</p>
                <div className='ms-4'>
                  <IoIosArrowDropleftCircle />
                  <IoIosArrowDroprightCircle />
                </div>
              </div>
            </div>
            <div className="section1">
              <Row className='align-items-center'>
                <Col md={4}>
                  <div className='leftimg'>
                    <img src={BabyMamaImg} alt="" />
                    <div className='d-flex justify-content-between p-1'>
                      <p>#101</p>
                      <p>+3</p>
                    </div>
                  </div>
                </Col>
                <Col md={8}>
                  <h6 className='text-start'>Time Remaining</h6>
                  <div className='time'>
                    <div>
                      <p><span>0</span> <span>5</span></p>
                      <p>Days</p>
                    </div>
                    <div>
                      <p><span>4</span> <span>2</span></p>
                      <p>Hours</p>
                    </div>
                    <div>
                      <p><span>1</span> <span>5</span></p>
                      <p>Minutes</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center justify-content-between mt-3'>
                    <div>
                      <button className="mybtn mybtn-p">Collect</button>
                    </div>
                    <div className='time'>
                      <div>
                        <p><span>4</span> <span>5</span></p>
                        <p>Seconds</p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="section2">
                  <div className='text-start mt-3'>
                    <h6 className='my-3 mt-4'>Gang Members 3/10</h6>
                  </div>
                  <Row>
                    <Col md={3}>
                     <div className="imgCont">
                     <img src={MemberImg} alt="" />
                     </div>
                    </Col>
                    <Col md={3}>
                     <div className="imgCont">
                     <img src={MemberImg} alt="" />
                     </div>
                    </Col>
                    <Col md={3}>
                     <div className="imgCont">
                     <img src={MemberImg} alt="" />
                     </div>
                    </Col>
                  </Row>
                  <div className='text-end mt-3'>
                    <button className='mybtn'>Select</button>
                    <button className='mybtn'>Remove</button>
                  </div>
                </div>
            </div>
          </Col>
          <Col md={6} className='rightbox'>
          </Col>
        </Row>
      </div>
    </div>
  )
}
