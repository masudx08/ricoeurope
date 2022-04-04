import React from 'react'
import { Col, Row } from 'react-bootstrap'
import GangLeaderM from '../../assets/img/Characters/png/gang_leader_m.png'
import GangLeaderF from '../../assets/img/Characters/png/gang_leader_f.png'
import './mintGangLeader.css'
import  {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import {RiTruckLine} from 'react-icons/ri'
export default function MintGangLeader() {
  return (
    <div className='mintGangLeader'>
      <div className="container">
        <div>
          <h1 >Minting</h1>
          <p>You must have at least 1gang leader in order to practise in the</p>
          <div>
            <button className='mybtn mybtn-o'>Minting Gang Leader</button>
            <button className='mybtn mybtn-d'>Random Mint</button>
          </div>
        </div>
        <div>
          <Row className='justify-content-center'>
            <Col md={4}>
              <div className='gang-leader'>
                <img src={GangLeaderM} alt="" />
              </div>
            </Col>
            <Col md={4}>
              <div className='gang-leader'>
                <img src={GangLeaderF} alt="" />
              </div>
            </Col>
          </Row>
          <Row className='d-flex justify-content-center'>
            <div   className='gangLeader__parentInputContainer'>
              <Col md={6} className='gangLeader__inputContainer'>
                <div className="arrow">
                <AiOutlineLeft />
                </div>
                <input type="text" value='05' />
                <div className="arrow">
                <AiOutlineRight />
                </div>
              </Col>
              <Col xs={12} md={5} className='gangLeader__rightinputContainer'>
                <div>
                  <p>Cost</p>
                  <p>5000$</p>
                </div>
                <div>
                  <button className='mybtn mybtn-p'>MINT</button>
                </div>
              </Col>
            </div>
          </Row>
          <Row>
            <div className='mt-5 mb-5'>
              <p>50000 MINTED</p>
            </div>
            <div className='gangLeader__minted'>
              <Col xs={4} md={3} style={{position:'relative'}}>
                <div className="roll"></div>
                <div className="before">
                  <RiTruckLine className='truckicon' />
                </div>
              </Col>
              <Col xs={4} md={3} style={{position:'relative'}}>
                <div className="roll"></div>
                <div className="before">100</div>
              </Col>
              <Col xs={4} md={3} style={{position:'relative'}}>
                <div className="roll"></div>
                <div className="before">300</div>
                <div className="after">500</div>
              </Col>
            </div>
          </Row>
        </div>
      </div>
    </div>
  )
}
