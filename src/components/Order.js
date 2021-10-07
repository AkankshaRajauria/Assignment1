import React, { useState } from "react";
import { Container, Row, Col, Button, Accordion, Card, Form } from "react-bootstrap";
import Header from "./Header";
import "../App.css";
import OrderData from "./OrderData";
import DateRangePicker from "react-bootstrap-daterangepicker";
import 'bootstrap-daterangepicker/daterangepicker.css';



const Order = () => {
  const [orderData, setOrderData] = useState(OrderData);

  const handleCallback = (start, end) => {
    setOrderData((data) => data.filter((orderData) => orderData.date > new Date(start).toISOString() && orderData.date < new Date(end).toISOString()))
  }

  return (
    <>
      <Header />
      <Container
        className="pt-5 pb-5 mt-3"
        style={{ backgroundColor: "#c2c2c2", borderRadius: "10px" }}
      >
        <Row>
          <Col sm={12} lg={{ span: 8, offset: 2 }}>
            <Card className="mb-5">
              <h2 className="text-center p-2 heading-font">My Orders</h2>
            </Card>

            <div className="d-flex justify-content-end mb-3">
            <div>
                <DateRangePicker initialSettings={{ startDate: new Date('2020'), endDate: new Date() }} onCallback={handleCallback}>
                    <Form.Control type="text" />
                </DateRangePicker>
            </div>
        </div>
            {orderData.map((elem) => {
              return (
                <>  
                <Accordion defaultActiveKey={1}>
                  <Accordion.Item eventKey={elem.id} key={elem.id}>
                    <Accordion.Header
                      className="heading-font"
                      style={{ backgroundColor: "#4b286d" }}
                    >
                      {elem.name}
                    </Accordion.Header>
                    <Accordion.Body>
                        <Row>
                        <Col lg={4}>
                            <img src={elem.image} style={{width: "200px", height: "13vw"}}/>
                        </Col>
                        <Col lg={8} style={{display: "flex",alignItems: "center", justifyContent: "center"}}>
                            <h3 >{elem.description}</h3>
                        </Col>

                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                </>
              );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Order;
