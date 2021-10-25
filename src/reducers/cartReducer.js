const INITIAL_STATE = {
  products: [],
  cart: [],
  saved: true,
  cartLoading: true,
  wishlist: [],
  filteredArr: [],
  allProducts: [],
  totProducts: [],
  searchedInput: "",
  user :[],
  users: [],
  loggedIn: false,
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
        // cartLoading: false
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
      const { data } = action.payload;
      console.log("wishlist data", data.style)
      const red = "red";
      data.style = red;
      return {
        ...state,
        wishlist: [
          ...state.wishlist,
          {
            data: data,
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

    case "GET_CART_ITEMS":
      return {
        ...state,
        cart: action.payload,
        cartLoading: false        
      }  

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

    case "LOGIN":
      let IsLoggedIn = false;
      let registerFields = action.payload;
      let credentials = action.data;
      for(let i= 0; i < registerFields.length; i++)
      {
        if(registerFields[i].email === credentials.email && registerFields[i].password === credentials.password)
        {
          IsLoggedIn = true;
        }            
      }
      return {
        ...state,
        loggedIn: IsLoggedIn,
      };

    case "LOGOUT":
      return {
        ...state,
        loggedIn: false,
      }   
      
    
     case "REGISTER":
     return {
      ...state,
      users: [...state.users, action.payload],
     }   

     case "REMOVE_FROM_WISHLIST": 

      return {
       ...state,
       wishlist: state.wishlist.filter((element) => {
         console.log("element.id", element, action.payload);
         return element.data.id !== action.payload.id;
       }),
      }

    default:
      return state;
  }
};

export default cartReducer;
