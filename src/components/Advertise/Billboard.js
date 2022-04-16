import React from "react";
import { Col, Row } from "react-bootstrap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Billboard1 from "../../assets/img/Buildings/billboard.png";
import Billboard2 from "../../assets/img/Buildings/billboard2.png";
import Billboard3 from "../../assets/img/Buildings/billboard3.png";
import "./billboard.css";
import { FiSearch } from "react-icons/fi";
export default function Billboard() {
  const billboards = [
    {
      img: Billboard1,
      id: "#89",
      rate: "100 Per Week",
      size: "A",
    },
    {
      img: Billboard2,
      id: "#90",
      rate: "100 Per Week",
      size: "B",
    },
    {
      img: Billboard3,
      id: "#90 #91 #92",
      rate: "200 Per Week",
      size: "A, B, C",
    },
    {
      img: "",
      id: "#90 #91 #92",
      rate: "200 Per Week",
      size: "A, B, C",
    },
    {
      img: "",
      id: "#90 #91 #92",
      rate: "200 Per Week",
      size: "A, B, C",
    },
  ];
  return (
    <div className="billboardCont">
      <Row className="mb-2 justify-content-between">
        <Col md={6}>
        <p className='mb-1'>Your oppurtunity to promote your image to the gangs of the meta</p>
        </Col>
        <Col md={6}>
        <p className='text-end'>Search Bill Board #No</p>
        </Col>
      </Row>
      <Row className="mb-3 justify-content-between" style={{rowGap:'10px'}}>
        <Col md={4} className="d-flex" style={{ columnGap: "20px" }}>
          <h5 className="highlight-text">City: Metalanche</h5>
        </Col>
        <Col md={4} className="d-flex justify-content-center">
          <p>Previous</p>
          <div className="d-flex mx-3">
            <div className="arrow">
              <IoIosArrowBack />
            </div>
            <div className="arrow">
              <IoIosArrowForward />
            </div>
          </div>
          <p>Back</p>
        </Col>
        <Col md={4} className='inputContainer'>
          <input className='float-end' type="text" placeholder="89" />
          <FiSearch className='searchIcon' />
        </Col>
      </Row>
      
      <div>
        <ul>
          <li>Select the billboards you would like to advertise on.</li>
          <li>Select an available start date and duration.</li>
          <li>
            Upload your artwork (png / jpeg / gif) Use the size templates
            provided.
          </li>
          <li>
            *Artwork will be analysed, (NSFW), once accepted your order status
            will be set to confirmed.
          </li>
        </ul>
      </div>
      <div>
        <p className="mb-2" style={{ fontWeight: "700" }}>
          Filter (Available) (All)
        </p>
        <Row className="item">
          {billboards.map((item, index) => {
            return (
              <Col sm={5} md={2}>
                <div className="imgCont">
                  <img src={item.img} alt="" />
                </div>
                <div className="contentCont">
                  <p>Bill Board #89</p>
                  <p>Rate: {item.rate}</p>
                  <p>Size {item.size}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
      <div>
        <button className="yellow-btn">ADD</button>
        <button className="outline-btn">UPLOAD</button>
        <button className="outline-btn">RENT</button>
        <button className="outline-btn">TEMPLATE</button>
      </div>
      <div className="bottomPart">
        <h5 className="bg">4500</h5>
        <h5 className="bg">GOTM</h5>
        <button className="green-btn">Order</button>
      </div>
    </div>
  );
}
