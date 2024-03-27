import actionTypes from "../actions/actionTypes";
const initState = {
  isLogin: false,
  token: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_SUCCESS:
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        token: action.data,
        mes: "",
      };
    case actionTypes.REGISTER_FAIL:
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        isLogin: false,
        mes: action.data,
        toke: null,

      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLogin: false,
        token: null,
        mes: "",
      };
    default:
      return state;
  }
};

export default authReducer;
