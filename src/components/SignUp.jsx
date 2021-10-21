import React, {useState} from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { register } from "../actions";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const SignUp = () => {

    const dispatch = useDispatch()
    const [userNameError, setUserNameError] = useState("");
    const [emailError, setemailError] = useState("");
    const [passwordError, setPassWordError] = useState("");
    const [credentials, setcredentials] = useState({username: "",email: "",password: ""});

    const SignUpHandler = (e) => {
        e.preventDefault();
        setcredentials({...credentials, [e.target.name]: e.target.value});
        console.log("credentials",credentials);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (credentials.username.length < 4) {
          setUserNameError("Username is too sort");
          return;
        }
        // if (credentials.email.length === 0) {
        //   setemailError("email cant be blanked");
        //   return;
        // }
        // if (credentials.passwords.length < 6) {
        //   setPassWordError("password should be greater than 6");
        //   return;
        // }
        dispatch(register(credentials));
        // setIsRegistred(true);
        setcredentials({ username: "", email: "", passwords: "" });
      };

  return (
    <>
      <Container className="">
        <Row className="spacing">
          <Col lg={{ span: 6, offset: 3 }}>
            <div>
              <h1 className="violet">Sign Up</h1>
              <Form className="mt-4" onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label className="f600">
                    Username<sup>*</sup>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Username"
                    className="input-style"
                    name="username"
                    value={credentials.username}
                    onChange={SignUpHandler}
                    autoComplete="off"
                  />
                  <span className="text-danger" id="error">
                    {userNameError}
                  </span>
                </Form.Group>
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
                    onChange={SignUpHandler}
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
                    onChange={SignUpHandler}
                  />
                </Form.Group>
                <Button className="buy-button btn-space mt-3" type="submit">
                  Submit
                </Button>
                <p className="mt-3">
              Already registered with us ?<Link to="/login" className="text-blue"> Login</Link>
          </p>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default SignUp;
