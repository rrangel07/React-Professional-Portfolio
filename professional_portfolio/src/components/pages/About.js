import React from 'react';
import '../../styles/style.css';
import shot from "../../shot.PNG";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

export default function About() {
  return (
    <Container className='d-flex flex-wrap justify-content-center mt-5'>
      <Col sm={12} md={4}>
       <img src={shot} alt="profile-picture" width="100%" height="auto" className='shot'/>
      </Col>
      <Col sm={12} md={6} className='align-items-center'>
     <section className='text'>
        Hi! My name is Raul, I was born and raised in Venezuela, currently living in Atlanta, Georgia. I studied to become a Mechanical Engineer and now I'm switching my field to be a Full-stack Web Developer attending to GT's bootcamp. My passion is to solve problems; therefore, I love back-end development. I have background experience handling engineering projects in Oil and Mining Industry in both Venezuela and Chile, what gives me understanding of project management in different fields.
      </section>
      </Col>
    </Container>

    
  );
}
