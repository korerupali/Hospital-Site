import React from 'react'
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import './Carousels.css';

export default function Carousels() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

  return (
    <>
    
    <Container>

    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={img1} alt='first image'/>
        <Carousel.Caption className='text-white'  style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
              <h3>Comprehensive Care at Your Fingertips</h3>
              <p>Our dedicated healthcare team provides personalized treatment for each patient, ensuring the best outcomes for your health.</p>
            </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={img2} alt='second image'/>
        <Carousel.Caption className='text-white'  style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
              <h3>State-of-the-Art Facilities</h3>
              <p>With cutting-edge medical technology, we offer the highest standard of care and precision in every procedure.</p>
            </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={img3} alt='third image'/>
        <Carousel.Caption className='text-white'  style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
              <h3>Your Health, Our Priority</h3>
              <p>We are committed to your well-being, providing compassionate care to help you lead a healthy, happy life.</p>
            </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>

    </Container>
    </>
  )
}
