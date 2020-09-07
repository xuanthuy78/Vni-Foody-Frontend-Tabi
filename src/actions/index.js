import * as types from '../constants/ActionTypes'

export const newsList = (page, limit = 10) => (dispatch) =>
  dispatch({
    types: [types.API_REQUEST_SEND, types.NEWS_LIST, types.API_REQUEST_ERROR],
    payload: {
      request: {
        url: `api/articles?page=` + page + `&limit=` + limit,
        method: 'GET',
      },
    },
  })
