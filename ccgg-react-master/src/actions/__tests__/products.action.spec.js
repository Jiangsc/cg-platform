import {getProducts, GET_PRODUCTS} from '../products.action';

describe('products action creators', () => {
  it('has getProducts action creator', () => {
    expect(getProducts).toBeDefined();
  });

  it('has getProducts action creator which returns an action', () => {
    const action = getProducts();
    expect(action.type).toStrictEqual(GET_PRODUCTS);
    expect(action.payload).toBeInstanceOf(Promise);
  });
});

