export const addToCart = (itemID) => {
    return {
        type : "ADD_TO_CART",
        payload: {
            id: itemID,
        }
    }
}

export const removeFromCart = (itemID) => {
    return {
        type : "REMOVE_FROM_CART",
        payload: {
            id: itemID,
        }
    }
}

export const increment = (itemID) => {
    return {
        type : "INCREMENT",
        payload: {
            id: itemID,
            // qty: value
        }
    }
}

export const decrement = (itemID) => {
    return {
        type : "DECREMENT",
        payload: {
            id: itemID,
            // qty: value
        }
    }
}