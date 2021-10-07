import React, {useState, useEffect} from "react";
import { Card, Button, Row, Col, CardGroup, Toast } from "react-bootstrap";
import { connect, useDispatch, useSelector } from 'react-redux';
import {addToCart, addToWishlist} from '../actions/index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../App.css";
import ReactPaginate from "react-paginate";
import Multiselect from 'multiselect-react-dropdown';
import CardData from "./CardData";


export const Items = ({ cardData, wishlist }) => { 
  // const [cardData, setCardData] = useState(Data);


  const [inputData, setInputData] = useState("");
  const [wishlistData, setWishlistData] = useState();
  const [result, setResult] = useState(cardData);

  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(0);
  const [wishStyle, setWishStyle] = useState("grey");

  const itemsPerPage= 12;
  const pagesVisited= pageNumber * itemsPerPage;
  const wishlisted = (e)=> {
    e.style = {color:"red"}
    setWishStyle("red")
  };

  useEffect(() => {   
  }, [])
  const notify = () => {
    toast.success("Item Added to the Cart",{position: "top-center", theme: "colored"})
  };
  const notifyWishlist = () => {
    toast.success("Item Added to the Wishlist",{position: "top-center", theme: "colored"})
  };
  // console.log("cardData.length", cardData.length);
  const pageCount = Math.ceil(cardData.length/itemsPerPage);
  const handlePageClick = ({selected}) => {
    setPageNumber(selected);
    // console.log("selected",selected);
  };

  const data = [
    {id: 1, price: 'Under ₹50'},
    {id: 2, price: '₹51 - ₹90'},
  ]

  const [options] = useState(data); 
  const onSelect = (data) => {
    console.log("selected",data);
    data.map((range) => {
      console.log("range", range.price);
      const price = range.price
      Filter(price);
    })
  }
  const Filter = (price, val) => {
    switch(price) {
        case 'Under ₹50':
          const searchResult = result.filter((element) => element.price > 0 && element.price < 51)
          setResult(searchResult);
          console.log("entered ?");
            // this.setState({ nation: val });
            break;
        case '₹51 - ₹90':
          const searchResult1 = result.filter((element) => element.price > 51 && element.price < 91)
          setResult(searchResult1);
            // this.setState({ priceStart: val });
          break;
        // case 'priceEnd':
        //     this.setState({ priceEnd: val });
        //     break;
        default:
            break;
    }
  }
  const onRemove = (data) => {
    console.log("remove", data);
    setResult(cardData);
  }

    return (
    <>
    
      <div className="d-flex align-items-center pt-4 pb-2" style={{ backgroundColor: "#c2c2c2" }}>
        <Col lg={2} className="justify-content-end">
        <h6 className="text-center heading-font">Filter By Price</h6>
        </Col>
        <Col lg={3}>
          <div className="bg-white b-10">
            <Multiselect
             options={options} // Options to display in the dropdown
             displayValue="price" // Property name to display in the dropdown options
             onSelect={onSelect} // Function will trigger on select event
             onRemove= {onRemove}
            />
          </div>
        </Col>
      </div>
    <Row style={{ backgroundColor: "#c2c2c2" }}>
      {result.slice(pagesVisited, pagesVisited + itemsPerPage).map((element) => {
        return (
          <>
            <Col lg={3} md={6} className="p-3">
              <Card className="card-4" key={element.id}>
                <Card.Img
                  variant="top"
                  className="heightClass"
                  src={element.product_image}
                  style={{ width: "100%", height: "18vw" }}
                />
                <Card.Body>
                  <Card.Title className="heading-font">{element.name}</Card.Title>
                  <Card.Text className="text-capitalize">{element.description}</Card.Text>
                  <Card.Text className="d-flex justify-content-between">
                    <div>Price : ₹ {element.price}</div>
                    <i class="fas fa-heart" id="wishlisted" style= {{color: (element.style.color)}} onClick={()=> {notifyWishlist(); wishlisted(element); dispatch(addToWishlist(element), setWishlistData(''))}}></i>
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button variant="warning" onClick={() => {notify(); dispatch(addToCart(element), setInputData(''))}}>
                      <i className="fas fa-shopping-cart"></i> Add
                    </Button>
                    <Button
                      variant="warning"
                      style={{ color: "white", backgroundColor: "#ff6a00" }}
                    >
                      <i className="fas fa-shopping-bag"></i> Buy
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </>
        );
      })}
    </Row>
    <div className="d-flex justify-content-center" style={{ backgroundColor: "#c2c2c2", paddingBottom: "30px", paddingTop: "30px" }}>
      <ReactPaginate 
        previousLabel={"PREVIOUS"}
        nextLabel={"NEXT"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"paginationBtn"}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
    
    <ToastContainer type="success"/>
    </>
  );
};

const mapStateToProp = state => {
  return {
    wishlist: state.shop.wishlist,
  }
}

export default connect(mapStateToProp)(Items);
