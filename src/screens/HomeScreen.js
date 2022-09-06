import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

import {LinkContainer} from "react-router-bootstrap";
import {Image} from "react-bootstrap";
import "./home.css";
import {RegisterScreen} from "./RegisterScreen .js";

import React from "react";
import {useNavigate} from "react-router-dom";
import Middle from "../components/Middle";

const HomeScreen = () => {
  let view = false;
  const Navigate = useNavigate();

  const handleClick = () => {
    Navigate("/register");
  };
  return (
    <div>
      <div className='bg'>
        <div className='hero'>
          <p className='text'>
            "Documentation and examples for opting images into responsive
            behavior".
          </p>

          <div className='buttons'>
            <Nav.Link to='/register'>
              <Button variant='outline-secondary' onClick={handleClick}>
                Register Now
              </Button>
            </Nav.Link>

            <Button variant='outline-secondary'>Sign up Now</Button>
          </div>
        </div>
      </div>
      <div>
        <Middle />
      </div>
    </div>
  );
};

export default HomeScreen;
