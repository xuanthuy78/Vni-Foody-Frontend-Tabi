import { AUTH_LOGIN, AUTH_LOGOUT } from '../constants/ActionTypes'
const token = localStorage.getItem('token')

export default function auth(state = token, action) {
  switch (action.type) {
    case AUTH_LOGIN:
      localStorage.setItem('token', action.payload.data.data)
      return action.payload.data.data
    case AUTH_LOGOUT:
      localStorage.removeItem('token')
      return null
    default:
      return state
  }
}
