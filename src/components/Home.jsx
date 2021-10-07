import React, { useState, useEffect } from "react";
import { Row, Card } from "react-bootstrap";
import Items from "./Card";
// import CardData from './CardData'
import Carousels from "./Carousels";
import Header from "./Header";
import Products from "./Products";
import axios from "axios";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import CardSkeleton from "./Skeleton/CardSkeleton";
import CarouselSkeleton from "./Skeleton/CarouselSkeleton";

const Home = () => {
  // const [Search, setSearch] = useState('');
  const [cardData, setCardData] = useState([]);
  const [result, setResult] = useState(cardData);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://615a89444a360f0017a810f1.mockapi.io/Product")
        .then((res) => {
          setCardData(res.data);
          setResult(res.data);
          setIsloading(false);
        });
    }, 2000);
  }, []);

  const searchChange = (e) => {
    const searchResult = cardData.filter((element) =>
      element.name.toLowerCase().includes(e.target.value)
    );
    setResult(searchResult);
  };
  return (
    <div>
      {/* { console.log("data of api", cardData, result) } */}
      <Header onChange={searchChange} />
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
            {result.length !== 0 ? (
              <>
                <Items cardData={result !== null ? result : cardData} />
              </>
            ) : (
              <>
                <Card className="pt-5 pb-5 text-center">
                  <div>
                    <img
                      src="../images/no-data.png"
                      style={{ width: "250px", height: "250px" }}
                    />
                  </div>
                </Card>
              </>
            )}
          </>
        )}
      </SkeletonTheme>
    </div>
  );
};

export default Home;
