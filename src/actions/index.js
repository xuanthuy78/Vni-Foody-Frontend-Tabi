import * as types from '../constants/ActionTypes'

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

export const checkLogin = () => (dispatch) => {
  const token = localStorage.getItem('token')
  return dispatch({
    types: [types.API_REQUEST_SEND, types.CHECK_LOGIN, types.API_REQUEST_ERROR],
    payload: {
      request: {
        url: `api/user`,
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      },
    },
  })
}

export const register = (user) => (dispatch) =>
  dispatch({
    types: [types.API_REQUEST_SEND, types.REGISTER, types.API_REQUEST_ERROR],
    payload: {
      request: {
        url: `api/signup`,
        method: 'POST',
        data: user,
      },
    },
  })

export const newsList = (page, limit, title = '', category = '') => (
  dispatch
) =>
  dispatch({
    types: [types.API_REQUEST_SEND, types.NEWS_LIST, types.API_REQUEST_ERROR],
    payload: {
      request: {
        url: `api/articles?page=${page}&limit=${limit}&keyword=${title}&category=${category}`,
        method: 'GET',
      },
    },
  })

export const newsCategoryList = () => (dispatch) =>
  dispatch({
    types: [
      types.API_REQUEST_SEND,
      types.NEWS_CATEGORY_LIST,
      types.API_REQUEST_ERROR,
    ],
    payload: {
      request: {
        url: `api/articles/categories`,
        method: 'GET',
      },
    },
  })

export const newsEdit = (id, data) => (dispatch) =>
  dispatch({
    types: [types.API_REQUEST_SEND, types.NEWS_EDIT, types.API_REQUEST_ERROR],
    payload: {
      request: {
        url: `api/articles/${id}`,
        method: 'PUT',
        data,
      },
    },
  })

export const newsView = (id) => (dispatch) =>
  dispatch({
    types: [types.API_REQUEST_SEND, types.NEWS_VIEW, types.API_REQUEST_ERROR],
    payload: {
      request: {
        url: `api/articles/${id}`,
        method: 'GET',
      },
    },
  })
