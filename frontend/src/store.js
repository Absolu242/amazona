import {createStore,combineReducers, applyMiddleware,compose} from 'redux';
import {productListReducer, productDetailsReducer,productSaveReducer} from './reducers/productReducer'
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import Cookie from 'js-cookie'
import { userSigninReducer, userRegisterReducer } from './reducers/userReducers';

const cartItems= Cookie.getJSON("cartItems") || [];
const userInfo= Cookie.getJSON("userInfo") || null;


const initialState ={cart:{cartItems},userSignin:{userInfo}};
const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer,
    userSignin:userSigninReducer,
    userRegister:userRegisterReducer,
    productSave:productSaveReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancers(applyMiddleware(thunk)));

export default store;