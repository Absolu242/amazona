import {createStore,combineReducers, applyMiddleware} from 'redux';
import {productListReducer} from './reducers/productReducer'
import thunk from 'redux-thunk';

const initialState ={};
const reducer = combineReducers({
    productList:ProductListReducer,
})

const store = createStore(reducer,initialState,compose(applyMiddleware(thunk)));

export default store;