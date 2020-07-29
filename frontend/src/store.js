import {createStore,combineReducers, applyMiddleware,compose} from 'redux';
import {productListReducer, productDetailsReducer} from './reducers/productReducer'
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import Cookie from 'js-cookie'

const cartItems= Cookie.getJSON("cartItems") || [];

const initialState ={cart:{cartItems}};
const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancers(applyMiddleware(thunk)));

export default store;