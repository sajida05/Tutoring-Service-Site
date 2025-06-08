import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Col, Card, Row, Image} from 'react-bootstrap';
import TestimonialCarousel from '../components/TestimonialCarousel';
import '../App.css';

function Home() {
  return (
    <>
      {/* Intro Section - Light Blue Background */}
      <div className="py-5 text-center" style={{ backgroundColor: 'var(--light-blue)' }}>
        <Container>
          <h1 className="mb-4 fw-bold">Online Tutoring for Every Learner</h1>
          <p className="lead mb-4">
            Struggling with school? Find expert tutors in Math, Science, Reading & Writing!
          </p>
          <Button as={Link} to="/tutors" variant="warning" size="lg">
            Browse Tutors
          </Button>
        </Container>
      </div>

      {/* Content Section - White Background */}
      <Container className="extra-space text-center">
        <Row className="align-items-center">
          <Col md={6}>
            <h2>Assisting Learners with Personal Guidance</h2>
            <p>
              Whether you're preparing for exams, learning concepts, or just need help staying on track, our tutors are here for you.
            </p>
          </Col>
          <Col md={6}>
            <Image 
              src="/tutorpic.jpg" 
              alt="Tutor helping a student" 
              fluid 
              rounded 
            />
          </Col>
        </Row>
      </Container>

      {/* Testimonials Section */}
      <Container className="text-center mt-5">
        <h2 className="mb-4">What our Learners Say</h2>
        <TestimonialCarousel />
      </Container>
    </>
  );
}


export default Home;
