import React, {useState} from "react";
import {Form, Button, Modal, Container, Card} from "react-bootstrap";
import "./register.css";
export const RegisterScreen = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container className='all'>
      <Container>
        <Card>
          <Card.Header as='h5'>Client</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Container>
              <Button variant='primary' onClick={handleShow}>
                Register as a Client
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className='register'>
                    <div className='client'>
                      <Form>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type='email'
                            placeholder='Enter email'
                          />
                        </Form.Group>

                        <Form.Group
                          className='mb-3'
                          controlId='formBasicPassword'
                        >
                          <Form.Label>Full Name</Form.Label>
                          <Form.Control type='text' placeholder='full name' />
                        </Form.Group>
                        <Form.Group
                          className='mb-3'
                          controlId='formBasicPassword'
                        >
                          <Form.Label>Address</Form.Label>
                          <Form.Control type='text' placeholder='address' />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicText'>
                          <Form.Label>phone number</Form.Label>
                          <Form.Control
                            type='text'
                            placeholder='phone number'
                          />
                        </Form.Group>

                        <Form.Select aria-label='Default select example'>
                          <option>child grade</option>
                          <option value='1'>Primary school</option>
                          <option value='2'>Secondary school</option>
                          <option value='3'>Preparatory school</option>
                        </Form.Select>

                        <Form.Select aria-label='Default select example'>
                          <option>child gender</option>
                          <option value='1'>male</option>
                          <option value='2'>female</option>
                        </Form.Select>

                        <Form.Group
                          className='mb-3'
                          controlId='formBasicCheckbox'
                        >
                          <Form.Check
                            type='checkbox'
                            label='i want to recieve notification'
                          />
                        </Form.Group>
                        <Button variant='primary' type='submit'>
                          Submit
                        </Button>
                      </Form>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant='secondary' onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant='primary' onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </Container>{" "}
          </Card.Body>
        </Card>
      </Container>
      <Container>
        <Card>
          <Card.Header as='h5'>Teacher</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Container>
              <Button variant='primary' onClick={handleShow}>
                Register as a Teacher
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className='register'>
                    <div className='client'>
                      <Form>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                          <Form.Label>First Name</Form.Label>
                          <Form.Control
                            type='text'
                            placeholder='Enter firstName'
                          />
                        </Form.Group>

                        <Form.Group
                          className='mb-3'
                          controlId='formBasicPassword'
                        >
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control type='text' placeholder='Last Name' />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type='email'
                            placeholder='Enter email'
                          />
                        </Form.Group>

                        <Form.Group
                          className='mb-3'
                          controlId='formBasicPassword'
                        >
                          <Form.Label>Address</Form.Label>
                          <Form.Control type='text' placeholder='address' />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicText'>
                          <Form.Label>phone number</Form.Label>
                          <Form.Control
                            type='text'
                            placeholder='phone number'
                          />
                        </Form.Group>

                        <Form.Select aria-label='Default select example'>
                          <option>Education Level</option>
                          <option value='Bsc'>Bsc</option>
                          <option value='MsC'>Msc</option>
                        </Form.Select>

                        <Form.Select aria-label='Default select example'>
                          <option>Tutoring Subject</option>
                          <option value='mathematics'>Mathematics</option>
                          <option value='physics'>Physics</option>
                          <option value='Biology'>Biology</option>
                          <option value='Chemistry'>Chemistry</option>
                        </Form.Select>

                        <Form.Group
                          className='mb-3'
                          controlId='formBasicCheckbox'
                        >
                          <Form.Check
                            type='checkbox'
                            label='i want to recieve notification'
                          />
                        </Form.Group>
                        <Button variant='primary' type='submit'>
                          Submit
                        </Button>
                      </Form>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant='secondary' onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant='primary' onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </Container>{" "}
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
};
