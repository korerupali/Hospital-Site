import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import mission from '../images/mission img1.webp';
import vision from '../images/vision img2.webp';
import mission2 from '../images/mission img3.jpg'
import './About.css';


export default function About() {
  return (
    <>
      <Header />

      <Container className="about-us-container py-5">
        <Row className="mb-4 text-center">
          <Col>
            <h1 className="about-us-title">About Us</h1>
            <p className="about-us-subtitle">
              Welcome to HealthCare Hospital, where exceptional care meets innovation. Established in 2024, we are a premier healthcare institution committed to improving the health and well-being of our community with compassion, expertise, and advanced medical technology.
            </p>
          </Col>
        </Row>


        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h2 className="section-title">Our Mission</h2>
            <p className="section-text">
              Our mission is to provide world-class healthcare services that are accessible, affordable, and patient-centered. We aim to deliver comprehensive care that focuses not only on healing but also on promoting long-term wellness.
              To give patient and his family a clear advantage to win their war against disease by creating the best infrastructure, technology and support. To put patient first & foremost and be futuristic and innovative in the delivery of healthcare.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <Image
              src={mission}
              alt="Mission image"
              className="rounded"
            />
          </Col>
        </Row>

        <Row className="align-items-center mb-5">
          <Col md={6} className="text-center">
            <Image
              src={vision}
              alt="vision image"
              className="rounded"
            />
          </Col>
          <Col md={6}>
            <h2 className="section-title">Vision</h2>
            <p className="section-text">
              We aspire to be a leading healthcare institution, renowned for excellence in patient care.
              Our focus is on fostering innovation and advancing medical education.
              We are dedicated to improving lives through compassionate and expert healthcare.
              Our goal is to create a healthier, happier, and thriving community.
              Together, we shape the future of healthcare with unwavering commitment.</p>
          </Col>
        </Row>


        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h2 className="section-title">Why Choose Us?</h2>
            <ul className="section-list">
              <li>Expert Team: Our team of skilled doctors, surgeons, nurses, and healthcare professionals are dedicated to delivering the highest standards of medical care.</li>
              <li>Cutting-Edge Technology: We are equipped with state-of-the-art medical equipment and facilities to ensure accurate diagnosis and effective treatment.</li>
              <li>Comprehensive Services: From preventive care and routine check-ups to complex surgeries and specialized treatments, we offer a wide range of medical services under one roof.</li>
              <li>Patient-Centered Care: We prioritize our patients’ needs and comfort, ensuring personalized care and support at every stage of treatment.</li>
            </ul>
          </Col>
          <Col md={6} className="text-center">
            <Image
              src={mission2}
              alt="Mission image"
              className="rounded"
            />
          </Col>
        </Row>


    

       
        <Row className="text-center mt-5">
          <Col>
            <h2 className="cta-title">Your Health, Our Priority</h2>
            <p className="cta-text">
              Join us on your health journey and experience the care you deserve. Whether you're here for a routine check-up or specialized treatment, we are here to guide you every step of the way. Experience healthcare that combines advanced medicine with a personal touch at HealthCare Hospital.
            </p>
            <Button variant="primary" size="md" href="/contact-us">
              Contact Us
            </Button>
          </Col>
        </Row>
        
      </Container>

      <Footer />
    </>
  )
}
