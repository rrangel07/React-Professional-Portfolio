import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import gadget from '../../images/gadgett.png';
import crypto from "../../images/Sentiment Index.PNG";
import weather from "../../images/Weather Dashboard.PNG";
import planner from "../../images/Work Day Scheduler.PNG";
import password from "../../images/PasswordGenerated.PNG";
import github from "../../images/GitHub-Mark-120px-plus.png"
import '../../styles/style.css';

export default function Portfolio() {
  return (
    <Container className='background-form p-4 d-flex flex-wrap'>
      <h1><strong>Portfolio</strong></h1>
      <Col sm={12}>
      <figure className='pos-rel'>
        <img src={gadget} alt="GadgetGetter" id="work-img-header" className='center'/>
        <div className="info d-flex flex-column justify-content-end">
          <Row className='align-items-end'>
            <Col xs={{span: 6, offset: 1}}>
              <a href="https://gadget-getter.herokuapp.com/" target="_blank"  rel="noreferrer"><h1><strong>GadgetGetter</strong></h1></a>
            </Col>
            <Col xs={4} className>
              <a href="https://github.com/rrangel07/GadgetGetter" target="_blank" rel="noreferrer"><img src={github} className="github" /></a>
            </Col>
          </Row>
          <Row>
            <Col xs={{span: 12, offset: 1}}>
                <p>MVC, Node.js, Express.js, MySQL</p>
            </Col>
          </Row>
        </div>
      </figure>
      </Col>
      <Col sm={12} md={6} >
      <figure className='pos-rel'>
          <img src={crypto} alt="Crypto Sentiment Index Project" className="work-img center" />
          <div className="info info-small d-flex flex-column justify-content-end">
            <Row className='align-items-end'>
              <Col xs={{span: 6, offset: 1}}>
                <a href="https://danqest.github.io/07-Crypto-Sentiment-Index/" target="_blank"  rel="noreferrer"><h1><strong>Crypto Sentiment Index</strong></h1></a>
              </Col>
              <Col xs={4} className>
                <a href="https://github.com/rrangel07/07-Crypto-Sentiment-Index" target="_blank" rel="noreferrer"><img src={github} className="github" /></a>
              </Col>
            </Row>
            <Row>
              <Col xs={{span: 12, offset: 1}}>
                  <p>HTML, CSS, javascript</p>
              </Col>
            </Row>
        </div>
      </figure>
      </Col>
      <Col sm={12} md={6} >
      <figure className='pos-rel'>
        <img src={weather} alt="Weather Dashboard" className="work-img center" />
        <div className="info info-small d-flex flex-column justify-content-end">
          <Row className='align-items-end'>
            <Col xs={{span: 6, offset: 1}}>
              <a href="https://rrangel07.github.io/6-Weather_Dashboard/" target="_blank"  rel="noreferrer"><h1><strong>Weather Dashboard</strong></h1></a>
            </Col>
            <Col xs={4} className>
              <a href="https://github.com/rrangel07/6-Weather_Dashboard" target="_blank" rel="noreferrer"><img src={github} className="github" /></a>
            </Col>
          </Row>
          <Row>
            <Col xs={{span: 12, offset: 1}}>
                <p>HTML, CSS, javascript</p>
            </Col>
          </Row>
        </div>
      </figure>
      </Col>
      <Col sm={12} md={6}>
      <figure className='pos-rel'>  
        <img src={planner} alt="Day Planner" className="work-img center" />
        <div className="info info-small d-flex flex-column justify-content-end">
          <Row className='align-items-end'>
            <Col xs={{span: 6, offset: 1}}>
              <a href="https://rrangel07.github.io/5-Day_Planner/" target="_blank"  rel="noreferrer"><h1><strong>Day Planner</strong></h1></a>
            </Col>
            <Col xs={4} className>
              <a href="https://github.com/rrangel07/5-Day_Planner" target="_blank" rel="noreferrer"><img src={github} className="github" /></a>
            </Col>
          </Row>
          <Row>
            <Col xs={{span: 12, offset: 1}}>
                <p>HTML, CSS, javascript</p>
            </Col>
          </Row>
        </div>
      </figure>
      </Col>
      <Col sm={12} md={6} >
      <figure className='pos-rel'>
        <img src={password} alt="Password Generator" className="work-img center" />
        <div className="info info-small d-flex flex-column justify-content-end">
          <Row className='align-items-end'>
            <Col xs={{span: 6, offset: 1}}>
              <a href="https://rrangel07.github.io/3-Password_Generator/" target="_blank"  rel="noreferrer"><h1><strong>Password Generator</strong></h1></a>
            </Col>
            <Col xs={4} className>
              <a href="https://github.com/rrangel07/3-Password_Generator" target="_blank" rel="noreferrer"><img src={github} className="github" /></a>
            </Col>
          </Row>
          <Row>
            <Col xs={{span: 12, offset: 1}}>
                <p>HTML, CSS, javascript</p>
            </Col>
          </Row>
        </div>
      </figure>
      </Col>
    </Container>
  );
}
