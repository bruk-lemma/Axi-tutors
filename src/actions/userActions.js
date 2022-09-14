import {configConsumerProps} from "antd/lib/config-provider/index.js";
import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from "../constants/userConstants.js";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const {data} = await axios.post(
      "http://127.0.0.1:9000/api/v1/users/login",
      {email, password},
      config
    );
    dispatch({type: USER_LOGIN_SUCCESS, payload: data});
    localStorage.setItem("userInfo", JSON.stringify(data));
    console.log(data);
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
