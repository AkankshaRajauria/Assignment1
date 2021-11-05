import React, { useState, useEffect } from "react";
import { Container, Row, Col, Accordion, Card, Form } from "react-bootstrap";
import Header from "./Header";
import "../App.css";
import OrderData from "./OrderData";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import Footer from "./Footer";
import moment from "moment";
import { getProducts } from "../actions";
import { connect, useDispatch } from "react-redux";
import ApiData from "./Api/ApiData";

const Order = (pagfilter) => {
  const [orderData, setOrderData] = useState(OrderData);
  const dispatch = useDispatch();

  useEffect(() => {
    ApiData.get("/Cart").then((res) => {
      dispatch({
        type: "ADD_TO_CART",
        payload: res.data,
      });
    });
    setOrderData(OrderData)
  }, [dispatch]);

  const customRanges = () => {
    return {
      Today: [moment(), moment()],
      Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
      "Last 7 Days": [moment().subtract(6, "days"), moment()],
      "Last 30 Days": [moment().subtract(29, "days"), moment()],
      "Last 90 Days": [moment().subtract(89, "days"), moment()],
      "Last 365 Days": [moment().subtract(364, "days"), moment()],
    };
  };

  const handleCallback = (start, end) => {
    setOrderData((data) =>
      data.filter(
        (orderData) =>
          orderData.date > new Date(start).toISOString() &&
          orderData.date < new Date(end).toISOString()
      )
    );
  };

  return (
    <>
      <Header />
      <Container className="pt-5 pb-5 page-margin container-bg mb-3">
        <Row>
          <Col sm={12}>
            <Row className="justify-content-center">
              <Col lg={6} md={6}>
                <Card className="mb-3">
                  <h2 className="text-center p-2 heading-font">My Orders</h2>
                </Card>
              </Col>
            </Row>
            <Row className="justify-content-end">
              <Col sm={3} className="width-box">
                <DateRangePicker
                  initialSettings={{
                    startDate: new Date,
                    endDate: new Date,
                    showCustomRangeLabel: true,
                    alwaysShowCalendars: true,
                    showDropdowns: true,
                    ranges: customRanges(),
                    maxDate: moment(),
                  }}
                  onCallback={handleCallback}
                >
                  <Form.Control type="text" />
                </DateRangePicker>
              </Col>
            </Row>

            <div className="d-flex justify-content-end mb-3"></div> 
            {orderData.length !== 0 ? (
              <>
                {orderData.map((elem) => {
                  return (
                      <Accordion defaultActiveKey={1} key={elem.id}>
                        <Accordion.Item eventKey={elem.id} >
                          <Accordion.Header className="heading-font dark-blue-bg">
                            {elem.name}
                          </Accordion.Header>
                          <Accordion.Body>
                            <Row>
                              <Col lg={4} className="text-center">
                                <img src={elem.image} className="order-img" alt="orders-img" />
                              </Col>
                              <Col lg={8} className="center-align">
                                <div>
                                  <h3 className="heading-font">
                                    {elem.description}
                                  </h3>
                                  <h6>Cost ₹ {elem.price}</h6>
                                  <h6>Quantity: {elem.quantity}</h6>
                                  <h6>
                                    Ordered On:{" "}
                                    {`${moment(elem.date).format(
                                      "MMM Do YYYY"
                                    )}`}
                                  </h6>
                                </div>
                              </Col>
                            </Row>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                  );
                })}
              </>
            ) : (
              <>
                <Card className="pt-5 pb-5 text-center">
                  <div>
                    <img src="../images/no_order.png" className="no-order" alt="no-order" />
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
    pagfilter: state.shop.pagfilter,
  };
};

export default connect(mapStateToProp)(Order);
