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
      title: 'Customize',
      description: 'Visit the swag store to customize and upgrade your gang leaders.'
    },
    {
      title: 'Organize',
      description: 'Manage all members in your gangs, achieve max points.'
    },
    {
      title: 'Attack',
      description: 'Earn stars from attacking rival gangs, partipate in cartel wars and tournaments'
    },
    {
      title: 'Defend',
      description: 'Having the right security measures in place to protect your vault.'
    },
    {
      title: 'Territorial Control',
      description: 'Gain control of amenity buildings for additonal rewards.'
    },
    {
      title: 'Cartel',
      description: 'Join or create your own cartel to participate in cartel wars and tournaments.'
    },
    {
      title: 'Jail',
      description: 'Keep an eye on your wanted level, Stay out of jail, pay the police or serve your time'
    },
    {
      title: 'Land',
      description: 'Purchase land throughout various city maps, dominate territory, place buildings, travel & luxury assets.'
    },
    {
      title: 'Safe House',
      description: 'Vital for growth, safe houses allow higher population limits for larger cartels.'
    },
    {
      title: 'Leagues',
      description: 'Keep an eye on your wanted level, Stay out of jail, pay the police or serve your time'
    },
    {
      title: 'Rewards',
      description: 'Recieve rewards from staking, atacking, controlling territory, and holding strong.'
    },
    {
      title: 'Royalties',
      description: 'Theres no room for paperhands in the Meta. 50% of funds generated from  secondary sales are distributed in $DLZ to the most loyal holders. '
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
      <Carousel
      autoPlay={false}
      ref={MyCarousel} responsive={responsive} className='myslider'>
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
