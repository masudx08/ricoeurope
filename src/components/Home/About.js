import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './about.css'
import BabyMama from '../../assets/img/Characters/png/babymama.png'
import GangLeader from '../../assets/img/Characters/png/gang_leader_m.png'
import {IoIosArrowDown} from 'react-icons/io'
export default function About() {
  return (
    <div className='aboutCont'>
      <div className="container" style={{paddingTop: '50px'}}>
        <Row className='plotCont'>
          <Col md={4}>
            <div>
              <p>Gang Leader Minted</p>
              <div className='plot'>
                <div>
                  <h2>58<span style={{ fontSize: '17px', fontWeight: 'normal', paddingLeft: '3px' }}>k</span></h2>
                </div>
                <div className='percent'>7.85% <IoIosArrowDown /></div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div>
              <p>Unique Players</p>
              <div className='plot'>
                <div>
                  <h2>23<span style={{ fontSize: '17px', fontWeight: 'normal', paddingLeft: '3px' }}>k</span></h2>
                </div>
                <div className='percent'>7.85% <IoIosArrowDown /></div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div>
              <p>Leaders in Jail</p>
              <div className='plot'>
                <div>
                  <h2>79<span style={{ fontSize: '17px', fontWeight: 'normal', paddingLeft: '3px' }}>k</span></h2>
                </div>
                <div className='percent'>7.85% <IoIosArrowDown /></div>
              </div>
            </div>
          </Col>
        </Row>


        <Row>
          <Col>
            <h2 className='highlight-text'>What is Gangs of the Meta ?</h2>
            <p className='mt-4'>
              Gangs-of-the-meta is an NFT P2E (Non Fungible Token ) (Play 2 Earn) game built on the avalanche block-chain.
            </p>
            <p>
              Players use their multiple different types of NFT’s they own within the game to earn $DLZ tokens. $DLZ can be staked to earn $GOTM.
              $GOTM is used to upgrade gang leaders.
            </p>
            <p>
              Attack and defend against rival gangs. Join or Create a Cartel and participate in Cartel wars & Tournaments.
              Dominate Territory to earn additional rewards from money laundering facilities positioned across various cities.
            </p>
            <button className='outline_round_btn'>Learn More</button>
          </Col>
          <Col className='d-flex'>
            <div >
              <img className='about_babyImg' src={BabyMama} alt="" />
            </div>
            <div >
              <img className='about_leaderImg' src={GangLeader} alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
