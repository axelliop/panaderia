import { applyMiddleware, combineReducers, createStore } from "redux"

import CartReducer from "./reducers/Cart.reducer"
import CategoryReducer from "./reducers/Category.reducer"
import OrderReducer from "./reducers/Order.reducer"
import ProductReducer from "./reducers/Products.reducer"
import thunk from "redux-thunk"

const RootReducer = combineReducers({
    categories: CategoryReducer,
    products: ProductReducer,
    cart: CartReducer,
    orders: OrderReducer
})

export default createStore(RootReducer, applyMiddleware(thunk)) //peticiones con firebase