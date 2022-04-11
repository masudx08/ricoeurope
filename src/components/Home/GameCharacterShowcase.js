import React from 'react'
import './gamecharactershowcase.css'
import Spy from '../../assets/img/Characters/png/Spy.png'
import BabyThief from '../../assets/img/Characters/png/babythief.png'
import GangStar from '../../assets/img/Characters/png/ganster.png'
import Thief from '../../assets/img/Characters/png/thief.png'
import Guard from '../../assets/img/Characters/png/guard.png'
import { Col, Row } from 'react-bootstrap'

export default function GameCharacterShowcase() {
  return (
    <div className='gameCharacterShowcase'>
      <div className="innerCont">
        <div style={{ maxWidth: '500px', margin: 'auto' }}>
          <h2 className='highlight-text'>Game Characters</h2>
          <p className='mb-5 mt-3'>
            A variety of game characters each with unique abilities and use cases within the game.
            Designed by Erickson L.
          </p>
        </div>


        <Row className='justify-content-center align-items-center gap-3'>
          <Col className='show' md={2}>
            <div className="showdown">
              <img src={Spy} alt="" />
            </div>
          </Col>
          <Col className='show' md={2}>
            <div className="showup">
              <img src={BabyThief} alt="" />
            </div>
          </Col>
          <Col className='show' md={2}>
            <div className="showdown">
              <img src={GangStar} alt="" />
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
