import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import TopDoctors from '../Component/TopDoctors';
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';


export default function Doctor() {
  return (
    
    <>
    <Header/>
   
    <TopDoctors/>

    <div className="d-flex justify-content-center my-4">
        <Button variant="primary" size="lg" as={Link} to="/appointment">
          Book Your Appointment
        </Button>
      </div>
    <Footer/>
    </>
  )
}
