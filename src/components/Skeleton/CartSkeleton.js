import React from "react";
import Skeleton from "react-loading-skeleton";
import { Card, Row, Col, Container } from "react-bootstrap";

const CartSkeleton = () => {
  return (
    <div>
      <Container className="mt-5 pt-5 pb-5">
        <Row>
          <Col sm={8}>
            <Card className="mb-3">
              <h4 className="text-center p-2 heading-font">
                <Skeleton />
              </h4>
            </Card>
            <Card>
              <Row className="p-3">
                <Col>
                  <Card>
                    <Skeleton height={170} />
                  </Card>
                </Col>
                <Col>
                  <h4 className="heading-font">
                    <Skeleton />
                  </h4>
                  <h6>
                    <Skeleton />{" "}
                  </h6>
                </Col>

                <Col>
                  <div className="d-flex">
                    <Skeleton className="mr-2 p-3" height={35} />

                    <Skeleton className="mr-2 p-3" height={35} />

                    <Skeleton className="ml-2 p-3" height={35} />
                  </div>

                  <Skeleton className="mt-3" height={40} width={70} />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <h4 className="text-center p-2 heading-font">
                <Skeleton />
              </h4>
              <Card.Header className="d-flex justify-content-between">
                <h6 className="heading-font">
                  <Skeleton />
                </h6>
                <h6>
                  <Skeleton />
                </h6>
              </Card.Header>
              <Card.Body className="d-flex justify-content-between">
                <h5>
                  <Skeleton />
                </h5>
                <h5>
                  <Skeleton />
                </h5>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CartSkeleton;
