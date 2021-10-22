import React, {useState, useEffect} from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { register } from "../actions";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Validation from "./Validation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {

    const dispatch = useDispatch()
   
    const [credentials, setcredentials] = useState({username: "",email: "",password: ""});
    const [errors, setErrors] = useState([])
    const [dataIsCorrect, setdataIsCorrect] = useState(false)

    const SignUpHandler = (e) => {
        e.preventDefault();
        setcredentials({...credentials, [e.target.name]: e.target.value});
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setErrors(Validation(credentials))
        setdataIsCorrect(true);
        // setcredentials({ username: "", email: "", passwords: "" });
    };

    useEffect(() => {
      if(Object.keys(errors).length === 0 && dataIsCorrect === true) {
         dispatch(register(credentials));
          toast.success(" Successfully Account Created!", {
            position: "top-right",
            theme: "colored",
          });
          setdataIsCorrect(false);
                  setcredentials({ username: "", email: "", password: "" });

      }

                        // setcredentials({ username: "", email: "", password: "" });

    }, [errors])

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
                  {errors.username && <p className="error">{errors.username}</p>}
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
                    onChange={SignUpHandler}
                  />
                  {errors.password && <p className="error">{errors.password}</p>}

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
      <ToastContainer/>
    </>
  );
};

export default SignUp;
