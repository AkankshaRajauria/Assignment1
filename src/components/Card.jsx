import React, {useState} from "react";
import { Card, Button, Row, Col, CardGroup } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import {addToCart} from '../actions/index';
// import { connect } from "react-redux";
import "./style.css";

export const Items = ({ cardData }) => { 
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if(itemToBeSearch) setProductsToBeDisplayed(cardData.filter((e) => e.name.toLowerCase().includes(itemToBeSearch.toLowerCase())));
  //   else setProductsToBeDisplayed(products);
  // }, [itemToBeSearch, products])
  return (
    <>
    <Row style={{ backgroundColor: "lightgray" }}>
      {cardData.map((element) => {
        return (
          <>
            <Col lg={3} md={6} className="p-3">
              <Card className="card-4">
                <Card.Img
                  variant="top"
                  className="heightClass"
                  src={element.image}
                  style={{ width: "100%", height: "18vw" }}
                />
                <Card.Body>
                  <Card.Title>{element.name}</Card.Title>
                  <Card.Text>{element.description}</Card.Text>
                  <Card.Text>Price : ₹ {element.price}</Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button variant="warning" onClick={() => dispatch(addToCart(element), setInputData(''))}>
                      <i class="fas fa-shopping-cart"></i> Add
                    </Button>
                    <Button
                      variant="warning"
                      style={{ color: "white", backgroundColor: "#ff6a00" }}
                    >
                      <i class="fas fa-shopping-bag"></i> Buy
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </>
        );
      })}
    </Row>
    </>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addToCart : (id) => dispatch(addToCart(id))
//   }
// }

export default Items;
