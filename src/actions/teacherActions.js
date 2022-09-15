import {
  TEACHER_LIST_REQUEST,
  TEACHER_LIST_SUCCESS,
  TEACHER_LIST_FAIL,
  TEACHER_REGISTER_REQUEST,
  TEACHER_REGISTER_SUCCESS,
  TEACHER_REGISTER_FAIL,
} from "../constants/teacherConstant.js";
import axios from "axios";

export const listTeachers = () => async (dispatch, getState) => {
  try {
    dispatch({type: TEACHER_LIST_REQUEST});

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
      "http://127.0.0.1:9000/api/v1/teachers",
      config
    );

    dispatch({
      type: TEACHER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TEACHER_LIST_FAIL,
      payload:
        error.response && error.response.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const registerTeacher =
  (
    first_name,
    last_name,
    email,
    phone_number,
    city,
    sub_city,
    teacher_education_level,
    teacher_tutor_subjects
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: TEACHER_REGISTER_REQUEST,
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const {data} = await axios.post(
        "http://127.0.0.1:9000/api/v1/teachers",
        {
          first_name,
          last_name,
          email,
          phone_number,
          city,
          sub_city,
          teacher_education_level,
          teacher_tutor_subjects,
        },
        config
      );

      dispatch({type: TEACHER_REGISTER_SUCCESS, payload: data});
      localStorage.setItem("teacherRegisterInfo", JSON.stringify(data));
      console.log(data);
    } catch (error) {
      dispatch({
        type: TEACHER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
