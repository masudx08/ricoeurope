import React from "react";
import { Col, Row } from "react-bootstrap";
import "./vault.css";
import VaultImg from "../../assets/img/Icon/vault.png";

export default function Vault() {
  return (
    <div className="vaultCont">
      <div className="container">
        <h1 className="text-center">Vaults</h1>
        <div className="vault__topSection">
          <div className='imgCont'>
            <img src={VaultImg} alt="" />
          </div>
          <div>
            <button className="green-button">Claim All</button>
            <p>6789.12 $DLZ</p>
          </div>
        </div>
        <Row className="align-items-center">
          <Col md={5}>
            <h5 className="highlight-text">WALLET</h5>
            <div className="left__section">
              <div className="amount">
                <p>5,000 $DLZ</p>
              </div>
              <div className="btnCont">
                <button className="yellow-btn">Claim</button>
                <button className="green-btn">Stake</button>
              </div>
            </div>
          </Col>
          <Col md={7}>
            <div className="right__section">
              <p>Income frome staking characters, and attacking rivals</p>
            </div>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col md={5}>
            <h5 className="highlight-text">AMENITY</h5>
            <div className="left__section">
              <div className="amount">
                <p>2,059 $DLZ</p>
              </div>
              <div className="btnCont">
                <button className="yellow-btn">Transfer</button>
                <button className="yellow-btn">Stake</button>
                <button className="green-btn">Claim</button>
              </div>
            </div>
          </Col>
          <Col md={7}>
            <div className="right__section">
              <p>Income from land plots and cartel</p>
            </div>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col md={5}>
            <h5 className="highlight-text">HODL</h5>
            <div className="left__section">
              <div className="amount">
                <p>10,080 $DLZ</p>
              </div>
              <div className="btnCont">
                <button className="yellow-btn">Transfer</button>
                <button className="yellow-btn">Stake</button>
                <button className="green-btn">Claim</button>
              </div>
            </div>
          </Col>
          <Col md={7}>
            <div className="right__section">
              <p>All secondary NFT sales are subject to a 5% Tax</p>
              <p>
                GEN_O -50% of the collected taxes are given back to the
                strongest hodlers.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col md={5}>
            <h5 className="highlight-text">STAKED</h5>
            <div className="left__section" style={{ alignItems: "flex-end" }}>
              <div className="amount">
                <p>100,080 $DLZ</p>
              </div>
              <div className="btnCont">
                <button className="yellow-btn">View</button>
              </div>
            </div>
          </Col>
          <Col md={7}>
            <div className="right__section">
              <p>
                GEN_1 - 40% of the collected taxes are given back to the
                strongest hodiers.
              </p>
              <p>The other 50% is paid into the amentity pool</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
