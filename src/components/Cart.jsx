import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  removeFromCart,
  getProducts,
} from "../actions/index";
import Header from "./Header";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirm } from "react-confirm-box";
import ApiData from "./Api/ApiData";
import { SkeletonTheme } from "react-loading-skeleton";
import CartSkeleton from "./Skeleton/CartSkeleton";
import Footer from "./Footer";

const Cart = ({ cart, product, pagfilter, isLoading }) => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.shop.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [input, setInput] = useState(product.quantity);
  const [cartItems, setCartItems] = useState(cart);
  const [isloading, setIsloading] = useState([]);

  useEffect(() => {
    setIsloading(isLoading);
  }, [cart]);

  useEffect(() => {
    dispatch(getProducts(pagfilter));
    ApiData.get("/Cart").then((res) => {
      dispatch({
        type: "ADD_TO_CART",
        payload: res.data,
      });
    });
  }, [dispatch]);

  useEffect(() => {
    let items = 0;
    let price = 0;

    list.forEach((item) => {
      items += item.quantity;
      price += item.quantity * item.price;
    });

    setTotalItems(list.length);
    setTotalPrice(price);
  }, [cart]);

  const options = {
    labels: {
      confirmable: "Confirm",
      cancellable: "Cancel",
    },
  };

  const ConfirmBox = async (res) => {
    const result = await confirm("Are you sure?", options);
    if (result) {
      dispatch(removeFromCart(res));
      return;
    }
  };

  return (
    <>
      <Header count={cartItems.length} />
      <SkeletonTheme>
        {isLoading ? (
          <CartSkeleton />
        ) : (
          <>
            <Container className="mt-5 pt-5 pb-5 mb-5 container-bg">
              <Row>
                <Col sm={8}>
                  <Card className="mb-3">
                    <h4 className="text-center p-2 heading-font">
                      My Cart ({totalItems})
                    </h4>
                  </Card>
                  <Card className="mb-3">
                    {list.length !== 0 ? (
                      <>
                        {list.map((element) => {
                          return (
                            <Row className="p-3">
                              <Col>
                                <Card key={element.id}>
                                  <Card.Img
                                    variant="top"
                                    src={element.product_image}
                                    className="card-height"
                                  />
                                </Card>
                              </Col>
                              <Col>
                                <h4 className="heading-font">{element.name}</h4>
                                <p>Price: ₹ {element.price} </p>
                              </Col>

                              <Col>
                                <div className="d-flex">
                                  <Button
                                    disabled={
                                      element.quantity > 1 ? "" : "disabled"
                                    }
                                    variant="secondary"
                                    size="sm"
                                    onClick={() =>
                                      dispatch(decrement(element.id))
                                    }
                                  >
                                    <i className="fas fa-minus"></i>
                                  </Button>
                                  <input
                                    type="text"
                                    placeholder={element.quantity}
                                    className="input-style"
                                  />
                                  <Button
                                    variant="secondary"
                                    size="sm"
                                    onClick={() =>
                                      dispatch(increment(element.id))
                                    }
                                  >
                                    <i className="fas fa-plus"></i>
                                  </Button>
                                </div>

                                <Button
                                  // variant="danger"

                                  className="mt-3 blue-btn"
                                  onClick={() => {
                                    ConfirmBox(element.id);
                                  }}
                                >
                                  Delete
                                </Button>
                              </Col>
                            </Row>
                          );
                        })}
                      </>
                    ) : (
                      <>
                        <Card className="pt-5 pb-5 text-center">
                          <h4 className="heading-font pb-3">
                            Your Cart is Empty
                          </h4>
                          <div>
                            <img
                              src="../images/cart-empty.jpg"
                              className="cart-img"
                            />
                          </div>
                        </Card>
                      </>
                    )}
                  </Card>
                </Col>
                <Col sm={4}>
                  <Card>
                    <h4 className="text-center p-2 heading-font">
                      Price Detail
                    </h4>
                    {list.map((element) => {
                      return (
                        <Card.Header className="d-flex justify-content-between">
                          <h6 className="heading-font">
                            {element.name} x {element.quantity}
                          </h6>
                          <p>₹ {element.price * element.quantity}</p>
                        </Card.Header>
                      );
                    })}
                    <Card.Body className="d-flex justify-content-between">
                      <h5>Total Amount : </h5>
                      <h5>₹ {totalPrice}</h5>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
            <ToastContainer />
          </>
        )}
      </SkeletonTheme>
      <Footer />
    </>
  );
};

const mapStateToProp = (state) => {
  return {
    cart: state.shop.cart,
    product: state.shop.products,
    pagfilter: state.shop.pagfilter,
    isLoading: state.shop.saved,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (id, value) => dispatch(increment(id)),
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(Cart);
