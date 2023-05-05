import { ALL_USER_DETAILS, LOGIN_DATA_SUCCESS } from "../constants/ActionType";
export const LoginData = (data) => ({
  type: LOGIN_DATA_SUCCESS,
  payload: data,
});
export const allUserDetails = (data) => ({
  type: ALL_USER_DETAILS,
  payload: data,
});
