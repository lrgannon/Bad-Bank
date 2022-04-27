import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



  function PageFooter
  () {
  
    return (
        <>
        <Navbar expand="lg" className="footerstyle" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#contactus">Contact Us</Nav.Link>
            <Nav.Link href="#locations">Locations</Nav.Link>
            <Nav.Link href="#careers">Careers</Nav.Link>
            <Nav.Link href="#privacy">Privacy</Nav.Link>
            <Nav.Link href="#security">Security</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      </>
    );
  }


export default PageFooter;
