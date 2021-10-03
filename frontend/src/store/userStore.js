import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "../reducer/userReducer";

export const store = createStore(
  userReducer,
  composeWithDevTools(applyMiddleware())
);
