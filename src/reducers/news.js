import { NEWS_LIST } from "../constants/ActionTypes"

const initialState = {
  items: [],
}

export default function contact(state = initialState, action) {
  switch (action.type) {
    case NEWS_LIST:
      return {
        ...state,
        items: action.payload.data.data,
      }
    default:
      return state
  }
}
