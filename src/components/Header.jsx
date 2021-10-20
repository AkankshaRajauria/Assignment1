import React, { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Badge,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import "../App.css";
import { search } from "../actions/index";

const Header = ({ cart, pagfilter }) => {
  const [input, setInput] = useState("");

  const searchFunc = (e) => {
    e.preventDefault();
    dispatch(search(input, pagfilter));
  };

  useEffect(() => {
    dispatch(search(input, pagfilter));
  }, [input]);

  const dispatch = useDispatch();

  return (
    <>
      <Navbar expand="lg" variant="dark" className="dark-blue-bg">
        <Navbar.Brand className="mx-3">
          <Link to="/"> E-Cart</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-between">
          <Form className="d-flex searchspace" onSubmit={searchFunc}>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
            />
            <Button variant="outline-secondary" className="bg-purple">
              <i className="fas fa-search fa-x text-white"></i>
            </Button>
          </Form>
          <Nav
            className="mr-auto my-2 my-lg-0 d-flex p-sm nav-style"
            navbarScroll
          >
            <NavDropdown
              title={
                <>
                  <span>AR </span>
                </>
              }
              id="navbarScrollingDropdown"
              className="user-avatar"
            >
              <NavDropdown.Item>
                <Link to="/order" className="heading-font">
                  My Orders
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/charts" className="heading-font">
                  Analytics
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/login" className="heading-font">
                  Logout
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/wishlist">
              <i className="fas fa-heart purple-font"></i>
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <i className="fas fa-shopping-cart purple-font position-relative"></i>
              <Badge
                pill
                bg="light"
                text="dark"
                className="pb-2 positionCounter"
              >
                {cart.length}
              </Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

const mapStateToProp = (state) => {
  return {
    cart: state.shop.cart,
    pagfilter: state.shop.pagfilter,
  };
};

export default connect(mapStateToProp)(Header);
