import { createStore, compose, applyMiddleware } from "redux";
import { createPromise } from "redux-promise-middleware";
import thunk from "redux-thunk"
import rootReducers from "./reduxModules/reducers/index"

const middleware = compose(applyMiddleware(createPromise(), thunk));

let store = createStore(rootReducers, middleware)

export default store;