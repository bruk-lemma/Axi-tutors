import {
  CLIENT_LIST_REQUEST,
  CLIENT_LIST_SUCCESS,
  CLIENT_LIST_FAIL,
} from "../constants/clientConstants.js";
import axios from "axios";

export const listClients = () => async (dispatch) => {
  try {
    dispatch({type: CLIENT_LIST_REQUEST});

    const {data} = await axios.get("http://127.0.0.1:9000/api/v1/clients");

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
