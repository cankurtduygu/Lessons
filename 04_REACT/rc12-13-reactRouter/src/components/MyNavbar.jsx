import React from 'react'
import {Container, Nav, Navbar} from "react-bootstrap"
import  logo  from "../img/logo.png"
import { Link, NavLink } from "react-router-dom"

//!!!React ta 3 türlü link kullanılabilir. NavLink Link ve a etiketi.hangisini ne zaman kullanmalısınız? React uygulamanız içinde, etkinken stil gerektirmeyen bir bağlantı oluşturmak istiyorsanız, Link bileşenini kullanın. React uygulamanız içinde, etkin durumdayken stil gerektiren bir bağlantı oluşturmak istiyorsanız, NavLink bileşenini kullanın. Son olarak, React uygulamanızda harici bir sayfaya veya rota olmayan bir sayfaya bağlantı oluşturmak istiyorsanız, <a></a>  etiketini kullanın.Nav.Link react-bootstrap ten stilli bir a etiketidir. a className="nav-link" demek gibidir

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
            <NavLink
              style={({isActive})=>({color: isActive && "red" })}
              to="/" 
              className='nav-link'>Home</NavLink>
            <NavLink
              style={({isActive})=>({fontSize: isActive && "50px" })}
              className='nav-link'>Teacher</NavLink>
            <NavLink
              style={({isActive})=>({backgroundColor: isActive && "yellow" })}
              className='nav-link'>Courses</NavLink>
            <NavLink
              style={({isActive})=>({color: isActive && "red" })} to="/contact" 
              className='nav-link'>Contact</NavLink>
            <NavLink
              style={({isActive})=>({color: isActive && "red" })} to="/paths" 
              className='nav-link'>Paths</NavLink>
            <Nav.Link target='blank' href="https://github.com/" className='nav-link'>GitHub</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar