import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import "./advertise.css";
import { IoMdWallet } from "react-icons/io";
import { MyContext } from "../../App";
import Billboard from "../../components/Advertise/Billboard";
import Clothing from "../../components/Advertise/Clothing";
export default function Advertise() {
  const { advertise, setAdvertise } = useContext(MyContext);
  return (
    <div className="advertiseCont">
      <div className="container">
        <Row className="advertiseCont__top">
          <Col md={6}>
            <div className="d-flex align-items-center justify-content-between ">
              <h1>Advertise</h1>
              <p
                className={advertise === "billboard" && "selected"}
                onClick={() => setAdvertise("billboard")}
              >
                Bill Boards
              </p>
              <p
                className={advertise === "clothing" && "selected"}
                onClick={() => setAdvertise("clothing")}
              >
                Clothing
              </p>
            </div>
          </Col>
          <Col md={6} className="d-flex align-items-center justify-content-end">
            <div>
              <IoMdWallet />
            </div>
            <div>
              <p>GOTM Available</p>
              <p>6789.12</p>
            </div>
          </Col>
        </Row>

        {/* Bill board and  clothing here  */}
        

        {
          advertise === "billboard" &&  <Billboard />
        }
        {
          advertise === "clothing" &&  <Clothing />
        }
      </div>
    </div>
  );
}
