import React from 'react'
import Skeleton from "react-loading-skeleton";
import { Carousel} from "react-bootstrap";


const CarouselSkeleton = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item><Skeleton height={400} width={2000} /></Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselSkeleton
