import {combineReducers} from 'redux';
import ProductsReducer from './products.reducer';
import {reducer as FormReducer} from 'redux-form';
import AuthReducer from './auth.reducer';

const rootReducer = combineReducers({
  products: ProductsReducer,
  form: FormReducer,
  loggedIn: AuthReducer
});
export default rootReducer;