import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './map.css'
import MapImg from '../../assets/img/Map/map.png'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
export default function Map() {


  return (
    <div className='mapCont'>
      <div className="container m-auto">
        <Row className=' p-4'>
          <Col md={6}>
            <div>
              <h1>META CITY NAME 1</h1>
              <p className='highlight-text'>The city of metalanche has been dominated by the
                same cartel for centuries, the tides have turned
                theres new kids on the block ready to shake things up</p>
            </div>
          </Col>
          <Col md={6} className='d-flex align-items-center'>
            <div className='next_prev'>
              <div>
                <p>Previous</p>
                <div className="arrow">
                  <IoIosArrowBack />
                </div>
              </div>
              <div>
                <div className="arrow">
                  <IoIosArrowForward />
                </div>
                <p>Next</p>
              </div>
            </div>
            <div style={{marginLeft:'20px',  fontSize:'14px'}}>
              <p className='mb-2'>Select Gang <IoIosArrowForward className='arrowdown'/></p>
              <button className="mybtn mybtn-p" style={{padding:'2px 15px', borderRadius:'3px', margin:'0'}}>Explore</button>
            </div>
          </Col>
        </Row>
        <Row className='rowCont'>
          <Col md={6} className='leftbox'>
            <img src={MapImg} alt="" />
          </Col>
          <Col md={6} className='rightbox'>
            <div className="section1">
              <p className='text-white mb-2'>Map Details</p>
              <p>Plots: 900</p>
              <p>For Sell: 5</p>
              <p>Amenity: 100</p>
            </div>
            <div className="section2">
              <p className='text-white mb-2'>Top Cartels</p>
              <p>1. Cartel 1</p>
              <p>2. Cartel 2</p>
              <p>3. Cartel 3</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
