import { NEWS_LIST, NEWS_CATEGORY_LIST, NEWS_VIEW } from '../constants/ActionTypes'

const initialState = {
  items: [],
  news_categories: [],
  item: [],
}

export default function news(state = initialState, action) {
  switch (action.type) {
    case NEWS_LIST:
      return {
        ...state,
        items: action.payload.data.data,
      }
    case NEWS_CATEGORY_LIST:
      return {
        ...state,
        news_categories: action.payload.data.data,
      }
    case NEWS_VIEW:
      return {
        ...state,
        item: action.payload.data.data.data,
      }
    default:
      return state
  }
}
