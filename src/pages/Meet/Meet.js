import React from "react";
import "./meet.css";
import Leader from "../../assets/img/Characters/png/leader.png";
import { Col, Row } from "react-bootstrap";

export default function Meet() {
  const team = [
    {
      name: "Chris",
      img: Leader,
      title: "Founder",
      description: "Visonary and Strategic Thinker",
    },
    {
      name: "Erickson",
      img: Leader,
      title: "2D Artist",
      description: "",
    },
    {
      name: "Lee",
      img: Leader,
      title: "Full Stack  Developer",
      description: "",
    },
    {
      name: "Raf",
      img: Leader,
      title: "Video Animation, Visual Effects",
      description: "",
    },
    {
      name: "Robert",
      img: Leader,
      title: "3D Modeling, Environment Designer",
      description: "",
    },
  ];
  return (
    <div className="meetCont">
      <div className="myContainer">

      <div >
        <h1 className="text-center">MEET THE TEAM</h1>
      </div>
      <div>
          {team.map((item, index) => {
            return (
              <div key={index} className='mt-4'>
                <div>
                  <p className="highlight-text">{item.name}</p>
                </div>
                <Row  className='teamRow'>
                <Col md={4}>
                  <div className="imgPart">
                  <img src={item.img} alt="" />
                  </div>
                </Col>
                <Col md={8}>
                  <div className="contentPart">
                    <p className='m-0 mb-1'>{item.title}</p>
                    <p className='m-0'>{item.description}</p>
                  </div>
                </Col>
              </Row>
              </div>
            );
          })}
      </div>
      </div>
    </div>
  );
}
