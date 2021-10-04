import React, {useEffect, useState} from "react";
import ReactBootstrap, {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Badge,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {addToCart} from '../actions/index';
import store from "../store";
import { connect } from "react-redux";


const Header = ({cart, onChange}) => {

  const [cartCount, setCartCount] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.id.quantity;
    });
    setCartCount(count);
  }, [cart, cartCount])

  return (
    <div>
      <Navbar expand="lg" variant="dark" style={{backgroundColor:"#4b286d"}}>
        <Navbar.Brand className="mx-3">
        <Link to="/" style={{textDecoration: "none", color:"white"}}> E-Cart</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-between">
          <Form className="d-flex">
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
              onChange={onChange}
            />
            <Button
              variant="outline-secondary"
              style={{ backgroundColor: "#c2c2c2" }}
            >
              <i className="fas fa-search fa-x" style={{ color: "white" }}></i>
            </Button>
          </Form>
          <Nav
            className="mr-auto my-2 my-lg-0 d-flex"
            navbarScroll
            style={{ paddingRight: "20px", color: "white", maxHeight: "100px"  }}
          >
            <NavDropdown title="Akanksha" id="navbarScrollingDropdown">
              <NavDropdown.Item>My Profile</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              <i className="fas fa-heart" style={{ color: "#c2c2c2" }}></i>
            </Nav.Link>
            <Nav.Link>
              <Link to="/cart">
                <i
                  className="fas fa-shopping-cart"
                  style={{ color: "#c2c2c2", position: "relative" }}
                ></i>
                <Badge
                  pill
                  bg="light"
                  text="dark"
                  className="pb-2"
                  style={{ position: "absolute", top: "3px" }}
                >
                  {cartCount}
                </Badge>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

const mapStateToProp = state => {
  return {
    cart: state.shop.cart
  }
}

export default connect(mapStateToProp)(Header);
