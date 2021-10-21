import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import "../App.css";
import Footer from "./Footer";
import Swal from "sweetalert2";
import { removeFromWishlist } from "../actions";


const Wishlist = ({ wishlist }) => {
  const dispatch = useDispatch();
  const [totalItems, setTotalItems] = useState(0);

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
          dispatch(removeFromWishlist(res));
          return;
        }
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  useEffect(() => {
    const wishlistItems = wishlist.length;
    setTotalItems(wishlistItems);
  }, [wishlist, totalItems, setTotalItems]);

  return (
    <>
      <Header />
      <Container className="pt-5 pb-5 mt-3 container-bg mb-3">
        <Row>
          <Col sm={12} lg={{ span: 8, offset: 2 }}>
            <Card className="mb-3">
              <h2 className="text-center p-2 heading-font">
                My WishList ({totalItems})
              </h2>
            </Card>
            {wishlist.length !== 0 ? (
              <>
                <Card>
                  {wishlist.map((element) => {
                    return (
                      <Row className="p-3">
                        <Col lg={5}>
                          <div key={element.data.id}>
                            <img
                              variant="top"
                              src={element.data.product_image}
                              className="heightImage"
                            />
                          </div>
                        </Col>
                        <Col lg={{ span: 6 }}>
                          <h4 className="heading-font mobile-center">
                            {element.data.name}
                          </h4>
                          <p className="mobile-center">
                            Price: ₹ {element.data.price}{" "}
                          </p>
                          <Button
                            className="mt-3 blue-btn"
                            onClick={() => {
                              ConfirmBox(element.data);
                            }}
                          >
                          Delete
                          </Button>
                        </Col>
                      </Row>
                    );
                  })}
                </Card>
              </>
            ) : (
              <>
                <Card className="pt-5 pb-5 text-center">
                  <h4 className="heading-font pb-3">Your Wishlist is empty</h4>
                  <div>
                    <img
                      src="../images/wishlist.png"
                      className="no-wishlist"
                    />
                  </div>
                </Card>
              </>
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

const mapStateToProp = (state) => {
  return {
    wishlist: state.shop.wishlist,
  };
};

export default connect(mapStateToProp)(Wishlist);
