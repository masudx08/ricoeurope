import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './swag.css'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import BabyMamaImg from '../../assets/img/Characters/png/babymama.png'
import MemberImg from '../../assets/img/Characters/png/member.png'
export default function Swag() {
  return (
    <div className='swagCont'>
      <div className="container">
        <div className='mb-4'>
          <h1>S.W.A.G</h1> 
          <p>Customized and upgrade your gang leader NFT’s</p>
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
              <Row >
                <Col md={4}>
                  <div className='leftimg'>
                    <img src={BabyMamaImg} alt="" />
                    <div className='d-flex justify-content-between p-1'>
                      <p>#101</p>
                      <p>+3</p>
                    </div>
                  </div>
                </Col>
                <Col md={8} className='text-start'>
                  <div>
                  <p> <span className="text-danger">Name:</span> Miguel Lijon </p>
                  <p> <span className="text-danger">Level:</span> 10 </p>
                  <button className="mybtn mybtn-p m-0 mt-3">Customize</button>
                  </div>
                </Col>
              </Row>
              <div className='text-start mt-3'>
                <h6>Upgrade Requirement</h6>
                <p>Level 3 Sunglasses</p>
                <p>Level 3 Hat</p>
                <p>Level 3 Shoes</p>
              </div>
              <div className="section2">
                <div className='text-start mt-3'>
                  <h6 className='my-3 mt-4'>Gang Members 3/10</h6>
                </div>
                <Row>
                  <Col md={3}>
                    <div className="imgCont">
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="imgCont">
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="imgCont">
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="imgCont">
                    </div>
                  </Col>
                 
                </Row>
                <div className='text-start mt-3'>
                  <button className='mybtn mybtn-p'>Buy</button>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} className='rightbox'>
            <div className="section1">
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
              <div className='text-start mt-3'>
                <button className='mybtn'>Add</button>
                <button className='mybtn'>Select All</button>
              </div>
            </div>

            <div className='text-start mt-3'>
              <p className="highlight-text">Time required to breed</p>
              <p className='small-text'>1 Baby Mama & 1 Gang Member = 14 Days
              Each + 1 gang member reduces by one day</p>
              <p className="highlight-text mt-3">Breed Count</p>
              <p className='small-text'>Each time a baby mama breeds an NFT +1 is added to her breed_count
              The number of days it now takes for a baby mama to breed increases
              by 1 after each mint.</p>
            </div>
          </Col>
        </Row>
        <button className="mybtn mybtn-p mt-4 savebtn">Save</button>
      </div>
    </div>
  )
}
