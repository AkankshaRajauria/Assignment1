import React, { useState } from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { login } from "../actions";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
      console.log("login",email);
      dispatch(login({
          email :email,
          password: password,
          loggedIn: true
      }))
    }
  return (
    <>
      <Container className="mt-5 mb-5">
        <Row className="spacing">
          <Col lg={{ span: 6, offset: 3 }}>
            <div>
              <h1 className="violet">Login</h1>
              <Form className="mt-4" onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="f600">Email<sup>*</sup></Form.Label>
                  <Form.Control type="email" placeholder="Enter email" className="input-style"
                  value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="f600">Password<sup>*</sup></Form.Label>
                  <Form.Control type="password" placeholder="Password" className="input-style"
                   value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" className="checkbox-style"/>
                </Form.Group>
                <Button className="buy-button btn-space" type="submit">
                  Login
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
