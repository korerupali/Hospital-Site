import React, { useState } from 'react';
import { Form, Button, Row, Col} from 'react-bootstrap';
import Header from '../common/Header';
import Footer from '../common/Footer';
import './Appointment.css';
import { doctorsData } from '../Component/Doctors';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

export default function Appointment() {
  return (
    <>
      <Header />
      <h2 className='modules'>Book Your Appointment Here!</h2>
      <ToastContainer/>
      <AppointmentData />
      <Footer />
    </>
  );
}

function AppointmentData() {
  const initialFormData = {
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    mobile: '',
    address: '',
    date: '',
    time: '',
    speciality: '',
    doctor: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const timeSlots = [
    '09:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '02:00 PM - 03:00 PM',
    '03:00 PM - 04:00 PM',
    '04:00 PM - 05:00 PM',
    '05:00 PM - 06:00 PM',
    '06:00 PM - 07:00 PM'
  ];

  const handleSpecialityChange = (e) => {
    const speciality = e.target.value;
    setFormData({ ...formData, speciality, doctor: '' });
    const filtered = doctorsData.filter((doctor) => doctor.speciality === speciality);
    setFilteredDoctors(filtered);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    toast.success("Appointment Booked!")
    // alert('Appointment successfully booked!');
    setFormData(initialFormData); // Reset the form data
    setFilteredDoctors([]); // Clear the filtered doctor list
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className='appointment-container'>
      <Form onSubmit={handleSubmit} className='appointment-form'>
        <Row>
          <Col md={6}>
            <Form.Group className='mb-3'>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type='text'
                name='firstName'
                value={formData.firstName}
                onChange={handleInputChange}
                required
                placeholder='Enter your first name'
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className='mb-3'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type='text'
                name='lastName'
                value={formData.lastName}
                onChange={handleInputChange}
                required
                placeholder='Enter your last name'
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Form.Group className='mb-3'>
              <Form.Label>Age</Form.Label>
              <Form.Control
                type='number'
                name='age'
                value={formData.age}
                onChange={handleInputChange}
                required
                placeholder='Enter your age'
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className='mb-3'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder='Enter your email'
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className='mb-3'>
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type='tel'
                name='mobile'
                value={formData.mobile}
                onChange={handleInputChange}
                required
                placeholder='Enter your mobile number'
                pattern='\d{10}'
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className='mb-3'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            as='textarea'
            name='address'
            value={formData.address}
            onChange={handleInputChange}
            required
            placeholder='Enter your address'
          />
        </Form.Group>
        <Row>
          <Col md={6}>
            <Form.Group className='mb-3'>
              <Form.Label>Date</Form.Label>
              <Form.Control
                type='date'
                name='date'
                value={formData.date}
                onChange={handleInputChange}
                required
                min={today}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className='mb-3'>
              <Form.Label>Time</Form.Label>
              <Form.Select
                name='time'
                value={formData.time}
                onChange={handleInputChange}
                required
              >
                <option value=''>Select Time</option>
                {timeSlots.map((slot, index) => (
                  <option key={index} value={slot}>{slot}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group className='mb-3'>
              <Form.Label>Doctor Speciality</Form.Label>
              <Form.Select
                name='speciality'
                value={formData.speciality}
                onChange={handleSpecialityChange}
                required
              >
                <option value=''>Select Speciality</option>
                {[...new Set(doctorsData.map((doc) => doc.speciality))].map((speciality, index) => (
                  <option key={index} value={speciality}>{speciality}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className='mb-3'>
              <Form.Label>Select Doctor</Form.Label>
              <Form.Select
                name='doctor'
                value={formData.doctor}
                onChange={handleInputChange}
                required
                disabled={!filteredDoctors.length}
              >
                <option value=''>Select Doctor</option>
                {filteredDoctors.map((doc) => (
          <option key={doc.id} value={doc.name}> {doc.name} ({doc.degree}, {doc.experience}) </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
       
        <div class="button-wrapper">
          <Button type="submit" variant="primary">
            Book Appointment
          </Button>
        </div>
      </Form>
    </div>
  );
}
