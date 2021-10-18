import React, { useEffect, useState, useSelector } from "react";
import Header from "./Header";
import { Container, Row, Col, Card } from "react-bootstrap";
import { connect } from "react-redux";
import "../App.css";
import Footer from "./Footer";

const Wishlist = ({ wishlist }) => {
  const [totalItems, setTotalItems] = useState(0);

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
            {wishlist.length != 0 ? (
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
