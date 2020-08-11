import * as types from "../constants/ActionTypes"

export const getlistNews = () => (dispatch) =>
  dispatch({
    types: [types.API_REQUEST_SEND, types.NEWS_LIST, types.API_REQUEST_ERROR],
    payload: {
      request: {
        url: `/api/articles`,
        method: "GET",
      },
    },
  })
