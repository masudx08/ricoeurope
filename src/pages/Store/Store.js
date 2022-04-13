import React from "react";
import { Col, Row } from "react-bootstrap";
import "./store.css";

export default function Store() {
  const datas = [
    {
      img: "",
      name: "Baby mama",
      id: 101,
      breedCount: 3,
      amount: 5.49,
    },
    {
      img: "",
      name: "Thief",
      id: 878,
      level: 8,
      amount: 3.3,
    },
    {
      img: "",
      name: "Mansion",
      id: 878,
      accomodation: "",
      amount: 3.3,
    },
    {
      img: "",
      name: "Plot",
      id: 889,
      makeover: "",
      amount: 3.3,
    },
    {
      img: "",
      name: "Thief",
      id: 878,
      level: 8,
      amount: 3.3,
    },
    {
      img: "",
      name: "Baby mama",
      id: 101,
      breedCount: 3,
      amount: 5.49,
    },
    {
      img: "",
      name: "Thief",
      id: 878,
      level: 8,
      amount: 3.3,
    },
    {
      img: "",
      name: "Mansion",
      id: 878,
      accomodation: "",
      amount: 3.3,
    },
    {
      img: "",
      name: "Plot",
      id: 889,
      makeover: "",
      amount: 3.3,
    },
    {
      img: "",
      name: "Thief",
      id: 878,
      level: 8,
      amount: 3.3,
    },
  ];
  return (
    <div className="storeCont">
      <div className="container">
        <Row>
          <Col>
            <h1>STORE</h1>
          </Col>
          <Col>
            <p>Search Land Plot No Make Offer</p>
            <input type="text" placeholder="889" />
          </Col>
        </Row>
        <div className="d-flex">
          <p>Filter</p>
          <p>Type</p>
          <p>Level</p>
          <p>City</p>
          <p>Character</p>
          <p>Attack</p>
          <p>Defence</p>
          <p>Travel</p>
          <p>Luxury</p>
          <p>Sort By</p>
        </div>
        <div>
          <Row>
            {
              datas.map((data, index)=>{
                return (
                  <Col md={2} key={index}>
                    <div>
                      <img src="" alt="" />
                    </div>
                    <div>
                      <p>{data.name} {data.id && `#${data.id}`}</p>
                      <p>
                        {data.breedCount && `Breed Count : ${data.breedCount}`}
                        {data.level && `Level : ${data.level}`}
                        {data.accomodation && `Accomodation : ${data.accomodation}`}
                        {data.makeover && `Make Over : ${data.makeover}`}
                      </p>
                      <p>{data.amount}</p>
                    </div>
                  </Col>
                )
              })
            }
          </Row>
        </div>
      </div>
    </div>
  );
}
