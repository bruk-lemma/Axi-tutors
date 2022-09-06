import React from "react";
import {Button, Card} from "react-bootstrap";

const Middle = () => {
  return (
    <div>
      <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content Documentation and examples for opting images into responsive
            behavior.
          </Card.Text>
          <Card.Img
            variant='bottom'
            src='./revolt-164_6wVEHfI-unsplash.jpg'
            alt='student'
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Middle;
