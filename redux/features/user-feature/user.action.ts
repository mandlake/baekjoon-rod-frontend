import { createAction } from "redux-actions";
export const userConstants = {
  USERS_REQUEST: "USERS_REQUEST",
  USERS_SUCCESS: "USERS_SUCCESS",
  USERS_FAILURE: "USERS_FAILURE",
};
export const getUsersSuccess = createAction(userConstants.USERS_SUCCESS);
