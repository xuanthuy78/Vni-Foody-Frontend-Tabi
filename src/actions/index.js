import * as types from '../constants/ActionTypes'

export const newsList = (page, limit) => (dispatch) =>
  dispatch({
    types: [types.API_REQUEST_SEND, types.NEWS_LIST, types.API_REQUEST_ERROR],
    payload: {
      request: {
        url: `api/articles?page=${page}&limit=${limit}`,
        method: 'GET',
      },
    },
  })

export const authLogin = (login) => (dispatch) =>
  dispatch({
    types: [types.API_REQUEST_SEND, types.AUTH_LOGIN, types.API_REQUEST_ERROR],
    payload: {
      request: {
        url: `api/login`,
        method: 'POST',
        data: login,
      },
    },
  })
