import axios from "axios";
import React, { useState, useEffect } from "react";
import { Col, Row, Card, Container } from "react-bootstrap";
import { useParams } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

const ProductDescription = (props) => {
  const [cardData, setCardData] = useState([]);

  const fetchProductDetail = () => {
    const res = axios
      .get(
        `https://615a89444a360f0017a810f1.mockapi.io/Product/${props.match.params.id}`
      )
      .then((res) => {
        setCardData(res.data);
      });
  };

  useEffect(() => {
    fetchProductDetail();
  }, []);
  return (
    <>
      <Header />
      <Container className="pt-5 pb-5 mt-3 container-bg mb-3">
        <Row>
          <Col lg={{ span: 8, offset: 2 }} sm={12}>
            <Card className="mb-3">
              <h4 className="text-center p-2 heading-font">{cardData.name}</h4>
            </Card>
            <Card className="card-4 text-center" key={cardData.id}>
              <Card.Img
                variant="top"
                className="heightClass image-size"
                src={cardData.product_image}
              />
              <Card.Body>
                <Card.Title className="heading-font text-capitalize">
                  {cardData.description}
                </Card.Title>
                <Card.Text>
                  <div className="heading-font">Price : ₹ {cardData.price}</div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ProductDescription;
