import React, { useRef } from "react";
import "./itemslider.css";
import Carousel from "react-multi-carousel";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

export default function ItemSlider({ items, showItem }) {
  const MyCarousel = useRef();
  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: showItem,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: showItem,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
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
    <div>
      <div className="ItemSliderCarousel">
        <div className="prev__btn">
          <IoIosArrowDropleft onClick={handlePrev} />
        </div>
        <Carousel autoPlay={false} ref={MyCarousel} responsive={responsive}>
          {items.map((item, index) => {
            return (
              <div key={index} className="myslider">
                <div className="imgCont">
                  {item.img ? <img src={item.img} alt="" /> : item.alt ? item.alt : ''}
                </div>
              </div>
            );
          })}
        </Carousel>
        <div className="next__btn">
          <IoIosArrowDropright onClick={handleNext} />
        </div>
      </div>
    </div>
  );
}
