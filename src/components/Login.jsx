import React, { useState, useEffect } from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import Footer from "./Footer";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { login } from "../actions";
import {LoginValidation} from "./Validation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

  const loggedIn = useSelector(state => state.shop.loggedIn)
  console.log("loggedIn", loggedIn);


  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const [dataIsCorrect, setdataIsCorrect] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const LoginHandler = (e) => {
    e.preventDefault();
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

// useEffect(() => {
//     setErrors(LoginValidation(credentials))
// }, [credentials])

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(LoginValidation(credentials));
    setdataIsCorrect(true);
    console.log("errors", errors, credentials);
    console.log("validation",LoginValidation(credentials));
    // dispatch(login(credentials));
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
        console.log("loggedIn", loggedIn.loggedIn);
         dispatch(login(credentials)).then(res => {
            if (loggedIn) {
                history.push("/");
            }
            else if(!loggedIn)
            {
               toast.error("Invalid Credentials!", {
                   position: "top-right",
                   theme: "colored",
               });
            }
            
         })
         
        //   if(!loggedIn)
        //   {
            
        //   }
    }
    // if (loggedIn.loggedIn === true) {
    //   history.push("/");
    // }
    // console.log("errors", Object.keys(errors).length, Object.keys(errors).length === 0, dataIsCorrect);
  };

//   useEffect(() => {
//     if (Object.keys(errors).length === 0 && dataIsCorrect === true) {
//         console.log("loggedIn", loggedIn.loggedIn);
//          dispatch(login(credentials));
//           if (loggedIn.loggedIn) {
//             history.push("/");
//           }
//           else {
//               console.log("check");
//             toast.error("Invalid Credentials!", {
//               position: "top-right",
//               theme: "colored",
//             });
//           }
//     }
//   }, [errors]);

  return (
    <>
      <Container className="mt-3">
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
                {errors.email && <p className="error">{errors.email}</p>}

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
                {errors.password && <p className="error">{errors.password}</p>}

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
      <ToastContainer/>
    </>
  );
};

const mapStateToProp = (state) => {
  return {
    loggedIn: state.shop.loggedIn,
  };
};

export default connect(mapStateToProp)(Login);
