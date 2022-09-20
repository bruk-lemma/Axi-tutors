import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {
  clientListReducer,
  clientRegisterReducer,
  clientUpdateReducer,
  clientDetailReducer,
} from "./reducers/clientListReducer";
import {userLoginReducer, userRegisterReducer} from "./reducers/userReducer.js";
import {
  teacherListReducer,
  teacherRegisterReducer,
} from "./reducers/teacherReducer.js";
const reducer = combineReducers({
  clientList: clientListReducer,
  clientRegister: clientRegisterReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  teacherList: teacherListReducer,
  teacherRegister: teacherRegisterReducer,
  clientUpdate: clientUpdateReducer,
  clientDetail: clientDetailReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: {userInfo: userInfoFromStorage},
  userRegister: {userInfo: userInfoFromStorage},
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
