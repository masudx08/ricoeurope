import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './header.css'
import MyNav from './MyNav'
import  HeaderImg  from '../../assets/img/Characters/headermembers.png'
export default function Header() {
  return (
    <div className='headerContainer'>
      <MyNav />
        <div className="container">
      <Row >
        <Col md={6} className='mt-5'>
          <h1 className="highlight-text">
            Gang of the Meta
          </h1>
          <p className='mt-5 mb-5'>NFT P2E game built on the avalanche block-chain.  Attack and defend against rival gangs. Join a Cartel and Dominate Territory.</p>
          <button className='playbtn'>Play Now</button>
        </Col>
        <Col md={6}>
          <img  src={HeaderImg} alt="" />
        </Col>
      </Row>
        </div>
    </div>
  )
}
