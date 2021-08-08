import React from 'react';
import {mount} from 'enzyme';
import Products from '../Products';
import {createStore} from 'redux';
import rootReducer from '../../reducers/root.reducer';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

describe('products component', () => {
  it('displays products from redux store', () => {
    const state = {
      products: [{name: 'test', brand: 'test', price: 0, stock: 0, image: 'test'}]
    }
    const wrapper = mount(
      <Provider store={createStore(rootReducer, state)}>
        <BrowserRouter>
          <Products/>
        </BrowserRouter>
      </Provider>
    );
    expect(wrapper.find('tbody tr')).toHaveLength(1);
    expect(wrapper.first('tbody tr td').text()).toContain('test');
    wrapper.unmount();
  });
});