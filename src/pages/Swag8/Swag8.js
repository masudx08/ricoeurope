import React from "react";
import "./swag8.css";
import Shoe from "../../assets/img/Icon/shoe.png";
import BabyThief from "../../assets/img/Characters/png/babythief.png";
import { Col, Row } from "react-bootstrap";
import { IoMdWallet } from "react-icons/io";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export default function Swag8() {
  const items = [
    {
      img: Shoe,
      amount: 50,
      level: 3,
    },
    {
      img: Shoe,
      amount: 50,
      level: 3,
    },
    {
      img: Shoe,
      amount: 50,
      level: 3,
    },
    {
      img: Shoe,
      amount: 50,
      level: 3,
    },
  ];
  return (
    <div className="swag8Cont">
      <div className="container">
        <div className="topCont">
          <div>
            <h1>S.W.A.G</h1>
            <p>Customize and upgrade your Gang Leader NFT’s</p>
            <div className="mt-4 mb-2 d-flex gap-2 align-items-center">
              <p style={{marginRight:'20px'}}>01/03</p>
              <div className='arrow'>
                <IoIosArrowBack />
              </div>
              <div className='arrow'>
                <IoIosArrowForward />
              </div>
            </div>
          </div>
          <div>
            <div className="walletPart">
              <div>
                <IoMdWallet />
              </div>
              <div>
                <p>GOTM Available</p>
                <p className="amount">6789.12</p>
              </div>
            </div>
            <div className="mt-4 mb-2">
              <p className="highlight-text">Create your own</p>
            </div>
          </div>
        </div>

        <div>
          <Row>
            <Col md={5}>
              <div className="leftSection">
                <div className="d-flex justify-content-between  pt-4">
                  <p>F Gang Leader #101</p>
                  <p>Change Name</p>
                </div>
                <div className="imgCont">
                  <img src={BabyThief} alt="" />
                </div>
                <div className="second_section">
                  <h5>
                    <span className="highlight-text">Level:</span> 10{" "}
                    <span className="highlight-text">$DLZ Per Day:</span> 50{" "}
                  </h5>
                  <h6 className="highlight-text">Upgrade Requirements:</h6>
                  <p>Level 3 Sunglasses</p>
                  <p>Level 3 Hat</p>
                  <p>Level 3 Shoes</p>
                </div>
                <div>
                  <div className="third_section">
                    <h5 className="text-start">My Inventory</h5>
                    <Row>
                      {items.map((item, index) => {
                        return (
                          <Col md={3}>
                            <div className="img_bg">
                              <img src={item.img} alt="" />
                            </div>
                          </Col>
                        );
                      })}
                    </Row>
                  </div>
                  <div className="text-start mt-3 pb-3">
                    <button className="outline-btn">Select</button>
                    <button className="yellow-btn">Apply</button>
                    <button className="green-btn">Save</button>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={7}>
              <div className="rightSection">
                <div className="section_one">
                  <div className="d-flex gap-3">
                    <p>Filter</p>
                    <p>Level</p>
                    <p>Type</p>
                  </div>
                  <input type="text" placeholder="Search User Created ID" />
                </div>
                <div>
                  <h5 className="text-start">Hair Style</h5>
                  <Row>
                    {items.map((item, index) => {
                      return (
                        <Col md={3}>
                          <div className="img_bg">
                            <img src={item.img} alt="" />
                          </div>
                          <div className="content_section">
                            <p>{item.amount} GOTM</p>
                            <p>Level: {item.level}</p>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
                <div>
                  <h5 className="text-start">Hair Style</h5>
                  <Row>
                    {items.map((item, index) => {
                      return (
                        <Col md={3}>
                          <div className="img_bg">
                            <img src={item.img} alt="" />
                          </div>
                          <div className="content_section">
                            <p>{item.amount} GOTM</p>
                            <p>Level: {item.level}</p>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
                <div>
                  <h5 className="text-start">Hair Style</h5>
                  <Row>
                    {items.map((item, index) => {
                      return (
                        <Col md={3}>
                          <div className="img_bg">
                            <img src={item.img} alt="" />
                          </div>
                          <div className="content_section">
                            <p>{item.amount} GOTM</p>
                            <p>Level: ${item.level}</p>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
                <div>
                  <h5 className="text-start">Hair Style</h5>
                  <Row>
                    {items.map((item, index) => {
                      return (
                        <Col md={3}>
                          <div className="img_bg">
                            <img src={item.img} alt="" />
                          </div>
                          <div className="content_section">
                            <p>{item.amount} GOTM</p>
                            <p>Level: ${item.level}</p>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
                <div className="text-start">
                  <button className="yellow-btn">Apply</button>
                  <button className="outline-btn">Select</button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
