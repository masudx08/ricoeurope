import React from "react";
import "./land.css";
import LandImg from "../../assets/img/Buildings/land.png";
import Building from "../../assets/img/Buildings/building.png";
import LuxuryItem from "../../assets/img/Buildings/luxuryitem.png";
import Thief from "../../assets/img/Characters/png/thief.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Col, Row } from "react-bootstrap";
export default function Land() {
  return (
    <div className="landCont">
      <div className="container">
        <div className='d-flex justify-content-between'>
          <div >
            <h1 className='text-start mb-3'>My Lands</h1>
            <div className='topSection'>
              <p>01/05</p>
              <IoIosArrowBack className='arrow' /> <IoIosArrowForward className='arrow' />
              <p className='plot'>PLOT #101</p>
              <p>City: MetaCityName1</p>
              <button className="yellow-btn">View</button>
            </div>
          </div>
          <div>
            <img src={LandImg} alt="" />
          </div>
        </div>
        <div className="mysection">
          <Row>
            <Col md={6}>
              <div className="leftSection">
                <h5 className="text-start">Leaders 2/3</h5>
                <Row className="gap-3">
                  <Col md={3}>
                    <div className="imgCont">
                      <img src={Thief} alt="" />
                      <p>Expand View</p>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="imgCont">
                      <img src={Thief} alt="" />
                      <p>Expand View</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={6}>
              <div className="rightSection">
                <h5 className="text-start">Available</h5>
                <Row className="gap-3">
                  <Col md={3}>
                    <div className="imgCont">
                      <img src={Thief} alt="" />
                      <p>Expand View</p>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="imgCont">
                      <img src={Thief} alt="" />
                      <p>Expand View</p>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="imgCont">
                      <img src={Thief} alt="" />
                      <p>Expand View</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mysection">
          <Row className="align-items-end">
            <Col md={6}>
              <div className="leftSection">
                <h5 className="text-start">Building 1/1</h5>
                <Row className="gap-3">
                  <Col md={3}>
                    <div className="imgCont">
                      <img src={Building} alt="" />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={6}>
              <div className="rightSection">
                <Row className="gap-3">
                  <Col md={3}>
                    <div className="imgCont"></div>
                  </Col>
                  <Col md={3}>
                    <div className="imgCont"></div>
                  </Col>
                  <Col md={3}>
                    <div className="imgCont"></div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mysection">
          <Row className="align-items-end">
            <Col md={6}>
              <div className="leftSection">
                <h5 className="text-start">Luxury Item 1/2</h5>
                <Row className="gap-3">
                  <Col md={3}>
                    <div className="imgCont">
                      <img src={LuxuryItem} alt="" />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={6}>
              <div className="rightSection">
                <Row className="gap-3">
                  <Col md={3}>
                    <div className="imgCont"></div>
                  </Col>
                  <Col md={3}>
                    <div className="imgCont"></div>
                  </Col>
                  <Col md={3}>
                    <div className="imgCont"></div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <div className='d-flex justify-content-between'>
          <div>
            <button className='yellow-btn'>Select</button>
            <button className='yellow-btn'>Remove</button>
            <button className='green-btn'>Save</button>
          </div>
          <div>
            <button className='yellow-btn'>Select</button>
            <button className='yellow-btn' style={{width: '180px'}}>Add To Land</button>
          </div>
        </div>
      </div>
    </div>
  );
}
