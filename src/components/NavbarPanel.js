import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavbarPanel = () => {
  const cartProducts=useSelector(state=>state.cart); 
  return (
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">Reudx Toolkit</Navbar.Brand>
  
        <Nav>
          <Nav.Link to="/" as={Link}>products</Nav.Link>
          </Nav>
          <Navbar.Toggle/>
      <Navbar.Collapse className='justify-content-end'>
        <Navbar.Text>
          <Nav.Link to="/cart" as={Link}>My Bag {cartProducts.length}</Nav.Link>
        </Navbar.Text>

      </Navbar.Collapse>
     
    </Container>
  </Navbar>
  )
}

export default NavbarPanel