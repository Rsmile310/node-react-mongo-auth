import {
  SIGNIN_REQUEST_PROCESS,
  SIGNIN_SUCCESS,
  SIGNIN_REQUEST_ERROR,
  LOGOUT,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_ERROR
} from "./actions";

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  isAuth: false,
  accessToken: "",
  refreshToken: "",
  user: {
    id: "",
    name: "",
    email: ""
  }
};

export const signinReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_REQUEST_PROCESS:
      return { ...state, isLoading: true };
    case SIGNIN_REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.error.message
      };
    case SIGNIN_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        errorMessage: "",
        isAuth: true,
        user: action.data.user,
        accessToken: action.data.accessToken,
        refreshToken: action.data.refreshToken
      };
    case LOGOUT:
      return { ...state, isAuth: false };
    case REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        accessToken: action.data.accessToken,
        refreshToken: action.data.refreshToken
      };
    case REFRESH_TOKEN_ERROR:
      return { ...state, isAuth: false };
    default:
      return state;
  }
};
