// pure function which returns piece of application state.
import {ADD_PRODUCT, EDIT_PRODUCT, GET_PRODUCTS} from "../actions/products.action";

export default function (oldProductsState = null, action) {
  // return new products state based on action.
  switch (action.type) {
    case ADD_PRODUCT:
      if (action.payload.success) {
        return [...oldProductsState, action.payload.product];
      } else {
        return oldProductsState;
      }
    case EDIT_PRODUCT:
      if (action.payload.success) {
        const product = action.payload.product;
        const index = oldProductsState.findIndex(p => p.id === product.id);
        const newProductsState = [...oldProductsState];
        newProductsState.splice(index, 1, product);
        console.log(newProductsState);
        return newProductsState;
      } else {
        return oldProductsState;
      }
    case GET_PRODUCTS:
      return action.payload.data;
    default:
      // unknown action type should no update products state
      return oldProductsState;
  }
}