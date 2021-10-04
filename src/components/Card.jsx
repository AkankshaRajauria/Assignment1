import React, {useState} from "react";
import { Card, Button, Row, Col, CardGroup, Toast } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import {addToCart} from '../actions/index';
import { ToastContainer, toast } from 'react-toastify';
import Skeleton from 'react-loading-skeleton';
import 'react-toastify/dist/ReactToastify.css';
import "../App.css";

export const Items = ({ cardData }) => { 
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const notify = () => {
    toast.success("Item Added to the Cart",{position: "top-center", theme: "colored"})
  };
  

  return (
    <>
    <Row style={{ backgroundColor: "#c2c2c2" }}>
      {cardData.map((element) => {
        return (
          <>
            <Col lg={3} md={6} className="p-3">
              <Card className="card-4">
                <Card.Img
                  variant="top"
                  className="heightClass"
                  src={element.product_image}
                  style={{ width: "100%", height: "18vw" }}
                />
                <Card.Body>
                  <Card.Title className="heading-font">{element.name}</Card.Title>
                  <Card.Text className="text-capitalize">{element.description}</Card.Text>
                  <Card.Text>Price : ₹ {element.price}</Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button variant="warning" onClick={() => {notify(); dispatch(addToCart(element), setInputData(''))}}>
                      <i className="fas fa-shopping-cart"></i> Add
                    </Button>
                    <Button
                      variant="warning"
                      style={{ color: "white", backgroundColor: "#ff6a00" }}
                    >
                      <i className="fas fa-shopping-bag"></i> Buy
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </>
        );
      })}
    </Row>
    <ToastContainer type="success"/>
    </>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addToCart : (id) => dispatch(addToCart(id))
//   }
// }

export default Items;
