import React from 'react'
import Skeleton from "react-loading-skeleton";
import { Carousel, Row, Col} from "react-bootstrap";


const CarouselSkeleton = () => {
    return (
        <div>
            <Row>
               <Col lg={12}> 
                <Carousel>
                    <Carousel.Item><Skeleton height={400} /></Carousel.Item>
                </Carousel>
               </Col>
            </Row>
        </div>
    )
}

export default CarouselSkeleton
