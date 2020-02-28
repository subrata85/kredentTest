import { createStore, compose, applyMiddleware } from "redux";
import { createPromise } from "redux-promise-middleware";
import thunk from "redux-thunk"

const middleware = compose(applyMiddleware(createPromise(), thunk));

let store = createStore("", middleware)

export default store;