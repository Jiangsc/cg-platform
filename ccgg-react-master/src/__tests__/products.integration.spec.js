import React from 'react';
import moxios from 'moxios';
import {mount} from 'enzyme';
import Products from '../components/Products';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducers/root.reducer';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import ReduxPromise from 'redux-promise';

const API_URL = process.env.REACT_APP_API_URL;

describe('products integration test', () => {

  beforeEach(() => {
    moxios.install();
    moxios.stubRequest(`${API_URL}/products`, {
      status: 200,
      response: [
        {name: 'iPhone', brand: 'Apple', price: 100, stock: 22, image: 'https://s3.amazonaws.com/msi-tech-2018/iphone.jpg'},
        {name: 'iPhone3G', brand: 'Apple', price: 200, stock: 33, image: 'https://s3.amazonaws.com/msi-tech-2018/iphone3G.jpg'},
        {name: 'iPhone3GS', brand: 'Apple', price: 300, stock: 11, image: 'https://s3.amazonaws.com/msi-tech-2018/iphone3GS.jpg'}
      ]
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('loads products to redux store and display in products component', (done) => {
    const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
    const wrapper = mount(
      <Provider store={createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>
          <Products/>
        </BrowserRouter>
      </Provider>
    );
    moxios.wait(() => {
      wrapper.update(); // forceUpdate
      expect(wrapper.find('tbody tr')).toHaveLength(3);
      done();
      wrapper.unmount();
    });
  });
});