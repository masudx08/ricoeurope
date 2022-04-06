import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './swag.css'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import BabyMamaImg from '../../assets/img/Characters/png/babymama.png'
import MemberImg from '../../assets/img/Characters/png/member.png'
export default function Swag() {
  const inventories = [
    {}, {}, {}, {}, {}, {}
  ]

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
                    <div className='highlight-text'>
                      <p>Expand View</p>
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
                  <button className='mybtn mybtn-p m-0'>Buy</button>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} className='rightbox'>
          <div className='text-start d-flex' style={{columnGap:'10px'}}>
              <h6>Filter</h6>
              <h6 className='unselect'>Level</h6>
              <h6 className='unselect'>Type</h6>
            </div>
            <div className="section1 px-2">
              <div className='text-start mt-3'>
                <h6 className='my-3 mt-4'>Inventory</h6>
              </div>
              <Row>
                {
                  inventories.map((inventory, i)=>{
                    return (
                      <Col key={i} md={2}>
                      <div className="imgCont">
                      </div>
                    </Col>
                    )
                  })
                }
                
              </Row>
              <div className='text-start mt-3'>
                <h6 className='my-3 mt-4'>Glasses</h6>
              </div>
              <Row>
                {
                  inventories.map((inventory, i)=>{
                    return (
                      <Col key={i} md={2}>
                      <div className="imgCont">
                      </div>
                    </Col>
                    )
                  })
                }
                
              </Row>
              <div className='text-start mt-3'>
                <h6 className='my-3 mt-4'>Jewelery</h6>
              </div>
              <Row>
                {
                  inventories.map((inventory, i)=>{
                    return (
                      <Col key={i} md={2}>
                      <div className="imgCont">
                      </div>
                    </Col>
                    )
                  })
                }
                
              </Row>
              <div className='text-start mt-3'>
              <button className="mybtn mybtn-p m-0 ">Add</button>
              <button className="mybtn outlinebtn">Select</button>
              </div>
            </div>
          </Col>
        </Row>
        <button className="mybtn mybtn-p mt-4 savebtn">Save</button>
      </div>
    </div>
  )
}
