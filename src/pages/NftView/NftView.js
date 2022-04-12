import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './nftview.css'
import Leader from '../../assets/img/Characters/png/leader.png'
export default function NftView() {
  const inventories = [
    {}, {}, {}, {}, {}, {}
  ]

  return (
    <div className='nftviewCont'>
      <div className="container">
        <p className='highlight-text mb-4' style={{fontSize:'20px'}}>My NFT</p>
        <Row className='rowCont'>
          <Col md={6} className='leftbox'>
            <img src={Leader} alt="" />
          </Col>
          <Col md={6} className='rightbox'>
            <div className="section1">
              <div>
                <p>Type:</p>
                <p>Gang Leader</p>
              </div>
              <div>
                <p>Generation:</p>
                <p>0</p>
              </div>
              <div>
                <p>Level:</p>
                <p>5</p>
              </div>
            </div>
            <div className="section2">
              <div className='highlight-text mb-3'> <p>Trait</p> <p>Type</p> <p>Level</p></div>
              <div> <p>Hair Style</p> <p>Black</p> <p>2</p></div>
              <div> <p>Shoes</p> <p>Pumps</p> <p>5</p></div>
              <div> <p>Accessory</p> <p>n/a</p> <p></p></div>
              <div> <p>Headwear</p> <p>n/a</p> <p></p></div>
              <div> <p>Eye Colour</p> <p>Blue</p> <p>3</p></div>
              <div> <p>Trait6</p> <p></p> <p></p></div>
              <div> <p>Trait7</p> <p></p> <p></p></div>
              <div> <p>Trait8</p> <p></p> <p></p></div>
              <div> <p>Trait9</p> <p></p> <p></p></div>
              <div> <p>Trait10</p> <p></p> <p></p></div>
            </div>
            <div className="section2">
              <div> <p>Breed Count</p> <p></p> <p>2</p></div>
              <div> <p>Name</p> <p></p> <p>5</p></div>
            </div>
          </Col>
        </Row>
        <button className="mybtn mybtn-p mt-4 savebtn" style={{minWidth:'200px'}}>Return</button>
      </div>
    </div>
  )
}
