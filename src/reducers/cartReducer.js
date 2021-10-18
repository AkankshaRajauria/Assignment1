const INITIAL_STATE = {
  products: [],
  cart: [],
  saved: true,
  wishlist: [],
  filteredArr: [],
  allProducts: [],
  totProducts: [],
  searchedInput: "",
  pagfilter: {
    page: 1,
    limit: 8,
  },
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const id = action.payload;

      return {
        ...state,
        cart: id,
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((element) => {
          return element.id !== action.payload.id;
        }),
      };

    case "INCREMENT":
      return {
        ...state,
        cart: state.cart.map((element) =>
          element.id === action.payload.id
            ? { ...element, quantity: element.quantity + 1 }
            : element
        ),
      };

    case "DECREMENT":
      return {
        ...state,
        cart: state.cart.map((element) =>
          element.id === action.payload.id
            ? { ...element, quantity: element.quantity - 1 }
            : element
        ),
      };

    case "ADD_TO_WISHLIST":
      const { data, color } = action.payload;
      return {
        ...state,
        wishlist: [
          ...state.wishlist,
          {
            data: data,
            color: color,
          },
        ],
      };

    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        saved: false,
        filteredArr: action.payload,
        allProducts: action.data,
        totProducts: action.data,
      };

    case "SEARCH":
      const filteredArr = action.payload;
      const input = action.input;
      const totalSearchedProd = action.allData;

      if (input === "") {
        return {
          ...state,
          filteredArr: state.products,
          allProducts: state.totProducts,
          searchedInput: input,
        };
      } else {
        return {
          ...state,
          allProducts: totalSearchedProd,
          filteredArr: filteredArr,
          searchedInput: input,
        };
      }

    case "FILTER_BY_CAT":
      const category = action.payload;
      const allRes = action.data;

      if (category === "") {
        return {
          ...state,
          filteredArr: state.products,
        };
      } else {
        return {
          ...state,
          filteredArr: category,
          allProducts: allRes,
        };
      }

    case "REMOVE_FILTER":
      const removedCategory = action.payload;
      const categoryData = action.data;
      if (removedCategory === "") {
        return {
          ...state,
          filteredArr: state.products,
        };
      } else {
        return {
          ...state,
          filteredArr: removedCategory,
          allProducts: categoryData,
        };
      }

    default:
      return state;
  }
};

export default cartReducer;
