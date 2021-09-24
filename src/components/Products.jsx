import React, {useState} from 'react'
import CardData from './CardData'
import Item from './Card'

function Products() {
    const [cardData, setcardData] = useState(CardData);
    return (
        <div>
            <div className="row p-2" style={{backgroundColor: 'lightgray'}}>
                <Item cardData={cardData}/>
            </div>
        </div>
    )
}

export default Products
