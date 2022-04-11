import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './footer.css'
import Discord from '../../assets/img/Icon/discord.png'
import Telegram from '../../assets/img/Icon/telegram.png'
import Twitter from '../../assets/img/Icon/twitter.png'
import Facebook from '../../assets/img/Icon/facebook.png'
import Youtube from '../../assets/img/Icon/youtube.png'
import Instagram from '../../assets/img/Icon/instagram.png'
import CMC from '../../assets/img/Icon/coinmarketcap.png'
import Poweredby from '../../assets/img/Icon/poweredby.png'
import Cartoon from '../../assets/img/Icon/cartoon.png'
import {IoMdWallet} from 'react-icons/io'
import {FaPaperPlane} from 'react-icons/fa'
import Logo from '../../assets/img/Logo/logo.png'
export default function Footer() {
  return (
    <div className='footerCont'>
     <div className='topFooter' style={{width: '120px'}}>
        <img src={Logo} alt="" />
      </div>
      <Row className='m-auto justify-content-center' style={{columnGap:'30px'}}>
      
        <Col md={3} className='section1'>
          <div>
            <p>Our mission is to take nft's, gaming and the metaverse to the next level integrating with unity to create an exhilarating game for everyone to participate in and enjoy.</p>
            <div className='mt-5'>
              <p>Whitepaper</p>
              <p>Team</p>
              <p>Audit</p>
            </div>
          </div>
        </Col>
        <Col md={3} className='section2'>
          <h5>Connect</h5>
          <p>info@gangsofthemeta.com</p>
          <div className="socialIcon">
            <img src={Discord} alt="" />
            <img src={Telegram} alt="" />
            <img src={Twitter} alt="" />
            <img src={Facebook} alt="" />
            <img src={Youtube} alt="" />
            <img src={Instagram} alt="" />
          </div>
          <h5 className='mt-4'>Contracts</h5>
          <div>
            <div>
              <input type="text" value='0x7....4b9e' /><IoMdWallet /> GOTM
            </div>
            <div>
              <input type="text" value='0x7....4b9e' /><IoMdWallet /> DLZ
            </div>

          </div>
        </Col>
        <Col md={3} className='section3'>
          <h5 className='mb-5'>Subscribe</h5>
          <div style={{position: 'relative'}}>
            <input type="text" placeholder='Enter your email' /> <FaPaperPlane />
          </div>
          <Row className='poweredby'>
           <Col md={5}>
           <img  src={CMC} alt="" />
           </Col>
           <Col md={5}>
           <img  src={Poweredby} alt="" />
           </Col>
           <Col md={2}>
           <img src={Cartoon} alt="" />
           </Col>
            
            
          </Row>
        </Col>
      </Row>
      <div className='footer_foot'>
        <p>Copyright©2022.All rights reserved</p>
        <p>Terms and Conditions</p>
      </div>
    </div>
  )
}
