import React, {useState} from 'react'
import Items from './Card'
import CardData from './CardData'
import Carousels from './Carousels'
import Header from './Header'
import Products from './Products'

const Home = () => {
    const [Search, setSearch] = useState('');
    const [Result, setResult] = useState(CardData);
    const [cardData, setcardData] = useState(CardData);


    //here we filter the list where the title(or any element of data) is equal to input value
    const searchChange = (e) => {
        // alert("Hey")
     const searchResult = cardData.filter((element) => element.name.toLowerCase().includes(e.target.value))
 
       //here we set the filtered list to result
         setResult(searchResult);
       };
    return (
        <div>
            <Header onChange={searchChange} />
            <Carousels/>
            <Items cardData={Result!==null?Result:cardData}/>
        </div>
    )
}

export default Home
