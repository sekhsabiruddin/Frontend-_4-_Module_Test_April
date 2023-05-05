import { ALL_USER_DETAILS, LOGIN_DATA_SUCCESS } from "../constants/ActionType";
import { combineReducers } from "redux";

const initialState = {
  id: null,
  token: null,
  useLoginData: [],
  userAllDetails: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_DATA_SUCCESS:
      const { id, token } = { ...action.payload };
      return {
        ...state,
        useLoginData: { ...action.payload },
        id: id,
        token: token,
      };
    case ALL_USER_DETAILS:
      return {
        ...state,
        userAllDetails: { ...action.payload },
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;
