import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="py-5">
      <h3 className="text-center mb-5">Contact Us</h3>

      <Row className="align-items-start">
        {/* Contact Form */}
        <Col md={6}>
          <Form className="shadow p-4 rounded bg-white">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Write your message here..." />
            </Form.Group>

            <div className="text-center">
              <Button variant="warning" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>

        {/* adding location map beside contact us */}
        <Col md={6}>
          <h5 className="mb-4 text-center ">Our Location</h5>
          <div className="map-responsive rounded shadow-sm mt-4 mt-md-0">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d701.8953307469922!2d-75.47755681972195!3d45.27647349604471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1749401317828!5m2!1sen!2sca"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact;
