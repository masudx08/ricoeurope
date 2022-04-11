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
export default function Footer() {
  return (
    <div className='footerCont'>
      <Row>
        <Col md={4}>
          <div>
            <p>Our mission is to take nft's, gaming and the metaverse to the next level integrating with unity to create an exhilarating game for everyone to participate in and enjoy.</p>
            <div>
              <p>Whitepaper</p>
              <p>Team</p>
              <p>Audit</p>
            </div>
          </div>
        </Col>
        <Col md={4}>
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
          <h5>Contracts</h5>
          <div>
            <div>
              <input type="text" value='0x7....4b9e' /> GOTM
            </div>
            <div>
              <input type="text" value='0x7....4b9e' /> DLZ
            </div>

          </div>
        </Col>
        <Col md={4}>
          <h5>Subscribe</h5>
          <div>
            <input type="text" placeholder='Enter your email' />
          </div>
          <div>
            <img src={CMC} alt="" />
            <img src={Poweredby} alt="" />
            <img src={Cartoon} alt="" />
          </div>
        </Col>
      </Row>
    </div>
  )
}
