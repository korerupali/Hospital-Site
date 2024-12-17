import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import outerImg from '../images/hospital-outer.jpg';
import './Contact.css'
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope} from '@fortawesome/free-regular-svg-icons';
import { faLocation } from '@fortawesome/free-solid-svg-icons/faLocation';
// import Map from '../Component/Map';

export default function Contact() {
  return (
    <>
      <Header />
      <div>
        <img src={outerImg} alt='hospital outer image' className='contact-img-div' />
      </div>

      <Container>
        <Row className="contact-row" > 
       
          <Col xs={12} md={6} lg={3} className='contact-div'>
          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
          <p>OPD Appointment</p>
          <a href='tel:2345687553'>2345687553</a>
          <p>(8 AM to 8 PM) Mon To Sun</p>
          </Col>

          <Col xs={12} md={6} lg={3}  className='contact-div'>
          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
          <p>Patient Helpline Number</p>
          <a href='tel:9856687553'>9856687553</a>
          <p>(8 AM to 8PM)</p>
          </Col>

          <Col xs={12} md={6} lg={3}  className='contact-div'>
          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
          <p>Home Care Service</p>
          <a href='tel:2345687553'>2345687553</a>
          <p>(8 AM to 8 PM) Mon To Sun</p>
          </Col>

          <Col xs={12} md={6} lg={3}  className='contact-div'>
          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
          <p>OPD Enquiry:</p>
          <a href='tel:2345667983'>2345667983</a>
          <p>(8 AM to 8 PM) Mon to Fri & 8 AM to 5 PM (Sat)</p>
          </Col>
        
          <Col xs={12} md={6} lg={3} className='contact-div'>
          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
          <p>Boardline number:</p>
          <a href='tel:2345687893'>2345687893</a>
          <p>(8 AM to 8 PM) Mon To Sun</p>
          </Col>

          <Col xs={12} md={6} lg={3}  className='contact-div'>
          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
          <p>Emergency</p>
          <a href='tel:2345687789'>2345687789</a>
          <p>(8 AM to 8 PM) Mon To Sun</p>
          </Col>

          <Col xs={12} md={6} lg={3}  className='contact-div'>
          <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>
          <p>Address</p>
          <p>HealthCare Hospital</p>
         <p>123 Wellness Street, Mumbai</p>
          </Col>

          <Col xs={12} md={6} lg={3}  className='contact-div'>
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          <p>Email</p>
          <p>contact@healthcare.com</p>
          <p>appointments@healthcare.com</p>
          </Col>
        </Row>


      </Container>


      {/* <Map/> */}

      <Footer />
    </>
  )
}
