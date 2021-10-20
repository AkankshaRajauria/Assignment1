import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Footer from './Footer';

const SignUp = () => {
    return (
        <>
        <Container className="">
        <Row className="spacing">
          <Col lg={{ span: 6, offset: 3 }}>
            <div>
              <h1 className="violet">Sign Up</h1>
              <Form className="mt-4" >
              <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label className="f600">Username<sup>*</sup></Form.Label>
                  <Form.Control type="text" placeholder="Enter Userername" className="input-style"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="f600">Email<sup>*</sup></Form.Label>
                  <Form.Control type="email" placeholder="Enter email" className="input-style"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="f600">Password<sup>*</sup></Form.Label>
                  <Form.Control type="password" placeholder="Password" className="input-style"
                  />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" className="checkbox-style"/>
                </Form.Group> */}
                <Button className="buy-button btn-space mt-3" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
            
        </>
    )
}

export default SignUp
