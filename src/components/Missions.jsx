import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../styles/missions.css';

const Missions = () => (
  <Container className="custom-container">
    <Row>
      <Col xs={2} className="custom-col">
        hello
      </Col>
      <Col className="custom-col">
        hello
      </Col>
    </Row>
    <Row>
      <Col  xs={2}>
      <Button  variant="outline-primary" size="xs" >Make your reservation</Button>
      </Col>
     
    </Row>
  </Container>
);

export default Missions;
