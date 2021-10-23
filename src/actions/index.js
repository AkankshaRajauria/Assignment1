import ApiData from '../components/Api/ApiData'


export const addToCart = itemID  => async dispatch => {

    await ApiData.post('/Cart', itemID);
    const cartRes =  await ApiData.get('/Cart');

    return dispatch({
        type : "ADD_TO_CART",
        payload: cartRes.data
    })
}

export const removeFromCart = (itemID) => async dispatch => {

  const response = await ApiData.delete(`/Cart/${itemID}`);
    return dispatch({
        type : "REMOVE_FROM_CART",
        payload: response.data
    })
}

export const increment = (itemID) => {
    return {
        type : "INCREMENT",
        payload: {
            id: itemID,
        }
    }
}

export const decrement = (itemID) => {
    return {
        type : "DECREMENT",
        payload: {
            id: itemID,
        }
    }
}

export const addToWishlist = (itemID) => {
    return {
        type : "ADD_TO_WISHLIST",
        payload: {
            data: itemID,
            color : "red"
        }
    }
}

export const getProducts = (pagNo) => async dispatch => {
    const response = await ApiData.get(`/Product?page=${pagNo.page}&limit=${pagNo.limit}`);
    const allData = await ApiData.get(`/Product`);
    return dispatch ({
        type : "GET_PRODUCTS",
        payload: response.data,
        data: allData.data
    })
}

export const search = (itemID, pagNo) => async dispatch => {

    const res = await ApiData.get(`/Product?page=${pagNo.page}&limit=${pagNo.limit}&search=${itemID}`);
    const total = await ApiData.get(`/Product?search=${itemID}`);

    return dispatch({
        type : "SEARCH",
        payload: res.data,
        input : itemID,
        allData: total.data
    })
}

export const getCartItems = () => async dispatch =>  {
    const response = await ApiData.get(`/Cart`); 
    return {
        type:"GET_CART_ITEMS",
        payload:response.data
    }   
} 

export const filterData = (data, pagNo) => async dispatch => {

    const res = await ApiData.get(`/Product?page=${pagNo.page}&limit=${pagNo.limit}&category=${data}`);
    const totalRes = await ApiData.get(`/Product?category=${data}`);

    return dispatch({
        type:"FILTER_BY_CAT",
        payload:res.data,
        data: totalRes.data
    })   
} 

export const removeFilter = (data, pagNo) => async dispatch =>  {
    const res = await ApiData.get(`/Product?page=${pagNo.page}&limit=${pagNo.limit}&category=${data}`);
    const totalRes = await ApiData.get(`/Product?category=${data}`);

    return dispatch({
        type:"REMOVE_FILTER",
        payload:res.data,
        data: totalRes.data
    })  
} 

export const login = (data) => async dispatch =>  {
    const res = await ApiData.get(`/Users`);
    console.log("login", res.data);
    
    return dispatch({
        type:"LOGIN",
        payload:res.data,
        data: data
    })  
} 
export const logout = (data) => {
    
    return {
        type:"LOGOUT",
    }  
} 

export const register = (data) => async dispatch =>  {
    await ApiData.post('/Users', data);
    const userRes =  await ApiData.get('/Users');

    return dispatch({
        type:"REGISTER",
        payload:userRes.data,
    })  
} 

// export const updateUser = (data) => async dispatch =>  {
//     await ApiData.post('/Users', data);
//     const userRes =  await ApiData.get('/Users');

//     return dispatch({
//         type:"UPDATE_USER",
//         payload:userRes.data,
//     })  
// } 

export const removeFromWishlist = (data) =>  {
    console.log("wishlist", data);

    return {
        type:"REMOVE_FROM_WISHLIST",
        payload:data,
    } 
} 