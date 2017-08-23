import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import loadProductsReducer from '../components/products/redux/loadProducts/LoadProductsReducer'
import listProductsReducer from '../components/products/redux/listProducts/ListProductsReducer'


const logger = createLogger({
    timestamp:true,
    duration:true
})
const middleware = compose(
    applyMiddleware(thunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)
const allReducers = combineReducers({
    loadProductsReducer,
    listProductsReducer,
})

export default createStore(allReducers, middleware)


