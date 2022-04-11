import React from 'react'
import './roadmap.css'
import LeaderM from '../../assets/img/Characters/png/gang_leader_m.png'
import LeaderF from '../../assets/img/Characters/png/gang_leader_f.png'
import Babymama from '../../assets/img/Characters/png/babymama.png'
import { Col, Row } from 'react-bootstrap'

export default function Roadmap() {
  return (
    <div className='roadmapCont'>
      <div className="container">
        <h2 className="highlight-text text-center">Roadmap</h2>
        <Row>
          <Col md={6}>
            <div className="leftImg">
              <img src={LeaderM} alt="" />
            </div>
          </Col>
          <Col md={6} className='firstSection'>
            <h4>The Details</h4>
            <p>
              Reveal the project details, and a first look at our NFT gaming concept.</p>
            <p>
              Core team recruitment.</p>
            <p>
              Artwork release, and an introduction to the story behind the collection.
            </p>
            <p>
              Release of our Whitepaper, packed with all of the relevant details.
            </p>
            <p>
              Video promotion, highlighting our visual excellence.
            </p>
            <p>
              Smart Contracts, Backend Infastructure, Unity Integration.
            </p>
            <p>
              Development of the website, the central hub for our community.</p>
            <p>
              Promotion of social media channels.
            </p>
            <p>
              Introduction of $DLZ token and useability.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className='secondSection'>
            <h4>The Action</h4>
            <p>
              Listing our native tokens on Coin Market Cap and Coin Gecko.
            </p>
            <p>
              Website launch.</p>
            <p>
              Primary marketing campaign and Inital gangler NFT Pre-Sale</p>
            <p>
              Launch of our P2E game with PVP attack mode.</p>
            <h4>The Visibility</h4>
            <p>
              Listing NFTs on secondary marketplaces.</p>
            <p>
              Comprehensive marketing campaign to improve visibility.
            </p>
            <p>Release 1st map.</p>
          </Col>
          <Col>
          <div className="rightImg">
            <img src={Babymama} alt="" />
          </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className="leftImg">
              <img src={LeaderF} alt="" />
            </div>
          </Col>
          <Col className='thirdSection'>
            <h4>The Growth</h4>
            <p>Release cartel wars game mode.</p>
            <p>Release of our internal marketplace. </p>
            <p>Release Cartel Tournaments.</p>
            <p>Introduction of new characters to mitigate supply of NFT’s.</p>
            <h4>The Future</h4>
            <p>Start the development of our expansion.</p>
            <p>Listing on CEX.</p>
          </Col>
        </Row>
      </div>
    </div>
  )
}
