import React from 'react'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'; // allows to navigate pages without needing to refresh

function TutorNavbar(){
    return (
      <Container fluid>
        <Navbar bg="light" expand="lg" className="shadow-sm">
          <Navbar.Brand as={Link} to="/" className="fw-bold" style={{ fontSize: '1.5rem', color: 'black' }}> 
            <span >BoostYourMark</span>
             <span style={{ color: 'var(--accent-orange)', fontSize: '2rem', marginLeft: '2px' }}>!</span>
          </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto nav nav-underline">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/tutors">Tutors</Nav.Link>
            <Nav.Link as={Link} to="/bookings">My Bookings</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
            </Navbar>

      </Container>


    );


}
export default TutorNavbar; 