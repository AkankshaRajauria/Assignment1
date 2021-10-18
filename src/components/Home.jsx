import React, { useState, useEffect } from "react";
import { Row, Card } from "react-bootstrap";
import Items from "./Card";
import Carousels from "./Carousels";
import Header from "./Header";
import Footer from './Footer'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import CardSkeleton from "./Skeleton/CardSkeleton";
import CarouselSkeleton from "./Skeleton/CarouselSkeleton";
import { getProducts } from "../actions";
import { connect, useDispatch } from "react-redux";
import ApiData from "./Api/ApiData";

const Home = ({ isLoading, pagfilter, products }) => {
  const [result, setResult] = useState([]);
  const [isloading, setIsloading] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsloading(isLoading);
    setResult(products);
  }, [products]);

  useEffect(() => {
    dispatch(getProducts(pagfilter));
    ApiData.get("/Cart").then((res) => {
      dispatch({
        type: "ADD_TO_CART",
        payload: res.data,
      });
    });
  }, [dispatch]);

  

  return (
    <>
      <Header/>
      <SkeletonTheme>
        {isloading ? (
          <>
            <Row>
              <CarouselSkeleton />
              <CardSkeleton />
            </Row>
          </>
        ) : (
          <>
            <Carousels />
            {products.length !== 0 ? (
              <>
                <Items cardData={result} pagfilter={pagfilter} />
                <Footer/>
              </>
            ) : (
              <>
                <Card className="pt-5 pb-5 text-center">
                  <div>
                    <img
                      src="../images/no-data.png" className="size"
                    />
                  </div>
                </Card>
              </>
            )}
          </>
        )}
      </SkeletonTheme>
    </>
  );
};

const mapStateToProp = (state) => {
  return {
    products: state.shop.filteredArr,
    isLoading: state.shop.saved,
    pagfilter: state.shop.pagfilter,
  };
};

export default connect(mapStateToProp)(Home);
