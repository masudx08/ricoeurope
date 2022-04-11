import React from 'react'
import './showcase.css'
import BabyMama from '../../assets/img/Characters/png/babymama.png'
import Member from '../../assets/img/Characters/png/member.png'
import Police from '../../assets/img/Characters/png/police.png'
import Thief from '../../assets/img/Characters/png/thief.png'
import Guard from '../../assets/img/Characters/png/guard.png'
import { Col, Row } from 'react-bootstrap'

export default function Showcase() {
  return (
    <div className='showcaseCont'>
      <div className="innerCont">
     <div style={{maxWidth:'500px', margin: 'auto'}}>
     <h2 className='highlight-text'>Character Showcase</h2>
      <p className='mb-5 mt-3'>
        A variety of game characters each with unique abilities and use cases within the game.
        Designed by Erickson L.
      </p>
     </div>

      
      <Row  className='justify-content-center align-items-center gap-3'>
        <Col className='show' md={2}>
          <div className="showdown">
            <img src={BabyMama} alt="" />
          </div>
        </Col>
        <Col className='show' md={2}>
          <div className="showup">
            <img src={Member} alt="" />
          </div>
        </Col>
        <Col className='show' md={2}>
          <div className="showdown">
            <img src={Police} alt="" />
          </div>
        </Col>
        <Col className='show' md={2}>
          <div className="showup ">
            <img src={Thief} alt="" />
          </div>
        </Col>
        <Col className='show' md={2}>
          <div className="showdown">
            <img src={Guard} alt="" />
          </div>
        </Col>
      </Row>
      </div>
    </div>
  )
}
