import React, { useState } from "react";
import { Nav, Logo, Hamburger, Menu, MenuLink, A } from "./NavbarStyles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo onClick={() => setIsOpen(false)} to="/home">
        <i>{`<ASP/>`}</i>
        <span>recipe</span>
      </Logo>

      <Hamburger onClick={() => setIsOpen((prev) => !prev)} aria-label="menu">
        <span />
        <span />
        <span />
      </Hamburger>

      <Menu hamburOpen={isOpen}>
        <MenuLink to="/about" onClick={() => setIsOpen(false)}>
          About
        </MenuLink>

        <A href="https://github.com/ahmetsuat67" target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)}>
          Github
        </A>

        <MenuLink
          onClick={() => {
            sessionStorage.clear();
            setIsOpen(false);
          }}
          to="/"
        >
          LOGOUT
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;