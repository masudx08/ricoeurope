import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './mynav.css'
import Logo from '../../assets/img/Logo/logo.png'
import SpeakerIcon from '../../assets/img/Icon/speaker.png'

export default function MyNav() {
  return (
    <div className='mynavContainer'>
      <Navbar  expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img className='logoImg' src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='nav-right' >
            <Nav className="me-auto ">
              <Nav.Link href="#home">Mint</Nav.Link>
              <Nav.Link href="#link">Stake</Nav.Link>
              <Nav.Link href="#link">Swag</Nav.Link>
              <Nav.Link href="#link">Breed</Nav.Link>
              <Nav.Link href="#link">Gangs</Nav.Link>
              <Nav.Link href="#link">Store</Nav.Link>
              <Nav.Link href="#link">Map</Nav.Link>
              <Nav.Link href="#link">Swap</Nav.Link>
              <img className='nav_icon hideInMobile' src={SpeakerIcon} alt="" />
              <button className="nav_button">Connect Wallet</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
