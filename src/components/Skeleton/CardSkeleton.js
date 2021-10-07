import React from "react";
import Skeleton from "react-loading-skeleton";
import { Card } from "react-bootstrap";

const CardSkeleton = () => {
  return (
    <div>
          <Card className="card-4 p-2 m-3 mt-1">
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
    </div>
  );
};

export default CardSkeleton;
