import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  removeFromCart,
  getProducts,
  getCartItems,
} from "../actions/index";
import Header from "./Header";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SkeletonTheme } from "react-loading-skeleton";
import CartSkeleton from "./Skeleton/CartSkeleton";
import Footer from "./Footer";
import Swal from "sweetalert2";

const Cart = ({ cart, pagfilter, isLoading }) => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.shop.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [cartItems, setCartItems] = useState(cart);
  const [isloading, setIsloading] = useState([]);

  useEffect(() => {
    setIsloading(isLoading);
  }, [cart]);

  useEffect(() => {
    dispatch(getProducts(pagfilter));
    dispatch(getCartItems());
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


  const ConfirmBox = async (res) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        if (result) {
          dispatch(removeFromCart(res));
          return;
        }
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });

  };

  return (
    <>
      <Header count={cartItems.length} />
      <SkeletonTheme>
        {isloading ? (
          <CartSkeleton />
        ) : (
          <>
            <Container className="pt-5 pb-5 mb-5 container-bg page-margin">
              <Row>
                <Col lg={8} md={12}>
                  <Card className="mb-3">
                    <h4 className="text-center p-2 heading-font">
                      My Cart ({totalItems})
                    </h4>
                  </Card>
                  <Card className="mb-3">
                  <Row className="p-3 place-center">

                    {list.length !== 0 ? (
                      <>
                        {list.map((element) => {
                          return (
                            <div className="row p-3 place-center" key={element.id}>
                              <Col lg={4} md={4} sm={12}>
                                <div>
                                  <Card.Img
                                    variant="top"
                                    src={element.product_image}
                                    className="card-height"
                                  />
                                </div>
                              </Col>
                              <Col lg={4} md={4} sm={6}>
                                <h4 className="heading-font">{element.name}</h4>
                                <p>Price: ₹ {element.price} </p>
                              </Col>

                              <Col lg={4} md={4} sm={6}>
                                <div className="d-flex center-flex">
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
                                    className="input-style-1"
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
                                  className="mt-3 blue-btn"
                                  onClick={() => {
                                    ConfirmBox(element.id);
                                  }}
                                >
                                  Delete
                                </Button>
                              </Col>
                            </div>
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
                              alt="cart-img"
                            />
                          </div>
                        </Card>
                      </>
                    )}
                    </Row>
                  </Card>
                </Col>
                <Col lg={4} md={12}>
                  <Card>
                    <h4 className="text-center p-2 heading-font">
                      Price Detail
                    </h4>
                    {list.map((element) => {
                      return (
                        <Card.Header className="d-flex justify-content-between" key={element.id}>
                          <h6 className="heading-font">
                            {element.name} x {element.quantity}
                          </h6>
                          <div>₹ {element.price * element.quantity}</div>
                        </Card.Header>
                      );
                    })}
                    <Card.Body className="d-flex justify-content-between">
                      <h6>Total Amount : </h6>
                      <h6>₹ {totalPrice}</h6>
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
    isLoading: state.shop.cartLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (id, value) => dispatch(increment(id)),
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(Cart);
