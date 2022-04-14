import React from "react";
import "./swag8.css";
import Shoe from "../../assets/img/Icon/shoe.png";
import BabyThief from "../../assets/img/Characters/png/babythief.png";
import { Col, Row } from "react-bootstrap";

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
      <div>
        <h1>S.W.A.G</h1>
        <p>Customize and upgrade your Gang Leader NFT’s</p>
      </div>
      <div>
        <p>GOTM Available</p>
        <p>6789.12</p>
      </div>

      <div>
        <Row>
          <Col md={6}>
            <div className="leftSection">
              <div>
                <p>F Gang Leader #101</p>
                <p>Change Name</p>
              </div>
              <div>
                <img src={BabyThief} alt="" />
              </div>
              <div>
                <h4>Level: 10 $DLZ Per Day: 50 </h4>
                <h6>Upgrade Requirements:</h6>
                <p>Level 3 Sunglasses</p>
                <p>Level 3 Hat</p>
                <p>Level 3 Shoes</p>
              </div>
              <div>
                <h5>My Inventory</h5>
                <div>
                  <Row>
                    <Col md={2}>
                      <div>
                        <img src={Shoe} alt="" />
                      </div>
                    </Col>
                  </Row>
                </div>
                <div>
                  <button>Select</button>
                  <button>Apply</button>
                  <button>Save</button>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div>
              <p>Filter</p>
              <p>Level</p>
              <p>Type</p>
              <input type="text" placeholder="Search User Created ID" />
            </div>
            <div>
              <p>Hair Style</p>
              <Row>
                {items.map((item, index) => {
                  return (
                    <Col md={3}>
                      <div>
                        <img src={item.img} alt="" />
                      </div>
                      <div>
                        <p>{item.amount} GOTM</p>
                        <p>Level: ${item.level}</p>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>
            <div>
              <p>Hair Style</p>
              <Row>
                {items.map((item, index) => {
                  return (
                    <Col md={3}>
                      <div>
                        <img src={item.img} alt="" />
                      </div>
                      <div>
                        <p>{item.amount} GOTM</p>
                        <p>Level: ${item.level}</p>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>
            <div>
              <p>Hair Style</p>
              <Row>
                {items.map((item, index) => {
                  return (
                    <Col md={3}>
                      <div>
                        <img src={item.img} alt="" />
                      </div>
                      <div>
                        <p>{item.amount} GOTM</p>
                        <p>Level: ${item.level}</p>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>
            <div>
              <p>Hair Style</p>
              <Row>
                {items.map((item, index) => {
                  return (
                    <Col md={3}>
                      <div>
                        <img src={item.img} alt="" />
                      </div>
                      <div>
                        <p>{item.amount} GOTM</p>
                        <p>Level: ${item.level}</p>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>
            <div>
              <button>Apply</button>
              <button>Select</button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
