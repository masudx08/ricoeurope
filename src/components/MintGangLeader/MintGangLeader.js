import React from 'react'
import { Col, Row } from 'react-bootstrap'
import GangLeaderM from '../../assets/Characters/png/gang_leader_m.png'
import GangLeaderF from '../../assets/Characters/png/gang_leader_f.png'
import './mintGangLeader.css'
export default function MintGangLeader() {
  return (
    <div className='mintGangLeader'>
      <div className="container">
        <div>
          <h1>Minting</h1>
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
          <Row>
            <Col xs={10}>
              <div>
                <button>{`<`}</button>
                <input type="text" value='05' />
                <button>{`>`}</button>
              </div>
              <div>
                <div>
                  <p>Cost</p>
                  <p>1 AVAX</p>
                </div>
                <div>
                  <button className='mybtn mybtn-p'>MINT</button>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <div>
              <p>50000 MINTED</p>
            </div>
            <div>
              <Col xs={4}>100</Col>
              <Col xs={4}>300</Col>
              <Col xs={4}>500</Col>
            </div>
          </Row>
        </div>
      </div>
    </div>
  )
}
