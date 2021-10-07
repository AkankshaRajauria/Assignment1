import CardData from "../components/CardData";

const INITIAL_STATE = {
  products: [CardData],
  cart: [],
  currentItem: null,
  totalItem: 0,
  itemToBeSearch: "",
  wishlist : []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const {id} = action.payload;
      return {
        ...state,
        cart: [
            ...state.cart,
            {
                id: id,
                quantity: 1
            }
        ]
      };

      case "REMOVE_FROM_CART":
        return {
            ...state, 
            cart : state.cart.filter((element) => {
                return element.id !== action.payload.id;
            })
        };

    case "INCREMENT": 
    return {

        ...state,
        cart: state.cart.map(element =>
          element.id === action.payload.id
            ? {...element, quantity: element.quantity + 1}
            : element,
        ),
          
    }

    case "DECREMENT" :
      return {
        ...state,
        cart: state.cart.map(element =>
          element.id === action.payload.id
            ? {...element, quantity: element.quantity - 1}
            : element,
        ),

      }

      case "ADD_TO_WISHLIST" :
        const {data, color} = action.payload;
        return {
          ...state,
          wishlist: [
            ...state.wishlist,
            {
                data: data,
                color: "red"
            }
        ]

      }
      
    default:
      return state;
  }
};

export default cartReducer;
