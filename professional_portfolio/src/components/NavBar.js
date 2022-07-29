import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/style.css';

function NavBar({ currentPage, handlePageChange }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
          <Navbar.Brand href="#home">Raul Rangel</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="d-flex justify-content-end">
            <Nav.Link href="#about" onClick={() => handlePageChange('About')}>About</Nav.Link>
            <Nav.Link href="#portfolio" onClick={() => handlePageChange('Portfolio')}>Portfolio</Nav.Link>
            <Nav.Link href="#contact" onClick={() => handlePageChange('Contact')}>Contact</Nav.Link>
            <Nav.Link href="#resume" onClick={() => handlePageChange('Resume')}>Resume</Nav.Link>
          </Nav>
          </Navbar.Collapse>

      </Container>
    </Navbar>

  );
}

export default NavBar;