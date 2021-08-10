// importing redux functions that will be used to create a store
import {createStore, applyMiddleware, combineReducers} from "redux"
import promiseMiddleware from "redux-promise-middleware"
import budgetReducer from "./redux/budgetReducer"
import userReducer from "./redux/userReducer"

//using combine reducers to combine reducers into a single "root" reducer that will be used by the store. 
const rootReducer = combineReducers({
  budget: budgetReducer,
  user: userReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))