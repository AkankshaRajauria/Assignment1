import React from "react";
import Skeleton from "react-loading-skeleton";
import { Card, Row, Col } from "react-bootstrap";

const cards = [1, 2, 3, 4, 5, 6, 7, 8];

const CardSkeleton = () => {
  return (
    <div>
      <Row>
        {cards.map((event) => (
          <Col lg={3} md={6}>
            <Card className="card-4 p-2 m-3 mt-1" key={event}>
              <Skeleton square={true} height={250} width={270} />
              <Card.Body>
                <Card.Title>
                  <Skeleton />
                </Card.Title>
                <Card.Text>
                  <Skeleton />
                </Card.Text>
                <Card.Text>
                  <Skeleton />
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <Skeleton rectangle={true} width={70} height={40} />
                  <Skeleton rectangle={true} width={70} height={40} />
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardSkeleton;
