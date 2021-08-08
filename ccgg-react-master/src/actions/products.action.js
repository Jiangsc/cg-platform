import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';

export function addProductActionCreator(product, callback) {
  let promise = axios.post(`${API_URL}/products`, product)
    .then(res => {
      callback(res);
      return {
        product: product,
        success: res.data.success
      };
    });
  return { // action
    type: 'ADD_PRODUCT',
    payload: promise
  };
}

export function getProducts() {
  let promise = axios.get(`${API_URL}/products`);
  return {
    type: 'GET_PRODUCTS',
    payload: promise
  };
}

export function editProduct(editProduct, callback) {
  let promise = axios.put(`${API_URL}/products`, editProduct, {withCredentials: true})
    .then(res => {
      callback(res);
      return {
        product: editProduct,
        success: res.data.success
      };
    });
  return {
    type: 'EDIT_PRODUCT',
    payload: promise
  };
}