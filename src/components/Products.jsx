import React, { useState } from "react";
import CardData from "./CardData";
import Item from "./Card";
import { connect } from "react-redux";

const Products = () => {
  const [cardData, setcardData] = useState(CardData);
  return (
    <div>
      <div className="row p-2" style={{ backgroundColor: "lightgray" }}>
         <Item cardData={cardData} />;
      </div> 
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
