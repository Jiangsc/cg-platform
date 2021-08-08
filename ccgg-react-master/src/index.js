import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router';
import AddProduct from './containers/AddProduct';
import Products from './components/Products';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers/root.reducer';
import ReduxPromise from 'redux-promise';
import EditProduct from './containers/EditProduct';
import Login from './components/Login';
import Logout from './components/Logout';
import auth from './components/auth.hoc';

// React Element
// const helloReactElem = React.createElement('p', null, 'Hello React!');

// JSX: javascript with extensions.(js + html)
// const name = 'bob';
// const helloReactElem = <p>Hello React!{name}</p>;
//
// ReactDOM.render(helloReactElem, document.querySelector('#root'));

let products = [
  {name: 'iPhone', brand: 'Apple', price: 100, stock: 22, image: 'https://s3.amazonaws.com/msi-tech-2018/iphone.jpg'},
  {
    name: 'iPhone3G',
    brand: 'Apple',
    price: 200,
    stock: 33,
    image: 'https://s3.amazonaws.com/msi-tech-2018/iphone3G.jpg'
  },
  {
    name: 'iPhone3GS',
    brand: 'Apple',
    price: 300,
    stock: 11,
    image: 'https://s3.amazonaws.com/msi-tech-2018/iphone3GS.jpg'
  },
  {
    name: 'iPhone4',
    brand: 'Apple',
    price: 400,
    stock: 22,
    image: 'https://s3.amazonaws.com/msi-tech-2018/iphone4.jpg'
  },
  {
    name: 'iPhone4S',
    brand: 'Apple',
    price: 500,
    stock: 33,
    image: 'https://s3.amazonaws.com/msi-tech-2018/iphone4S.jpg'
  },
  {
    name: 'iPhone5',
    brand: 'Apple',
    price: 600,
    stock: 11,
    image: 'https://s3.amazonaws.com/msi-tech-2018/iphone5.jpeg'
  },
  {
    name: 'iPhone5C',
    brand: 'Apple',
    price: 700,
    stock: 222,
    image: 'https://s3.amazonaws.com/msi-tech-2018/iphone5c.png'
  },
  {
    name: 'iPhone5S',
    brand: 'Apple',
    price: 800,
    stock: 333,
    image: 'https://s3.amazonaws.com/msi-tech-2018/iphone5s.jpg'
  },
  {
    name: 'iPhone6',
    brand: 'Apple',
    price: 900,
    stock: 111,
    image: 'https://s3.amazonaws.com/msi-tech-2018/iphone6.jpg'
  },
];

const insertProduct = (newProduct) => {
  products = [...products, newProduct];
};

// createStore -> createStoreWithMiddleware
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <BrowserRouter>
      <App>
        <Switch>
          {/*<Route path='/add-product' component={() => <AddProduct insertProduct={insertProduct} /> } />*/}
          {/*<Route path='/' component={() => <Products products={products} />} />*/}
          <Route path='/login' component={Login}/>
          <Route path='/logout' component={Logout}/>
          <Route path='/add-product' component={auth(AddProduct)}/>
          <Route path='/edit-product/:id' component={auth(EditProduct)}/>
          <Route path='/' component={Products}/>
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
