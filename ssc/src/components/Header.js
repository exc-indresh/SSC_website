import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../assets/logo.png"
import "./Home.css";
import {AiOutlineUser} from "react-icons/ai"

const Header = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
      
    >
      <Container style={{paddingTop:'10px'}}>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="home">
            <Nav.Item>
              <Nav.Link to="/" onClick={() => updateExpanded(false)}>
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
               
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                About
              </Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
              <Nav.Link
               
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
                Contact
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
               
                to="/"
                onClick={() => updateExpanded(false)}
              >
                KnowMore
              </Nav.Link>
            </Nav.Item>

           

            <Nav.Item>
              <Nav.Link
                
                to="/"
                onClick={() => updateExpanded(false)}
              >
                KnowMore
              </Nav.Link>
            </Nav.Item>

           
          </Nav>
          <div className="nav-user">

            <a href="/"><AiOutlineUser className="AiOutlineUser"/></a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header
