import CardData from "../components/CardData";

const INITIAL_STATE = {
  products: [CardData],
  cart: [],
  currentItem: null,
  totalItem: 0,
  itemToBeSearch: ""

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
    //     cart: inCart
    //       ? state.cart.map((item) =>
    //           item.id === action.payload.id
    //             ? { ...item, qty: item.qty + 1 }
    //             : item
    //         )
    //       : [...state.cart, { item, qty: 1 }],
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
    // case "SEARCH_ITEMS" :
    //   return {
    //     ...state,
    //     products: state.itemToBeSearch = action.payload.id;
    //   }
      
    default:
      return state;
  }
};

export default cartReducer;
