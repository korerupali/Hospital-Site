import React from 'react'
import Header from '../common/Header'

import Footer from '../common/Footer'
import Carousels from '../Component/Carousels'
import { Col, Container, Row } from 'react-bootstrap'
import './Home.css';
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <Header />
      <Carousels />
      <h3 className='modules'>HealthCare Hospital Modules</h3>
      <Container>
        <Row>
          <Col xs={12} lg={1}></Col>
          <Col xs={12} lg={5} className='icon-div'>
            <Row>
              <Col xs={12} lg={2}>
                <img src={icon1} alt='' className='iconImage' />
              </Col>
              <Col xs={12} lg={10}>
                <h4>Admission, Discharge & Transfer (IPD)</h4>
                <p>The IPD module commences when the patient is being registered and allotted bed in the ward. It deals with the complete treatment and services provided to the patient during his stay in the hospital.</p>
              </Col>
            </Row>
          </Col>



          <Col xs={12} lg={5} className='icon-div'>
            <Row>
              <Col xs={12} lg={2}>
                <img src={icon2} alt='' className='iconImage' />
              </Col>
              <Col xs={12} lg={10}>
                <h4>Patient Registration (OPD, Casualty, Appointment & ORS)</h4>
                <p>The patient registration module of the e-Hospital application is used for patient registration in the OPD and Casualty departments as well as to book, confirm and cancel appointments.</p>
              </Col>
            </Row>
          </Col>


          <Col xs={12} lg={1}></Col>
          <Col xs={12} lg={5} className='icon-div'>
            <Row>
              <Col xs={12} lg={2}>
                <img src={icon3} alt='' className='iconImage' />
              </Col>
              <Col xs={12} lg={10}>
                <h4>Billing</h4>
                <p>The Billing module handles all types of billing workflows. This module facilitates cashier and billing operators for managing billing functions related to billing receipts and refunds.</p>
              </Col>
            </Row>
          </Col>



          <Col xs={12} lg={5} className='icon-div'>
            <Row>
              <Col xs={12} lg={2}>
                <img src={icon4} alt='' className='iconImage' />
              </Col>
              <Col xs={12} lg={10}>
                <h4>Clinic (OPD & IPD)</h4>
                <p>The Clinic module allows the clinicians and doctors to record the clinical data of the patients like visits, examination, diagnosis, history, treatment, prescriptions etc., and to order investigations, procedures and medicines, to keep track of the treatment and other services provided to the patients.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>




      <div className="d-flex justify-content-center my-4">
        <Button variant="primary" size="lg" as={Link} to="/doctor">
          Find Doctors
        </Button>
      </div>
      <Footer />
    </>
  )
}
