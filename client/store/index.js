import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import {ProductsReducer} from './products'
import {ReviewReducer} from './review'
import {LineItemReducer} from './lineItem'
import Genres from './genres'
import {AdminUserReducer} from './adminUser'
//const reducer = combineReducers({user, review})

// const reducer = combineReducers({user, products: ProductsReducer , reviews: ReviewReducer, lineItems: LineItemReducer, genres: Genres, adminUser: AdminUserReducer })
import {OrderReducer} from './orders'
//const reducer = combineReducers({user, review})

const reducer = combineReducers({user, products: ProductsReducer , reviews: ReviewReducer, lineItems: LineItemReducer, orders: OrderReducer , genres: Genres})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './products'
export * from './review'
export * from './lineItem'
export * from './genres'
export * from './adminUser'
export * from './orders'
