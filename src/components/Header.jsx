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
import "../App.css";
import { Items } from "./Card";


const Header = ({cart, onChange}) => {

  const [cartCount, setCartCount] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    let count = 0;
    let temp=[];
    for(let i=0;i<cart.length;i++)
    {
      if(temp.length==0)
      {
        temp.push(cart[i]);
      }
      else{
     // var flag=false;
           for(let j=0;j<temp.length;j++)
           {
             if(temp[j].id.id==cart[i].id.id)
                continue;
                else
                temp.push(cart[i]);

           }
      }
    }
    // cart.forEach((item) => {
    //   console.log("item",item);
    //   count += item.id.quantity;
    // });
    setCartCount(temp.length);
  }, [cart])

  return (
    <div>
      <Navbar expand="lg" variant="dark" style={{backgroundColor:"#4b286d"}}>
        <Navbar.Brand className="mx-3">
        <Link to="/" style={{textDecoration: "none", color:"white"}}> E-Cart</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-between">
          <Form className="d-flex searchspace">
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
            className="mr-auto my-2 my-lg-0 d-flex p-sm"
            navbarScroll
            style={{ paddingRight: "20px", color: "white", maxHeight: "100px"  }}
          >
            <NavDropdown title={
              <><span>Akanksha </span><i className="fas fa-user"></i></>
            }  id="navbarScrollingDropdown">
              <NavDropdown.Item>
                <Link to="/order"  className="heading-font" style={{textDecoration: "none", color: "#4b286d"}}>My Orders</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Link to="/wishlist">
                <i className="fas fa-heart" style={{ color: "#c2c2c2" }}></i>
              </Link>
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
                  className="pb-2 positionCounter"
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
