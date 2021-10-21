import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import {
  addToCart,
  addToWishlist,
  filterData,
  getProducts,
  removeFilter,
  search,
} from "../actions/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";
import ReactPaginate from "react-paginate";
import Multiselect from "multiselect-react-dropdown";
import { Link } from "react-router-dom";
import ApiData from "./Api/ApiData";

export const Items = ({
  cardData,
  cart,
  pagfilter,
  totalProducts,
  searchedInput,
}) => {
  const [result, setResult] = useState(cardData);
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(pagfilter.page);
  const [wishStyle, setWishStyle] = useState("grey");
  const [filterCat, setFilterCat] = useState([]);

  // const wishlisted = (e) => {
  //   e.style = { color: "red" };
  //   setWishStyle("red");
  // };


  useEffect(() => {
    setResult(cardData);
  }, [cardData]);

  const [pageData, setpageData] = useState([]);

  useEffect(() => {
    const pageCount = Math.ceil(totalProducts.length / pagfilter.limit);
    setpageData(pageCount);
  }, [totalProducts]);

  const notify = () => {
    toast.success("Item Added to the Cart", {
      position: "top-center",
      theme: "colored",
    });
  };
  const notifyWishlist = () => {
    toast.success("Item Added to the Wishlist", {
      position: "top-center",
      theme: "colored",
    });
  };

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected + 1);
    pagfilter.page = selected + 1;

    if (searchedInput !== "") {
      dispatch(search(searchedInput, pagfilter));
    } else {
      if (pageData < 3) {
        dispatch(filterData(filterCat, pagfilter));
      } else {
        dispatch(getProducts(pagfilter));
      }
    }
  };

  const data = [
    { id: 1, category: "Laptop" },
    { id: 2, category: "Earphones" },
  ];

  const [options] = useState(data);
  const onSelect = (data) => {
    if (data.length > 1) {
      dispatch(getProducts(pagfilter));
    } else {
      data.forEach((range) => {
        dispatch(filterData(range.category, pagfilter));
        setFilterCat(range.category);
      });
    }
  };

  const onRemove = (data) => {
    if (data == "") {
      dispatch(removeFilter(data, pagfilter));
      dispatch(getProducts(pagfilter));
    } else {
      data.forEach((range) => {
        dispatch(removeFilter(range.category, pagfilter));
        setFilterCat(range.category);
      });
    }
  };

  const addCartHandler = (element) => {
    const isExist = cart.some((e) => e.description === element.description);
    const productDetail = cart.filter(
      (e) => e.description === element.description
    )[0];
    if (isExist) {
      ApiData.put(`/Cart/${productDetail.id}`, {
        ...productDetail,
        quantity: productDetail.quantity + 1,
      }).then(() => {
        ApiData.get("/Cart").then((res) => {
          dispatch({
            type: "ADD_TO_CART",
            payload: res.data,
          });
        });
      });
    } else {
      dispatch(addToCart({ ...element, quantity: 1 }));
    }
    notify();
  };

  return (
    <>
      <div className="d-flex align-items-center pt-4 pb-2 p-2 bg-purple">
        <Col lg={2} className="justify-content-end p-2">
          <h6 className="text-center heading-font">Filter By Category</h6>
        </Col>
        <Col lg={3}>
          <div className="bg-white b-10">
            <Multiselect
              options={options} // Options to display in the dropdown
              displayValue="category" // Property name to display in the dropdown options
              onSelect={onSelect} // Function will trigger on select event
              onRemove={onRemove}
            />
          </div>
        </Col>
      </div>
      <Row className="bg-purple p-3">
        {cardData.map((element) => {
          return (
            <Col lg={3} md={6} className="mt-4" key={element.id}>
              <Card className="card-4">
                <Link to={`/product/${element.id}`}>
                  <Card.Img
                    variant="top"
                    className="heightClass product-img"
                    src={element.product_image}
                  />
                </Link>
                <Card.Body>
                  <Link to={`/product/${element.id}`}>
                    <Card.Title className="heading-font">
                      {element.name}
                    </Card.Title>
                  </Link>
                  <Card.Text className="text-capitalize">
                    {element.description}
                  </Card.Text>
                  <Card.Text className="d-flex justify-content-between">
                    <div>Price : ₹ {element.price}</div>
                    <i
                      className="fas fa-heart"
                      id="wishlisted"
                      style={{ color: element.style }}
                      onClick={() => {
                        notifyWishlist();
                        dispatch(addToWishlist(element));
                      }}
                    ></i>
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button
                      className="dark-blue-bg blue-btn"
                      onClick={() => addCartHandler(element)}
                    >
                      <i className="fas fa-shopping-cart"></i> Add
                    </Button>
                    <Button className="buy-button">
                      <i className="fas fa-shopping-bag"></i> Buy
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <div className="d-flex justify-content-center pagination-container">
        <ReactPaginate
          previousLabel={"PREV"}
          nextLabel={"NEXT"}
          pageCount={pageData}
          onPageChange={handlePageClick}
          containerClassName={"paginationBtn"}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
          onClick={handlePageClick}
        />
      </div>

      <ToastContainer type="success" />
    </>
  );
};

const mapStateToProp = (state) => {
  return {
    wishlist: state.shop.wishlist,
    cart: state.shop.cart,
    filterProd: state.shop.filteredArr,
    totalProducts: state.shop.allProducts,
    pagfilter: state.shop.pagfilter,
    searchedInput: state.shop.searchedInput,
  };
};

export default connect(mapStateToProp)(Items);
