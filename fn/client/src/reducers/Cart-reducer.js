const initialState = {
  cartNumbers: 0,
  products: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_CART':

      let newProducts = [...state.products];
      let foundProduct = newProducts.find(value => action.payload.id === value.id);
      if (foundProduct) {
        foundProduct.quantity++;
      } else {
        newProducts.push({...action.payload, quantity: 1});
      }

      return {
        ...state,
        cartNumbers: state.cartNumbers + 1,
        products: newProducts,
      };

    case 'REMOVE_PRODUCT_CART':
      let newItems = state.products.filter(item => action.payload.id !== item.id);
      let itemToRemove = state.products.find(item => action.payload.id === item.id);

      return {
        ...state,
        cartNumbers: state.cartNumbers - itemToRemove.quantity,
        products: newItems,
      };

    case 'INCREASE_ITEMS':
      let newIncreaseProducts = [...state.products];
      let foundIncreaseItems = newIncreaseProducts.find(item => action.payload.id === item.id);

      //if the quantity == 0 then it should be removed
      if (foundIncreaseItems.quantity === 1) {
        let newIncreaseItems = state.products.filter(item => action.payload.id !== item.id);
        return {
          ...state,
          cartNumbers: state.cartNumbers + 1,
          products: newIncreaseItems,
        }
      }
      else {
        foundIncreaseItems.quantity += 1;
        return {
          ...state,
          products: newIncreaseProducts,
          cartNumbers: state.cartNumbers + 1,
        }
      }

    case 'DECREASE_ITEMS':
      let new_products = [...state.products];
      let foundItem = new_products.find(item => action.payload.id === item.id);

      //if the quantity == 0 then it should be removed
      if (foundItem.quantity === 1) {
        let new_items = state.products.filter(item => action.payload.id !== item.id);
        return {
          ...state,
          cartNumbers: state.cartNumbers - 1,
          products: new_items,
        }
      }
      else {
        foundItem.quantity -= 1;
        return {
          ...state,
          products: new_products,
          cartNumbers: state.cartNumbers - 1,
        }
      }

    case 'GET_NUMBERS_CART':
      return {
        ...state
      };

    default:
      return state
  }
}
