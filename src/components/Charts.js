import React from "react";
import Header from "./Header";
import { Chart } from "react-google-charts";
import { Card, Row, Col, Container } from "react-bootstrap";
import Footer from "./Footer";

const Charts = () => {
  return (
    <>
      <Header />
      <Container className="pt-5 pb-5 mt-3 container-bg mb-3">
        <Row className="mb-5">
          <Col sm={12} lg={{ span: 6, offset: 3 }}>
            <Card className="mb-3">
              <h2 className="text-center p-2 heading-font">Analytics</h2>
            </Card>
            <Card className="text-center p-4 mt-3">
              <Chart
                chartType="Sankey"
                loader={<div>Loading Chart</div>}
                data={[
                  ["From", "To", "Price"],
                  ["Watches", "Lavie", 3000],
                  ["Watches", "Puma", 5000],
                  ["Watches", "Nike", 6000],
                  ["Shoes", "Lavie", 2000],
                  ["Shoes", "Puma", 3000],
                  ["Shoes", "Nike", 3000],
                ]}
                rootProps={{ "data-testid": "1" }}
              />
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Charts;
