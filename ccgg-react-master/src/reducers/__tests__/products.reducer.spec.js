import ProductsReducer from '../products.reducer';
import {GET_PRODUCTS} from '../../actions/products.action';

describe('products reducer', () => {
  it(`handles ${GET_PRODUCTS} action`, () => {
    const products = [{name: '', brand: '', price: 0, stock: 0, image: ''}];
    const action = {
      type: GET_PRODUCTS,
      payload: {
        data: products
      }
    };
    let newState = ProductsReducer([], action);
    expect(newState).toStrictEqual(products);
  });
});