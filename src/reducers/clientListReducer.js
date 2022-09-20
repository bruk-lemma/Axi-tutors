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
} from "../constants/clientConstants";

export const clientListReducer = (state = {clients: []}, action) => {
  switch (action.type) {
    case CLIENT_LIST_REQUEST:
      return {loading: true, clients: []};
    case CLIENT_LIST_SUCCESS:
      return {loading: false, clients: action.payload};
    case CLIENT_LIST_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};

export const clientRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case CLIENT_REGISTER_REQUEST:
      return {loading: true, clients: []};
    case CLIENT_REGISTER_SUCCESS:
      return {loading: false, clients: action.payload};
    case CLIENT_REGISTER_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};

export const clientDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case CLIENT_DELETE_REQUEST:
      return {loading: true, clients: []};
    case CLIENT_DELETE_SUCCESS:
      return {loading: false, clients: action.payload};
    case CLIENT_DELETE_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};

export const clientUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case CLIENT_UPDATE_REQUEST:
      return {loading: true};
    case CLIENT_UPDATE_SUCCESS:
      return {loading: false, client: action.payload};
    case CLIENT_UPDATE_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};

export const clientDetailReducer = (state = {client: []}, action) => {
  switch (action.type) {
    case CLIENT_GET_DETAILS_REQUEST:
      return {loading: true, client: []};
    case CLIENT_GET_DETAILS_SUCCESS:
      return {loading: false, client: action.payload};
    case CLIENT_GET_DETAILS_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
