import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {
  clientListReducer,
  clientRegisterReducer,
} from "./reducers/clientListReducer";

const reducer = combineReducers({
  clientList: clientListReducer,
  clientRegister: clientRegisterReducer,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
