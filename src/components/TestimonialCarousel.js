import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

function TestimonialCarousel() {
  return (
    <Container style={{ backgroundColor: 'var(--light-blue)' }} className="my-5">
      <Carousel indicators={true} controls={true} fade={false}>
        <Carousel.Item>
          <div className="p-5  rounded shadow text-center" style={{ minHeight: '200px' }}>
            <p className="fs-5 fst-italic">
              "This site helped me pass my calculus exam! The tutor was super helpful."
            </p>
            <h5 className="mt-3">— Alex T.</h5>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="p-5 rounded shadow text-center" style={{ minHeight: '200px' }}>
            <p className="fs-5 fst-italic">
              "Booking a tutor was fast and easy. I loved how friendly and professional they were!"
            </p>
            <h5 className="mt-3">— Maria L.</h5>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="p-5  rounded shadow text-center" style={{ minHeight: '200px' }}>
            <p className="fs-5 fst-italic">
              "Great platform. I improved my grades thanks to my weekly sessions."
            </p>
            <h5 className="mt-3">— Jordan K.</h5>
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default TestimonialCarousel;
