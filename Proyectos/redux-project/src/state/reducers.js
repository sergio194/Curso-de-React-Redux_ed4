import {combineReducers} from 'redux';
import cart from './cart/cart-reducer'
import discount from './discount/discount-reducer'

const reducers = combineReducers({
    cart, discount
}) 

export default reducers;