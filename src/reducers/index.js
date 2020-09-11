import { combineReducers } from 'redux'
import news from './news'
import auth from './auth'
const appReducers = combineReducers({
  news,
  auth,
})

export default appReducers
