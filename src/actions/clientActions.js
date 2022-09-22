import {
  CLIENT_LIST_REQUEST,
  CLIENT_LIST_SUCCESS,
  CLIENT_LIST_FAIL,
  CLIENT_REGISTER_REQUEST,
  CLIENT_REGISTER_SUCCESS,
  CLIENT_REGISTER_FAIL,
  CLIENT_DELETE_REQUEST,
  CLIENT_DELETE_SUCCESS,
  CLIENT_DELETE_FAIL,
  CLIENT_UPDATE_REQUEST,
  CLIENT_UPDATE_SUCCESS,
  CLIENT_UPDATE_FAIL,
  CLIENT_GET_DETAILS_REQUEST,
  CLIENT_GET_DETAILS_SUCCESS,
  CLIENT_GET_DETAILS_FAIL,
} from "../constants/clientConstants.js";
import axios from "axios";
import {Navigate, useNavigate} from "react-router-dom";
import {USER_LOGIN_REQUEST} from "../constants/userConstants.js";

export const listClients = () => async (dispatch, getState) => {
  //const navigate = useNavigate();

  try {
    dispatch({type: CLIENT_LIST_REQUEST});
    const {
      userLogin: {userInfo},
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
        role: `${userInfo.data.user.role}`,
      },
    };
    console.log(userInfo.data.user.role);

    const {data} = await axios.get(
      "http://127.0.0.1:9000/api/v1/clients",
      config
    );
    //console.log(data);

    dispatch({
      type: CLIENT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    //console.log(error.response.message.data);
    dispatch({
      type: CLIENT_LIST_FAIL,
      payload: "unauthorized user",
    });
    // navigate("/login");
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

export const deleteClient = (first_name) => async (dispatch, getState) => {
  try {
    dispatch({type: CLIENT_DELETE_REQUEST, payload: first_name});

    const {
      userLogin: {userInfo},
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
        role: `${userInfo.data.user.role}`,
      },
    };
    const {data} = await axios.delete(
      `http://127.0.0.1:9000/api/v1/clients/${first_name}`,
      {first_name},
      config
    );
    dispatch({type: CLIENT_DELETE_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: CLIENT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
/*
export const updateClient =
  (
    first_name,
    last_name,
    email,
    phone_number,
    city,
    sub_city,
    child_grade,
    child_gender
  ) =>
  async (dispatch) => {
    try {
      dispatch({type: CLIENT_UPDATE_REQUEST, payload: first_name});
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const {data} = await axios.patch(
        `http://127.0.0.1:9000/api/v1/clients/${first_name}`,
        {
          first_name,
          last_name,
          email,
          phone_number,
          city,
          sub_city,
          child_grade,
          child_gender,
        },
        config
      );
      dispatch({type: CLIENT_UPDATE_SUCCESS, payload: data});
    } catch (error) {
      dispatch({
        type: CLIENT_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
*/
export const getClient = (id) => async (dispatch, getState) => {
  try {
    dispatch({type: CLIENT_GET_DETAILS_REQUEST});

    const {
      userLogin: {userInfo},
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        //Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const {data} = await axios.get(
      `http://127.0.0.1:9000/api/v1/clients/${id}`,
      config
    );

    dispatch({
      type: CLIENT_GET_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CLIENT_GET_DETAILS_FAIL,
      payload:
        error.response && error.response.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateClient =
  (
    id,
    {
      first_name,
      last_name,
      email,
      phone_number,
      city,
      sub_city,
      child_grade,
      child_gender,
    }
  ) =>
  async (dispatch) => {
    //const navigate = useNavigate();
    // navigate("/update");
    try {
      dispatch({
        type: CLIENT_UPDATE_REQUEST,
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const {data} = await axios.patch(
        `http://127.0.0.1:9000/api/v1/clients/${id}`,
        {
          first_name,
          last_name,
          email,
          phone_number,
          city,
          sub_city,
          child_grade,
          child_gender,
        },
        config
      );
      dispatch({type: CLIENT_UPDATE_SUCCESS, payload: data});
    } catch (error) {
      dispatch({
        type: CLIENT_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
