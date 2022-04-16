import Carousel from "react-multi-carousel";
import React, { useRef } from "react";
import "./clothing.css";
import Cap from '../../assets/img/cap.png'
import Shoe from '../../assets/img/shoe.png'
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io'
import {HiOutlineDownload} from 'react-icons/hi'
import Babythief from '../../assets/img/Characters/png/babythief.png'
import Leader from '../../assets/img/Characters/png/leader.png'
import { Col, Row } from "react-bootstrap";
export default function Clothing() {
  const MyCarousel = useRef();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
 
  const  items= [
    {
      title: 'Headwear',
      img: Cap
    },
    {
      title: 'Footwear',
      img: Shoe
    },
    {
      title: 'Top',
      img: ''
    },
    {
      title: 'Bottom',
      img: ''
    },
    {
      title: 'Accessory',
      img: ''
    },
    {
      title: 'Accessory',
      img: ''
    },
    {
      title: 'Accessory',
      img: ''
    },
    {
      title: 'Accessory',
      img: ''
    },
    {
      title: 'Accessory',
      img: ''
    },
    {
      title: 'Accessory',
      img: ''
    },
    {
      title: 'Accessory',
      img: ''
    },
    {
      title: 'Accessory',
      img: ''
    },
  ]
  function handleNext() {
    const nextSlide = MyCarousel.current.state.currentSlide + 1;
    MyCarousel.current.next();
    MyCarousel.current.goToSlide(nextSlide);
  }
  function handlePrev() {
    const prevSlide = MyCarousel.current.state.currentSlide - 1;
    MyCarousel.current.previous();
    MyCarousel.current.goToSlide(prevSlide);
  }
  return (
    <div className="clothingCont ">
      <div>
        <h5 className="highlight-text">Create Your Own Swag</h5>
        <p>
          Download the png template of the clothing or accessory you wish to
          create Upload your png artwork, Test to see how it will look
        </p>
        <p>* You cannot use brand names that you you do not have rights to *</p>
        <p>Sell your creation on Store and recieve a % of all sales</p>
        <p>Set only for you or your cartel memebrs.</p>
      </div>
      <div className="clothingCarousel mt-5">
      <div className='prev__btn'>
        <IoIosArrowDropleft onClick={handlePrev} />
      </div>
      <Carousel
        autoPlay={false}
        ref={MyCarousel}
        responsive={responsive}
        
      >
        {
          items.map((item, index)=>{
            return (
              <div key={index} className='myslider'>
                <p className='mb-1'>{item.title}</p>
                <div className="imgCont">
                  {
                    item.img ? <img src={item.img} alt="" />
                    : 'Upload'
                  }
                </div>
                <div className='d-flex justify-content-center mt-1' style={{columnGap:'5px'}}>
                  <HiOutlineDownload className='reset_svg'/>
                  <p>Reset</p>
                </div>
              </div>
            )
          })
        }
      </Carousel>
      <div className='next__btn'>
        <IoIosArrowDropright onClick={handleNext} />
      </div>
      </div>
      <Row className='bottom mt-5'>
        <Col md={6}>
          <div className="img_cont">
          <img src={Leader} alt="" />
          </div>
        </Col>
        <Col md={6}>
          <div className="img_cont">
          <img src={Babythief} alt="" />
          </div>
        </Col>
      </Row>
    </div>
  );
}
