import React from 'react'
import { Link } from 'react-router-dom'
import About from '../../components/Home/About'
import Assets from '../../components/Home/Assets'
import Attack from '../../components/Home/Attack'
import Footer from '../../components/Home/Footer'
import Header from '../../components/Home/Header'
import Roadmap from '../../components/Home/Roadmap'
import Showcase from '../../components/Home/Showcase'
import Slider from '../../components/Slider/Slider'
export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <div style={{padding: '50px 0', background:'#1d1c1c'}}>
        <Slider />
      </div>
      <Attack />
      <Assets />
      <Roadmap />
      <Showcase />
      <Footer />
    </div>
  )
}
