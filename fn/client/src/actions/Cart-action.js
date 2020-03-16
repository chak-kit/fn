const addCart = (productName) => {
  return (dispatch) => {
    console.log('Adding to cart');
    console.log('Product: ', productName );

    dispatch({
      type: 'ADD_PRODUCT_CART',
      payload: productName
    })
  }
};

const removeCart = (productName) => {
  return (dispatch) => {
    console.log('Removed from cart');
    console.log('Removed: ', productName );

    dispatch({
      type: 'REMOVE_PRODUCT_CART',
      payload: productName
    })
  }
};

const increaseItems = (productName) => {
  return (dispatch) => {
    console.log('increaseItems: ', productName );

    dispatch({
      type: 'INCREASE_ITEMS',
      payload: productName
    })
  }
};

const decreaseItems = (productName) => {
  return (dispatch) => {
    console.log('decreaseItems: ', productName );

    dispatch({
      type: 'DECREASE_ITEMS',
      payload: productName
    })
  }
};

const getNumbers = () => {
  return (dispatch) =>{
    console.log('Getting all numbers from cart');
    dispatch({
      type: 'GET_NUMBERS_CART'
    })
  }
};
export  {addCart, getNumbers, removeCart, increaseItems, decreaseItems}



