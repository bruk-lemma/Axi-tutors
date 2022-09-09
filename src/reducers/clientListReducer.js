import {
  CLIENT_LIST_REQUEST,
  CLIENT_LIST_SUCCESS,
  CLIENT_LIST_FAIL,
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
