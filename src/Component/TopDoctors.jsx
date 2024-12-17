import React from 'react'
import { doctorsData } from './Doctors'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './TopDoctors.css'

export default function TopDoctors() {
    return (
        <>

                <Container className="my-5">
                <Row className="g-4">
                    {doctorsData.map((item, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={3} >
                            <Card className="h-100 text-center card-div">
                                <Card.Img
                                    variant="top"
                                    src={item.image}
                                    alt={item.name}
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>{item.speciality}</Card.Text>
                                    <Card.Text className="text-success">Available</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}
