import { combineReducers } from 'redux'
import news from './news'
import auth from './auth'
import category from './category'
const appReducers = combineReducers({
  news,
  auth,
  category
})

export default appReducers
