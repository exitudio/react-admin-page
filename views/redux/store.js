import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import pageReducer from './reducers/pageReducer'


const logger = createLogger({
    timestamp:true,
    duration:true
})
const middleware = compose(
    applyMiddleware(thunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)
const allReducers = combineReducers({
    pageReducer,
})

export default createStore(allReducers, middleware)


