import React, { useEffect, useState } from 'react';
import { Container, Card } from 'react-bootstrap';

function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookings") || "[]");
    setBookings(stored);
  }, []);

  return (
    <Container className="py-5">
      <h2 className="mb-4">My Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        bookings.map((b, index) => (
          <Card key={index} className="mb-3">
            <Card.Body>
              <strong>{b.tutor}</strong> <br />
              📅 {b.time}
            </Card.Body>
          </Card>
        ))
      )}
    </Container>
  );
}

export default Bookings;
