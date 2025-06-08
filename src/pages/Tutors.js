import React, { useState } from 'react';
import { Container, Button, Card, Row, Col, Form, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const dataTutors = [
    {name: "Ms. P.", title: "Elementary teacher", subject: "Writing", experience: "6 years", image: "👩‍🏫"},
    {name: "Mr. M.", title: "Math Specialist", subject: "Math", experience: "4 years", image: "👩‍🏫"},
    {name: "Ms. L.", title: "Literature Specialist", subject: "Reading", experience: "6 years", image: "👩‍🏫"},
    {name: "Mr. O", title: "Science Professor", subject: "Science", experience: "15 years", image: "👩‍🏫"}

]
function Tutors() {

    const[subjectFilter, setSubjectFilter] = useState("All"); // track selected subject for filter, useState remembers which is selected, default is all
    const filteredTutors = dataTutors.filter( tutor => subjectFilter === "All" || tutor.subject === subjectFilter); // filters and displays all tutors or only tutors matching subject


  return (
    <Container className="py-3">
      <h2 className="mb-5 mt-5 text-center">Find the right tutor for your learning goals!</h2>

      {/* Subject Filter Buttons */}
      <ButtonGroup className="mb-3 d-flex flex-wrap justify-content-center gap-2">
        {["All", "Math", "Reading", "Writing", "Science"].map(subject => (
          <Button
            key={subject}
            variant={subjectFilter === subject ? "dark" : "outline-dark"}
            onClick={() => setSubjectFilter(subject)}
          >
            {subject}
          </Button>
        ))}
      </ButtonGroup>

      {/* Search bar (not functional yet) */}
      <Form.Control type="text" placeholder="Search" className="mb-4 mt-4 mx-auto" style={{ maxWidth: "400px" }} disabled />

      <h5 className="mb-3">Featured tutors</h5>
      
      <Row sm={2} md={2} lg={4} className="g-4"> 
     {filteredTutors.map((tutor, idx) => (
        <Col key={idx}>
        <Card className="h-100 text-center shadow-sm">
           <Card.Body>
                <div style={{ fontSize: "60px" }}>{tutor.image}</div>
                <Card.Title>{tutor.name} - {tutor.title}</Card.Title>
                 <Card.Text>{tutor.experience} experience</Card.Text>
                {/* Add Link inside the card */}
                <Link to={`/tutor/${tutor.name}`} className="btn btn-warning mt-2">
                 View more details
                </Link>
            </Card.Body>
        </Card>
        </Col>
          ))}
    </Row>


 


    
   </Container>

  
  );
}

export default Tutors;
