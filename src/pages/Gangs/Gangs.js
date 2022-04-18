import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./gangs.css";
import LeaderF from "../../assets/img/Characters/png/gang_leader_f.png";
import VaultIcon from "../../assets/img/Icon/vault.png";
import PoliceIcon from "../../assets/img/police.png";
import ShieldIcon from "../../assets/img/shield.png";
import PlusIcon from "../../assets/img/plus.png";
import KnifeIcon from "../../assets/img/knief.png";

import Member from "../../assets/img/Characters/png/member.png";
import Thief from "../../assets/img/Characters/png/thief.png";
import Guard from "../../assets/img/Characters/png/guard.png";
import Police from "../../assets/img/Characters/png/police.png";
import Spy from "../../assets/img/Characters/png/Spy.png";

import Item1 from "../../assets/img/Attack_Defence_Items/meat8.png";
import Item2 from "../../assets/img/Attack_Defence_Items/gasmask6.png";
import Item3 from "../../assets/img/Attack_Defence_Items/attackdog2.png";
import Item4 from "../../assets/img/Attack_Defence_Items/poisongas12.png";
import Item5 from "../../assets/img/Attack_Defence_Items/helicopter.png";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";
import ItemSlider from "../../components/ItemSlider/ItemSlider";
export default function Gangs() {
  const [show, setShow] = useState(false);
  return (
    <div className="gangsCont">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <h1>My Gangs</h1>
          <div className="star19">
            <h5>Stars-19 </h5>
            <div>
              <FaStar /> <FaStar /> <FaStar />
            </div>
          </div>
        </div>
        <Row className="section1">
          <Col md={7} className="section1__left">
            <Row className="section1__left__sec1">
              <Col md={6}>
                <div className="item">
                  <p>Gang Leader Name</p>
                </div>
              </Col>
              <Col md={6}>
                <div className="item d-flex align-items-center px-2">
                  <p>01/05</p>
                  <div className="arrowCont">
                      <IoIosArrowDropleft className='arrow' />
                      <IoIosArrowDropright className='arrow' />
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="section1__left__sec2" style={{rowGap:'20px'}}>
              <Col md={6}>
                <div className="item1">
                  <img style={{ height: "250px" }} src={LeaderF} alt="" />
                </div>
              </Col>
              <Col md={6}>
                <div className="item2">
                  <div className="item">
                    <p className="highlight-text">City</p>
                    <p>London</p>
                  </div>
                  <div className="item">
                    <p className="highlight-text">Plot</p>
                    <p>#301</p>
                  </div>
                  <div className="item">
                    <p className="highlight-text">Population</p>
                    <p>10/19</p>
                  </div>
                  <div className="item">
                    <p className="highlight-text">Status</p>
                    <p>Free</p>
                  </div>
                  <div className="item">
                    <p className="highlight-text">Level</p>
                    <p>3</p>
                  </div>
                  <div className="item">
                    <p className="highlight-text">Gang Points</p>
                    <p>55</p>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="section1__left__sec3">
              <div className="imgCont">
                <img src={KnifeIcon} alt="" />
              </div>
              <div style={{textAlign:'start'}}>
                <div className="mb-1" >
                  <button className="green-btn">Pvp</button>
                  <button className="green-btn">Cartel</button>
                  <button className="red-btn">Tournament</button>
                </div>
                <div>
                  <button className="yellow-btn">Heis</button>
                  <button className="yellow-btn">Raid</button>
                  <button className="yellow-btn">Other</button>
                </div>
              </div>
            </div>
          </Col>
          <Col md={5} className="section1__right">
            <div className="item">
              <div className="imgCont">
                <img src={VaultIcon} alt="" />
              </div>
              <div className="earning">
                {show ? (
                  <div className="hide" onClick={() => setShow(false)}>
                    Hide
                  </div>
                ) : (
                  <div className="hide" onClick={() => setShow(true)}>
                    Show
                  </div>
                )}

                <h5>Daily Earning $DLZ</h5>
                <h5>{show ? "855.00" : "****"}</h5>
              </div>
            </div>

            <div className="item">
              <div className="imgCont">
                <img src={PoliceIcon} alt="" />
              </div>
              <div className="text-start ">
                <div className="d-flex mb-2 ">
                  <p>Wanted Level:</p>
                  <div className="wantedLevel">
                    <FaStar /> <FaStarHalfAlt />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                  </div>
                </div>
                <div>
                  <div>
                    <button className="yellow-btn">Pay Police</button>
                    <button className="yellow-btn">Pay 4 all</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="item text-start">
              <div className="imgCont">
                <img src={ShieldIcon} alt="" />
              </div>
              <div>
                <div className="d-flex mb-2 dateTime">
                  <div>
                    <p>03</p>
                    <p>Days</p>
                  </div>
                  <div>
                    <p>05</p>
                    <p>Hours</p>
                  </div>
                  <div>
                    <p>15</p>
                    <p>Minutes</p>
                  </div>
                  <div>
                    <p>45</p>
                    <p>Seconds</p>
                  </div>
                </div>
                <div>
                  <button className="yellow-btn">Hire Guards</button>
                  <button className="yellow-btn">Pay 4 all</button>
                </div>
              </div>
            </div>
            <div className="item text-start">
              <div className="imgCont">
                <img src={PlusIcon} alt="" />
              </div>
              <div>
                <div className="regenerate">
                  <p>80%</p>
                </div>
                <div>
                  <button className="yellow-btn">Regenerate</button>
                  <button className="yellow-btn">Pay 4 all</button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div>
          <Row className="justify-content-between" style={{rowGap:'15px'}} >
            <Col md={5}>
              <p className='titleArea'>Member 3/12</p>
              <ItemSlider
                showItem={3}
                items={[
                  { img: Member },
                  { img: Member },
                  { img: Member },
                ]}
              />
            </Col>
            <Col md={5}>
            <p className='titleArea'>Available</p>
              <ItemSlider
                showItem={2}
                items={[
                  { img: Member },
                  { img: "" },
                ]}
              />
            </Col>
          </Row>
        </div>
        <div>
          <Row className="justify-content-between" style={{rowGap:'15px'}} >
            <Col md={5}>
              <p className='titleArea'>Thieves 2/2</p>
              <ItemSlider
                showItem={3}
                items={[
                  { img: Thief },
                  { img: Thief },
                ]}
              />
            </Col>
            <Col md={5}>
            <p className='titleArea'>Available</p>
              <ItemSlider
                showItem={2}
                items={[
                  { img: Thief },
                  { img: "" },
                ]}
              />
            </Col>
          </Row>
        </div>
        <div>
          <Row className="justify-content-between" style={{rowGap:'15px'}} >
            <Col md={5}>
              <p className='titleArea'>Guards 2/2</p>
              <ItemSlider
                showItem={3}
                items={[
                  { img: Guard },
                  { img: Guard },
                  { img: '' },
                ]}
              />
            </Col>
            <Col md={5}>
            <p className='titleArea'>Available</p>
              <ItemSlider
                showItem={2}
                items={[
                  { img: "" },
                  { img: "" },
                ]}
              />
            </Col>
          </Row>
        </div>
        <div>
          <Row className="justify-content-between" style={{rowGap:'15px'}} >
            <Col md={5}>
              <p className='titleArea'>Police 2/2</p>
              <ItemSlider
                showItem={3}
                items={[
                  { img: Police },
                  { img: Police },
                  { img: '' },
                ]}
              />
            </Col>
            <Col md={5}>
            <p className='titleArea'>Available</p>
              <ItemSlider
                showItem={2}
                items={[
                  { img: "" },
                  { img: "" },
                ]}
              />
            </Col>
          </Row>
        </div>
        <div>
          <Row className="justify-content-between" style={{rowGap:'15px'}} >
            <Col md={5}>
              <p className='titleArea'>Spies 1/1</p>
              <ItemSlider
                showItem={3}
                items={[
                  { img: Spy },
                ]}
              />
            </Col>
            <Col md={5}>
            <p className='titleArea'>Available</p>
              <ItemSlider
                showItem={2}
                items={[
                  { img: "" },
                  { img: "" },
                ]}
              />
            </Col>
          </Row>
        </div>
        <div>
          <Row className="justify-content-between" style={{rowGap:'15px'}} >
            <Col md={5}>
              <p className='titleArea'>Attack Items 2/7</p>
              <ItemSlider
                showItem={3}
                items={[
                  { img: Item1 },
                  { img: Item2 },
                  { img: '', alt:'Earn 20 Stars' },
                ]}
              />
            </Col>
            <Col md={5}>
            <p className='titleArea'>Available</p>
              <ItemSlider
                showItem={2}
                items={[
                  { img: "" },
                  { img: "" },
                ]}
              />
            </Col>
          </Row>
        </div>
        <div>
          <Row className="justify-content-between" style={{rowGap:'15px'}} >
            <Col md={5}>
              <p className='titleArea'>Defence Items 2/7</p>
              <ItemSlider
                showItem={3}
                items={[
                  { img: Item3 },
                  { img: Item4 },
                  { img: '', alt:'Earn 20 Stars' },
                ]}
              />
            </Col>
            <Col md={5}>
            <p className='titleArea'>Available</p>
              <ItemSlider
                showItem={2}
                items={[
                  { img: "" },
                  { img: "" },
                ]}
              />
            </Col>
          </Row>
        </div>
        <div>
          <Row className="justify-content-between" style={{rowGap:'15px'}} >
            <Col md={5}>
              <p className='titleArea'>Travel Items 1/3</p>
              <ItemSlider
                showItem={3}
                items={[
                  { img: Item5 },
                  { img: '' },
                ]}
              />
            </Col>
            <Col md={5}>
            <p className='titleArea'>Available</p>
              <ItemSlider
                showItem={2}
                items={[
                  { img: "" },
                  { img: "" },
                ]}
              />
            </Col>
          </Row>
        </div>
        <button className="green-btn mt-3" style={{width:'100%', color:'white'}}>Save</button>
      </Container>
    </div>
  );
}
