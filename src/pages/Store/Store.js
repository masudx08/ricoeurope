import React from "react";
import { Col, Row } from "react-bootstrap";
import "./store.css";
import Babymama from '../../assets/img/Characters/png/babymama.png'
import Thief from '../../assets/img/Characters/png/thief.png'
import Mansion from '../../assets/img/Characters/png/gang_leader_m.png'
import Plot from '../../assets/img/Characters/png/member.png'
import Police from '../../assets/img/Characters/png/police.png'
import Coin from '../../assets/img/Icon/coin.png'
export default function Store() {
  const datas = [
    {
      img: Babymama,
      name: "Baby mama",
      id: 101,
      breedCount: 3,
      amount: 5.49,
    },
    {
      img: Thief,
      name: "Thief",
      id: 878,
      level: 8,
      amount: 3.3,
    },
    {
      img: Mansion,
      name: "Mansion",
      id: 878,
      accomodation: " ",
      amount: 3.3,
    },
    {
      img: Plot,
      name: "Plot",
      id: 889,
      makeover: " ",
      amount: 3.3,
    },
    {
      img: Police,
      name: "Police",
      id: 878,
      level: 8,
      amount: 3.3,
    },
    
    {
      img: Babymama,
      name: "Baby mama",
      id: 101,
      breedCount: 3,
      amount: 5.49,
    },
    {
      img: Thief,
      name: "Thief",
      id: 878,
      level: 8,
      amount: 3.3,
    },
    {
      img: Mansion,
      name: "Mansion",
      id: 878,
      accomodation: " ",
      amount: 3.3,
    },
    {
      img: Plot,
      name: "Plot",
      id: 889,
      makeover: " ",
      amount: 3.3,
    },
    {
      img: Police,
      name: "Police",
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
           <div className='text-end'>
           <p>Search Land Plot No Make Offer</p>
            <input type="text" placeholder="889" />
           </div>
          </Col>
        </Row>
        <div className=" filterArea">
          <p className="selectedFilter">Filter</p>
          <p>Type</p>
          <p>Level</p>
          <p>City</p>
          <p>Character</p>
          <p>Attack</p>
          <p>Defence</p>
          <p>Travel</p>
          <p>Luxury</p>
          <p className="selectedFilter">Sort By</p>
        </div>
        <div>
          <Row style={{rowGap:'50px',  margin:'auto'}}>
            {
              datas.map((data, index)=>{
                return (
                  <Col className='mycol' md={2} key={index}>
                    <div className='imgPart'>
                      <img src={data.img} alt="" />
                    </div>
                    <div className='contentPart'>
                      <p>{data.name} {data.id && `#${data.id}`}</p>
                      <p style={{fontSize:'15px'}}>
                        {data.breedCount && `Breed Count : ${data.breedCount}`}
                        {data.level && `Level : ${data.level}`}
                        {data.accomodation && `Accomodation : ${data.accomodation}`}
                        {data.makeover && `Make Over : ${data.makeover}`}
                      </p>
                      <div className='d-flex align-items-center' style={{fontSize:'15px'}}>
                        <img  style={{height:'18px',  marginRight:'5px'}} src={Coin} alt="" />
                        <p>{data.amount}</p>
                      </div>
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
