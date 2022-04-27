import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import '../App.css';


  function MainNav() {
    const navStyle = {
            color: 'white'
    };   

    return (
<div>
<>
  <Navbar expand='lg' bg="dark" variant="dark" className="navStyle">
    <Container >
    <Navbar.Brand src='images/BadBanklogo.jpeg'><img
        src="/images/BadBanklogo.jpeg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="  Bank logo"/>VOLUNTEER BANK & DISTRUST</Navbar.Brand>
    <Nav>
    <Nav.Link className="navLink" data-toggle="tooltip" data-placement="auto" title="Return to main page" 
            as={Link} to='./'>Home</Nav.Link>
      <Nav.Link data-toggle="tooltip" data-placement="auto" title="Create a user account" 
      as={Link} to='./createaccount'>Create Account</Nav.Link>
      <Nav.Link data-toggle="tooltip" data-placement="auto" title="Make a deposit" 
      as={Link} to='./deposit'>Deposit</Nav.Link>
      <Nav.Link data-toggle="tooltip" data-placement="auto" title="Make a withdrawl" 
      as={Link} to='./withdraw'>Withdraw</Nav.Link>
      <Nav.Link data-toggle="tooltip" data-placement="auto" title="View transaction history" 
      as={Link} to='./alldata'>All Data</Nav.Link>
  
    
    </Nav>
    </Container>
  </Navbar>


</>

     </div>  
  );
}


export default MainNav;