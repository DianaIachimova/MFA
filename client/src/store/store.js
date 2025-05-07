import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const composeEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, composeEnhancer);

export default store;
