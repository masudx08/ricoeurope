import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './assets.css'
import Tripmine from '../../assets/img/Attack_Defence_Items/tripmine_gold1.png'
import AttackDog from '../../assets/img/Attack_Defence_Items/attackdog2.png'
import DroneAttack from '../../assets/img/Attack_Defence_Items/droneattack3.png'
import Emp from '../../assets/img/Attack_Defence_Items/EMP4.png'
import FaceReco from '../../assets/img/Attack_Defence_Items/facerecognition5.png'
import GasMask from '../../assets/img/Attack_Defence_Items/gasmask6.png'
import WireCutter from '../../assets/img/Attack_Defence_Items/wirecutters_zoomin7.png'
import Meat from '../../assets/img/Attack_Defence_Items/meat8.png'
import Alarm from '../../assets/img/Attack_Defence_Items/alarm9.png'
import MetalDetector from '../../assets/img/Attack_Defence_Items/metal detector10.png'
import NightVision from '../../assets/img/Attack_Defence_Items/nightvision11.png'
import Poison from '../../assets/img/Attack_Defence_Items/poisongas12.png'
import LaserBeam from '../../assets/img/Attack_Defence_Items/laserbeam.png'
export default function Assets() {
  const assets = [
    {
      img: Alarm,
      title: 'Alarm System',
      description: 'Basic security system to warn off thieves'
    },
    {
      img: LaserBeam,
      title: 'Laser Beams',
      description: 'For those serious about internal security'
    },
    {
      img: DroneAttack,
      title: 'Drones',
      description: 'Attack Drones, a formiddable security measure to fend off opposing players'
    },
    {
      img: GasMask,
      title: 'Gas Mask',
      description: 'You never know when these will come in handy'
    },
    {
      img: WireCutter,
      title: 'Wire Cutters',
      description: 'A simple yet effective measure to cut wires'
    },
    {
      img: FaceReco,
      title: 'Facial Recognition',
      description: 'Top of the range security measure for vaults'
    },
    {
      img: Emp,
      title: 'Emp',
      description: 'Usefull for disabling electronic devces'
    },
    {
      img: MetalDetector,
      title: 'Metal Detector',
      description: 'Watch where you step, theres some nasty suprises waiting'
    },
    {
      img: Tripmine,
      title: 'Trip Mine',
      description: 'Advanced security measure for external'
    },
  ]
  return (
    <div className='assetsCont'>
      <div className="container">
        <h2 className="text-center highlight-text mb-5">Game Assets</h2>
        <Row className='items_cont'>
          {
            assets.map((item, index) => {
              return (
                <Col md={4} key={index} className='item'>
                  <div className='item_left'>
                    <img src={item.img} alt="" />
                  </div>
                  <div className='item_right'>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
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
