import React, { useEffect, useState, useSelector } from "react";
import Header from "./Header";
import { Container, Row, Col, Card } from "react-bootstrap";
import { connect } from "react-redux";
import "../App.css";

const Wishlist = ({ wishlist }) => {
  // const list = useSelector((state) => state.shop.wishlist);
  // console.log("list", );
  // const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    const wishlistItems = wishlist.length;
    setTotalItems(wishlistItems);
  }, [wishlist, totalItems, setTotalItems]);
  console.log("wishlist", wishlist);

  return (
    <>
      <Header />
      <Container
        className="pt-5 pb-5 mt-3"
        style={{ backgroundColor: "#c2c2c2", borderRadius: "10px" }}
      >
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
                        <Col>
                          <Card key={element.data.id}>
                            <Card.Img
                              variant="top"
                              src={element.data.product_image}
                              style={{ height: "150px" }}
                            />
                          </Card>
                        </Col>
                        <Col>
                          <h4 className="heading-font">{element.data.name}</h4>
                          <p>Price: ₹ {element.data.price} </p>
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
                      style={{ width: "200px", height: "200px" }}
                    />
                  </div>
                </Card>
              </>
            )}
          </Col>
        </Row>
      </Container>
      {/* <ToastContainer/> */}
    </>
  );
};

const mapStateToProp = (state) => {
  return {
    wishlist: state.shop.wishlist,
  };
};

export default connect(mapStateToProp)(Wishlist);
