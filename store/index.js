import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducer/rootReducer";

const composeEnhancers =
  (typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducer = (state, action) => {
  if (action.type == HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };

    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

const store = () =>
  createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const wrapper = createWrapper(store);

export default wrapper;
