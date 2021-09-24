import React from "react";
import { Card, Button, Row, Col, CardGroup } from "react-bootstrap";
import "./style.css";

export const Items = ({ cardData }) => {
  console.log(cardData);
  return (
    <>
      {cardData.map((element) => {
        return (
          <>
            <div className="col-md-3 pt-2">
              <Card className="card-4">
                <Card.Img variant="top" className="heightClass" src={element.image} style={{width: "100%",
    height: "18vw"}}/>
                <Card.Body>
                  <Card.Title>{element.name}</Card.Title>
                  <Card.Text>
                    {element.description}
                  </Card.Text>
                  <Card.Text>
                    Price : {element.price}
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                  <Button variant="warning"><i class="fas fa-shopping-cart"></i> Add</Button>
                  <Button variant="warning" style={{color: "white", backgroundColor: "#ff6a00"}}><i class="fas fa-shopping-bag"></i> Buy</Button>

                  </div>
                </Card.Body>
              </Card>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Items;
