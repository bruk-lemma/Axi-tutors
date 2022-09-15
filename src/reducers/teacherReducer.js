import {
  TEACHER_LIST_REQUEST,
  TEACHER_LIST_SUCCESS,
  TEACHER_LIST_FAIL,
  TEACHER_REGISTER_REQUEST,
  TEACHER_REGISTER_SUCCESS,
  TEACHER_REGISTER_FAIL,
} from "../constants/teacherConstant.js";

export const teacherListReducer = (state = {teachers: []}, action) => {
  switch (action.type) {
    case TEACHER_LIST_REQUEST:
      return {loading: true, teachers: []};
    case TEACHER_LIST_SUCCESS:
      return {loading: false, teachers: action.payload};
    case TEACHER_LIST_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};

export const teacherRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case TEACHER_REGISTER_REQUEST:
      return {loading: true, teachers: []};
    case TEACHER_REGISTER_SUCCESS:
      return {loading: false, teachers: action.payload};
    case TEACHER_REGISTER_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
