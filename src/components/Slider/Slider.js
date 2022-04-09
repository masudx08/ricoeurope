import React, { useRef } from 'react'
import './slider.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io'
export default function Slider() {
  const MyCarousel = useRef()
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const sliderData = [
    {
      title: 'Mint',
      description: 'Choose to mint Male or Female gang leaders and a variety of other characters, each with unique abailities within th game.'
    },
    {
      title: 'Stake',
      description: 'Rewards from staking can be claimed every 2 days.'
    },
    {
      title: 'Breed',
      description: 'You can combine up to a maximum of 10 gang members with your baby mama to breed'
    },
    {
      title: 'Mint',
      description: 'Choose to mint Male or Female gang leaders and a variety of other characters, each with unique abailities within th game.'
    },
    {
      title: 'Stake',
      description: 'Rewards from staking can be claimed every 2 days.'
    },
    {
      title: 'Breed',
      description: 'You can combine up to a maximum of 10 gang members with your baby mama to breed'
    },
  ]

  function handleNext() {
    const nextSlide = MyCarousel.current.state.currentSlide + 1;
    MyCarousel.current.next()
    MyCarousel.current.goToSlide(nextSlide)
  }
  function handlePrev() {
    const prevSlide = MyCarousel.current.state.currentSlide - 1;
    MyCarousel.current.previous()
    MyCarousel.current.goToSlide(prevSlide)
  }
  return (
    <div className='carouselCont'>
      <div className='prev__btn'>
        <IoIosArrowDropleft onClick={handlePrev} />
      </div>
      <Carousel ref={MyCarousel} responsive={responsive} className='myslider'>
        {
          sliderData.map((item, index) => {
            return (
              <div key={index} className='item'>
                <h5 className='item__title'>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            )
          })
        }
      </Carousel>
      <div className='next__btn'>
        <IoIosArrowDropright onClick={handleNext} />
      </div>

    </div>
  )
}
