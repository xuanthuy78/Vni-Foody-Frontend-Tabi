import { CATEGORY_LIST} from '../constants/ActionTypes'

const initialState = {
  items: [],
}

export default function category(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_LIST:
      return {
        ...state,
        items: action.payload.data.data,
      }
    default:
      return state
  }
}
