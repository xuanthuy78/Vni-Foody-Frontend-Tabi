import { AUTH_LOGIN, AUTH_LOGOUT, CHECK_LOGIN, REGISTER } from '../constants/ActionTypes'
const initialState = {
  token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
  user: [],
  status: '',
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGIN:
      localStorage.setItem('token', action.payload.data.data)
      return {
        ...state,
        token: action.payload.data.data,
        user: action.payload.data.account,
      }
    case CHECK_LOGIN:
      return {
        ...state,
        user: action.payload.data.data,
      }
    case AUTH_LOGOUT:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        user: null,
      }
    case REGISTER:
      return {
        ...state,
        status: action.payload.data.status,
      }
    default:
      return state
  }
}
