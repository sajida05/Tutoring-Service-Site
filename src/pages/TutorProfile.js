import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';

const TutorProfile = () => {
  const { name } = useParams(); // grabs name value from URL path
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false); 

  const availableTimes = [ "July 11, 10:00 AM", "July 11, 2:00 PM", "July 16, 1:00 PM"];
  const handleBooking = () => {
    if (selectedTime) {
      const newBooking = {
        tutor: name,
        time: selectedTime

      };
      // get already existing bookings
      const existing = JSON.parse(localStorage.getItem("bookings") || "[]");

      // add new booking to existing
      existing.push(newBooking);

      localStorage.setItem("bookings", JSON.stringify(existing));
      setBookingConfirmed(true); 

    }
  };

  return (
  <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <h2>{name}</h2>
          <p className="text-muted"> <strong>Subject:</strong> Math • 4.9 ⭐ • $50/hr</p>
        </Col>
      </Row>

      <h5>Select a time:</h5>
      <Row className="mb-3">
        {availableTimes.map((time, index) => (
          <Col xs={12} md={6} lg={4} key={index}>
            <Card
              className={`mb-3 ${selectedTime === time ? 'border-dark' : ''}`}
              onClick={() => setSelectedTime(time)}
              style={{ cursor: 'pointer' }}
            >
              <Card.Body>{time}</Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center">
        <Button
          variant="warning"
          onClick={handleBooking}
          disabled={!selectedTime}
        >
          Book Now
        </Button>
      </div>

      {bookingConfirmed && (
        <Alert variant="success" className="mt-4 text-center ">
          ✅ Booking confirmed for {selectedTime} with {name}!
        </Alert>
      )}
    </Container>






  );





};

export default TutorProfile;
