import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducer/rootReducer";

const composeEnhancers =
  (typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = () => createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const wrapper = createWrapper(store);

export default wrapper;
