import React, {useState, useEffect} from 'react'
import { Row, Col } from "react-bootstrap";
import Items from './Card'
// import CardData from './CardData'
import Carousels from './Carousels'
import Header from './Header'
import Products from './Products'
import axios from 'axios'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import CardSkeleton from './Skeleton/CardSkeleton'
import CarouselSkeleton from './Skeleton/CarouselSkeleton';


const Home = () => {
    // const [Search, setSearch] = useState('');
    const [cardData, setCardData] = useState([]);
    const [result, setResult] = useState(cardData);
    const [isloading, setIsloading] = useState(true);


    useEffect(() => {
        setTimeout(() => {
          axios.get("https://615a89444a360f0017a810f1.mockapi.io/Product")
          .then(res => {
              setCardData(res.data);
              setResult(res.data);
              setIsloading(false) 
          })
        }, 2000)
    }, [])


    const searchChange = (e) => {  
     const searchResult = cardData.filter((element) => element.name.toLowerCase().includes(e.target.value))
          setResult(searchResult);
       };
    return (
        <div>
           {/* { console.log("data of api", cardData, result) } */}
            <Header onChange={searchChange} />
            <SkeletonTheme>
                {
                    isloading
                    ?
                    <>
                    <Row>
                    <CarouselSkeleton/>
                    <Col lg={3} md={2} className="p-3 m-3 d-flex justify-content-between">

                        <CardSkeleton/><CardSkeleton/><CardSkeleton/><CardSkeleton/>
                    </Col>
                    </Row>
                    </>
                    :                
                    // <Items cardData={cardData}/>
                    <>
                    <Carousels/>
                    <Items cardData={result !== null?result:cardData}/> 
                    </>


                }
            </SkeletonTheme>
            {/* <Items cardData={result !== null?result:cardData}/> */}

        </div>
    )
}

export default Home
