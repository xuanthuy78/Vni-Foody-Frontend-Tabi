import { AUTH_LOGIN } from '../constants/ActionTypes'
const token = localStorage.getItem('token')

export default function auth(state = token, action) {
  switch (action.type) {
    case AUTH_LOGIN:
      localStorage.setItem('token', action.payload.data)
      return state
    default:
      return state
  }
}
