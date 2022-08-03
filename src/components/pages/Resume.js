import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import '../../styles/style.css';

export default function Resume() {
  return (
    <Container className='background-form p-4'>
      <h1><strong>Resume</strong></h1>
      <p>You can check my resume <a href='https://docs.google.com/document/d/1vgaF3qpqkJGSyAV45njIpNx__7uBz10t/edit?usp=sharing&ouid=117808503493827888886&rtpof=true&sd=true' target='_blank' rel='noreferrer'>here</a></p>
      <ul>
        <li>Front-end proficiencies
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
            <li>React.js</li>
            <li>Handlebars.js</li>
          </ul>
        </li>
        <li>Back-end proficiencies
          <ul>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>RESTful APIs</li>
            <li>GraphQL</li>
          </ul>
        </li>
      </ul>
    </Container>
  );
}
