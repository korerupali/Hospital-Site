import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <Container className='footer'>
                <Row>
                

                    <Col xs={6} lg={3} className='footer-div' >
                        <h4>Address</h4>
                        <ul>
                            <li>HealthCare Hospital</li>
                            <li>123 Wellness Street, Mumbai</li>
                            <li>Phone: +1 (123) 456-7890</li>
                            <li>Email: contact@healthcare.com</li>

                        </ul>
                    </Col>

                    <Col xs={6} lg={3} className='footer-div' >
                        <h4>Speciality</h4>
                        <ul>
                            <li>Bariatric Surgery</li>
                            <li>Breast Care Center</li>
                            <li>Cardiac Surgery</li>
                            <li>Cardiology</li>
                            <li>Chest Medicine</li>
                        </ul>
                    </Col>


                    <Col xs={6}  lg={3} className='footer-div cursor'>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to={'/'} >Home</Link></li>
                            <li><Link to={'/about-us'}>About Us</Link></li>
                            <li><Link to={'/doctor'}>Top Doctors</Link></li>
                            <li><Link to={'/appointment'}>Book Appointment</Link></li>
                            <li><Link to={'/contact-us'}>Contact Us</Link></li>

                        </ul>
                    </Col>

                    <Col xs={6} lg={3} className='footer-div cursor'>
                        <h4>Follow</h4>
                        <ul>
                            <li><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> Linkedin</li>
                            <li><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon> YouTube</li>
                            <li><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon> Instagram</li>
                            <li><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon> Twitter</li>
                            <li><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> Facebook</li>

                        </ul>
                    </Col>
                </Row>
            </Container>
            <hr />
            <Container className='footer-bottom'>
                <p>© 2024 HealthCare. All Rights Reserved</p>
            </Container>
        </>
    )
}



