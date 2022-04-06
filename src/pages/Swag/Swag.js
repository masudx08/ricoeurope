import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './swag.css'
export default function Swag() {
  return (
    <div className='swagCont'>
      <div className="container">
        <div>
          <h1>S.W.A.G</h1>
          <p>Customized and upgrade your gang leader NFT’s</p>
        </div>
        <Row className='rowCont'>
          <Col md={6} className='leftbox'>

          </Col>
          <Col md={6} className='rightbox'>
          </Col>
        </Row>
      </div>
    </div>
  )
}
