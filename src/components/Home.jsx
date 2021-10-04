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


const Home = () => {
    // const [Search, setSearch] = useState('');
    const [cardData, setCardData] = useState([]);
    const [Result, setResult] = useState(cardData);
    const [isloading, setIsloading] = useState(true);


    useEffect(() => {
        setTimeout(() => {
          axios.get("https://615a89444a360f0017a810f1.mockapi.io/Product")
          .then(res => {
              setCardData(res.data)
              setIsloading(false) 
          })
        }, 1000)
    }, [])


    const searchChange = (e) => {
     const searchResult = cardData.filter((element) => element.name.toLowerCase().includes(e.target.value))
          setResult(searchResult);
       };
    return (
        <div>
           { console.log("data of api", cardData, Result) }
            <Header onChange={searchChange} />
            <Carousels/>
            <SkeletonTheme>
                {
                    isloading
                    ?
                    <>
                    <Row>
                    <Col lg={3} md={2} className="p-3 m-3 d-flex justify-content-between">

                        <CardSkeleton/><CardSkeleton/><CardSkeleton/><CardSkeleton/>
                    </Col>
                    </Row>
                    </>
                    :                    
                    <Items cardData={cardData}/>

                }
            </SkeletonTheme>
            {/* <Items cardData={Result!==null?Result:cardData}/> */}

        </div>
    )
}

export default Home
