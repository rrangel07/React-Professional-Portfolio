import React from 'react';
import Container from 'react-bootstrap/Container';
import github from '../images/icons8-github-64.png'
import linkedin from '../images/icons8-linkedin-64.png'
import Row from 'react-bootstrap/Row'
import '../styles/style.css';
import Col from 'react-bootstrap/esm/Col';

export default function Footer() {
  return (
    <footer>
      <Container fluid className='d-flex flex-column align-items-center justify-content-center mt-5 background-footer'>
        <Row>
          <Col>
          <a href='https://www.github.com/rrangel07' target='_blank' rel='noreferrer'><img src={github} alt='github logo'/></a>
          <a href='https://www.linkedin.com/in/rrangel07' target='_blank' rel='noreferrer'><img src={linkedin} alt='linkedin logo'/></a>
          </Col>
        </Row>
        <Row>
        <p>All rights reserved Raul Rangel</p>
        </Row>
      </Container>
    </footer>
  )
}