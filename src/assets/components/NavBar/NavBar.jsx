import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
   return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Lucho Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Secciones</Nav.Link>
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Mi Cuenta
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Pedido Anterior
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Salir
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="checkOut"> 
               <CartWidget></CartWidget> 
             </Nav.Link> 
            </Nav>
            
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
    );
  }

export default NavBar