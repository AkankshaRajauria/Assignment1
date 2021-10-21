import React, { useState } from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import Footer from "./Footer";
import { connect, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { login } from "../actions";

const Login = (loggedIn) => {
  console.log("loggedIn", loggedIn.loggedIn);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const LoginHandler = (e) => {
    e.preventDefault();
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(credentials));
    if (loggedIn.loggedIn === true) {
      history.push("/");
    }

    // setCredentials({ email: "", password: "" });
  };
  // if (loggedIn.loggedIn === false) {
  //     history.push("/login");
  // }
  // if (loggedIn.loggedIn === true) {
  //     history.push("/");
  // }
  return (
    <>
      <Container className="mt-5 mb-5">
        <Row className="spacing">
          <Col lg={{ span: 6, offset: 3 }}>
            <div>
              <h1 className="violet">Login</h1>
              <Form className="mt-4" onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="f600">
                    Email<sup>*</sup>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className="input-style"
                    name="email"
                    value={credentials.email}
                    onChange={LoginHandler}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="f600">
                    Password<sup>*</sup>
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="input-style"
                    name="password"
                    value={credentials.password}
                    onChange={LoginHandler}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Remember me"
                    className="checkbox-style"
                  />
                </Form.Group>
                <Button className="buy-button btn-space" type="submit">
                  Login
                </Button>
              </Form>
              <p className="mt-3">
                Don't Have an account ?
                <Link to="/register" className="text-blue">
                  {" "}
                  Sign Up
                </Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

const mapStateToProp = (state) => {
  return {
    loggedIn: state.shop.loggedIn,
  };
};

export default connect(mapStateToProp)(Login);
