import React from 'react'
import {Container, Nav, Navbar} from "react-bootstrap"
import  logo  from "../img/logo.png"
import { Link } from "react-router-dom"
const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/">
            <img src={logo} alt="" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/teacher" className='nav-link'>Teacher</Link>
            <Link to="/courses" className='nav-link'>Courses</Link>
            <Link to="/contact" className='nav-link'>Contact</Link>
            <Link to="/paths" className='nav-link'>Paths</Link>
            <Nav.Link target='blank' href="https://github.com/" className='nav-link'>GitHub</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar