import React, {useState, useEffect} from "react";
import { Card, Button, Container, Row, Col, Form } from "react-bootstrap";
import { useSelector, useDispatch} from "react-redux";
import {decrement, increment, removeFromCart} from '../actions/index';
import Header from "./Header";
import { connect } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({cart, product}) => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.shop.cart); 
  console.log("list", list);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [input, setInput] = useState(product.quantity);
  const notify = () => {
    toast.success("Item Removed from the Cart",{position: "top-center", theme: "colored"})
  };
  

  const onChangeHandler = (e) => {
    console.log(e.target.value);
  }

  // const incrementHandler= (e) => {
  //   console.log(e.target.value);
  // }
  // const [quantity, setQuantity] = useState(0);

  // useEffect(() => {
  //   let quantity = 0;
  //   cart.forEach((item) => {
  //     quantity += item.id.quantity;
  //   });
  //   setQuantity(quantity);
  // }, [cart, quantity])

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.id.quantity;
      price += item.quantity * item.id.price;
      console.log("price", items, item.id.price);

    });
    setTotalItems(items);
    setTotalPrice(price);
    
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems])

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col sm={7}>
            <Card>
              <h4 className="text-center p-2 heading-font">My Cart ({totalItems})</h4>
              {list.map((element) => {
                return (
                  <Row className="p-3">
                    <Col>
                      <Card>
                        <Card.Img
                          variant="top"
                          src={element.id.product_image}
                          style={{ height: "150px" }}
                        />
                      </Card>
                    </Col>
                    <Col>
                      <h4 className="heading-font">{element.id.name}</h4>
                      <p>Price: ₹ {element.id.price} </p>
                    </Col>

                    <Col>
                      
                      <div className="d-flex">
                        <Button disabled={element.quantity > 1 ? '' : 'disabled'} variant="secondary" size="sm" onClick={()=> dispatch(decrement(element.id), setInput(''))}>
                          <i className="fas fa-minus"></i>
                          </Button>
                        <input type="text" placeholder={element.quantity} style={{ width: "40px", marginLeft: "5px",marginRight: "5px" }}/>
                        <Button variant="secondary" size="sm" onClick={()=> dispatch(increment(element.id), setInput(''))}>                        
                          <i className="fas fa-plus"></i>
                        </Button>

                      </div>
                      
                      <Button variant="danger" className="mt-3" onClick={() => {dispatch(removeFromCart(element.id),
                        setInputData('')); notify()}}>
                        Delete
                      </Button>
                    </Col>
                  </Row>
                );
              })}
            </Card>
          </Col>
          <Col sm={1}></Col>
          <Col sm={4}>
            <Card>
            <h4 className="text-center p-2 heading-font">Price Detail</h4>
             {list.map((element) => {
               return (
                <Card.Header className="d-flex justify-content-between">
                  <h6 className="heading-font">{element.id.name} x {element.quantity}</h6>
                  <p>₹ {element.id.price * element.quantity}</p>
                </Card.Header>
               )
             })}
              <Card.Body className="d-flex justify-content-between"><h5>Total Amount : </h5><h5>₹ {totalPrice}</h5></Card.Body>

            </Card>
          </Col>
        </Row>
      </Container>
      <ToastContainer/>
    </>
  );
};

const mapStateToProp = state => {
  return {
    cart: state.shop.cart,
    product: state.shop.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (id, value) => dispatch(increment(id))
  }

}

export default connect(mapStateToProp, mapDispatchToProps)(Cart);
