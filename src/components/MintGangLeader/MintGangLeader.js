import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import GangLeaderM from '../../assets/img/Characters/png/gang_leader_m.png'
import GangLeaderF from '../../assets/img/Characters/png/gang_leader_f.png'
import SpyImg from '../../assets/img/Characters/png/Spy.png'
import GuardImg from '../../assets/img/Characters/png/guard.png'
import BabyImg from '../../assets/img/Characters/png/babymama.png'
import MemberImg from '../../assets/img/Characters/png/member.png'
import ThiefImg from '../../assets/img/Characters/png/thief.png'
import PoliceImg from '../../assets/img/Characters/png/police.png'
import './mintGangLeader.css'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { RiTruckLine } from 'react-icons/ri'
export default function MintGangLeader() {
  const [selectedBtn, setSelectedBtn] = useState('gangleader')
  return (
    <div className='mintGangLeader'>
      <div className="container">
        <div>
          <h1 className='pt-4 mb-4'>Minting</h1>
          {
            selectedBtn == 'gangleader' && 
            <p>You must have at least 1gang leader in order to practise in the</p>
          }
          <div>
            <button className='mybtn mybtn-o' onClick={() => setSelectedBtn('gangleader')}>Mint Gang Leader</button>
            <button className='mybtn mybtn-d' onClick={() => setSelectedBtn('othernft')}>Mint Other NFT</button>
          </div>
        </div>
        {
          selectedBtn == 'othernft' &&
          <div className='mt-5 '>
            <p className='mb-1'>There is a 10% chance your mint will be stolen by another player who owns a thief.</p>
            <p>Chance of minting: <span className="highlight-text"> Member 65%/Thief 5%/Guard 10%/Police 10%/Spy 10%/BabyMama 3%</span></p>
          </div>
        }
        <div>
          {
            selectedBtn == 'gangleader' &&
            <Row className='justify-content-center'>
              <Col md={4}>
                <div className='gang-leader'>
                  <img src={GangLeaderM} alt="" />
                  <div className='gang__innertext'>
                    GEN_0 <br />
                    40/500
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className='gang-leader'>
                  <img src={GangLeaderF} alt="" />
                  <div className='gang__innertext'>
                    GEN_0 <br />
                    40/500
                  </div>
                </div>
              </Col>
            </Row>
          }

          {
            selectedBtn == 'othernft' &&
            <Row className='other-nft__row'>
              <Col md={4}>
                <div className='other-nft'>
                  <img src={SpyImg} alt="" />
                  <div className='gang__innertext'>
                    GEN_0 <br />
                    100/5000
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className='other-nft'>
                  <img src={GuardImg} alt="" />
                  <div className='gang__innertext'>
                    GEN_0 <br />
                    100/5000
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className='other-nft'>
                  <img src={BabyImg} alt="" />
                  <div className='gang__innertext'>
                    GEN_0 <br />
                    100/5000
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className='other-nft'>
                  <img src={MemberImg} alt="" />
                  <div className='gang__innertext'>
                    GEN_0 <br />
                    100/5000
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className='other-nft'>
                  <img src={ThiefImg} alt="" />
                  <div className='gang__innertext'>
                    GEN_0 <br />
                    100/5000
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className='other-nft'>
                  <img src={PoliceImg} alt="" />
                  <div className='gang__innertext'>
                    GEN_0 <br />
                    100/5000
                  </div>
                </div>
              </Col>
            </Row>
          }

          {
            selectedBtn == 'gangleader' &&
            <Row className='d-flex justify-content-center'>
              <div className='gangLeader__parentInputContainer'>
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
                    <p>1 AVAX</p>
                  </div>
                  <div>
                    <button className='mybtn mybtn-p'>MINT</button>
                  </div>
                </Col>
              </div>
            </Row>
          }
          {
            selectedBtn == 'othernft' &&
            <Row className='d-flex justify-content-center'>
              <div className='gangLeader__parentInputContainer'>
                <Col md={6} className='gangLeader__inputContainer'>
                  <div className="arrow">
                    <AiOutlineLeft />
                  </div>
                  <input type="text" value='01' />
                  <div className="arrow">
                    <AiOutlineRight />
                  </div>
                </Col>
                <Col xs={12} md={5} className='gangLeader__rightinputContainer'>
                  <div>
                    <p>Cost</p>
                    <p>5000 $DLZ</p>
                  </div>
                  <div>
                    <button className='mybtn mybtn-p'>MINT</button>
                  </div>
                </Col>
              </div>
              <div className='mt-5 mb-5'>
                After minting your new NFTS will show up in <span className='highlight-text'>Staking</span>
              </div>
            </Row>
          }
          {
            selectedBtn == 'gangleader' &&
            <Row>
              <div className='mt-5 mb-5'>
                <p className='pb-3'>99 MINTED LEADERS IN THE META</p>
              </div>
              <div className='gangLeader__minted'>
                <Col xs={4} md={3} style={{ position: 'relative' }}>
                  <div className="roll"></div>
                  <div className="before truckbefore">
                    <RiTruckLine className='truckicon ' />
                  </div>
                </Col>
                <Col xs={4} md={3} style={{ position: 'relative' }}>
                  <div className="roll"></div>
                  <div className="before">100</div>
                </Col>
                <Col xs={4} md={3} style={{ position: 'relative' }}>
                  <div className="roll"></div>
                  <div className="before">300</div>
                  <div className="after">500</div>
                </Col>
              </div>
            </Row>
          }
        </div>
      </div>
    </div>
  )
}
