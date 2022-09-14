import {
  CLIENT_LIST_REQUEST,
  CLIENT_LIST_SUCCESS,
  CLIENT_LIST_FAIL,
  CLIENT_REGISTER_REQUEST,
  CLIENT_REGISTER_SUCCESS,
  CLIENT_REGISTER_FAIL,
} from "../constants/clientConstants.js";
import axios from "axios";

export const listClients = () => async (dispatch, getState) => {
  try {
    dispatch({type: CLIENT_LIST_REQUEST});

    const {
      userLogin: {userInfo},
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const {data} = await axios.get(
      "http://127.0.0.1:9000/api/v1/clients",
      config
    );

    dispatch({
      type: CLIENT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CLIENT_LIST_FAIL,
      payload:
        error.response && error.response.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const registerClient =
  (
    first_name,
    last_name,
    email,
    phone_number,
    city,
    sub_city,
    child_gender,
    child_grade
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: CLIENT_REGISTER_REQUEST,
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const {data} = await axios.post(
        "http://127.0.0.1:9000/api/v1/clients",
        {
          first_name,
          last_name,
          email,
          phone_number,
          city,
          sub_city,
          child_gender,
          child_grade,
        },
        config
      );

      dispatch({type: CLIENT_REGISTER_SUCCESS, payload: data});
      localStorage.setItem("clientRegisterInfo", JSON.stringify(data));
      console.log(data);
    } catch (error) {
      dispatch({
        type: CLIENT_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
