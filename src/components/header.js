import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

import {LinkContainer} from "react-router-bootstrap";

import React from "react";

const Header = () => {
  return (
    <Navbar bg='medium' expand='md' sticky='top'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>Proshop</Navbar.Brand>
        </LinkContainer>

        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <LinkContainer to='/'>
              <Nav.Link to=''>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/'>
              <Nav.Link to=''>Register</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/'>
              <Nav.Link to='/'>Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/'>
              <Nav.Link to='/'>About</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
