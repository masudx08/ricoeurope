import React from 'react'
import './stake.css'
import LeaderImg from '../../assets/img/Characters/png/gang_leader_m.png'
import MemberImg from '../../assets/img/Characters/png/thief.png'
import MamaImg from '../../assets/img/Characters/png/babymama.png'

import { Col, Row } from 'react-bootstrap'
export default function Stake() {
  const leaders = [
    { img: LeaderImg },
    { img: LeaderImg },
    { img: LeaderImg },
    { img: LeaderImg },
    { img: LeaderImg },
    { img: LeaderImg }
  ]
  const members = [
    {img: MemberImg},
    {img: MemberImg},
    {img: MemberImg},
  ]
  const mamas = [
    {img: MamaImg},
    {img: MamaImg},
    {img: MamaImg},
  ]
  return (
    <div className='stakeContainer container'>
      <div>
        <div className='controler'>
          <div>
            <p>Leader #06</p>
          </div>
          <div>
            <button>Select All</button>
            <button>Unstake</button>
          </div>
        </div>
        <Row >
          {
            leaders.map((leader, i) => {
              return (
                <Col key={i} md={2}>
                  <div className="mycard">
                    <img src={leader.img} alt="" />
                    <p>Expand View</p>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </div>

      <div className='mt-5'>
      <div className='text-start'>
        <p>Members #3</p>
      </div>
      <Row>
          {
            members.map((member, i) => {
              return (
                <Col key={i} md={2}>
                  <div className="mycard">
                    <img src={member.img} alt="" />
                    <p>Expand View</p>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </div>

      <div className='mt-5'>
      <div className='text-start'>
        <p>Baby Mamas #3</p>
      </div>
      <Row>
          {
            mamas.map((mama, i) => {
              return (
                <Col key={i} md={2}>
                  <div className="mycard">
                    <img src={mama.img} alt="" />
                    <p>Expand View</p>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </div>
    </div>
  )
}
