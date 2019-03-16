/*
 * Auth Actions
 * The actions available for the auth module.
 */

import Vue from 'vue'
import * as types from './mutation-types'

/**
 * Action for checking authentication
 * @param {function} commit updating store
 * @returns {Promise<void>}
 */
export const check = async ({commit}) => {
  commit(types.CHECK_AUTH)
}

/**
 * Action for logging in user
 * @param {function} commit updating store
 * @param {Object} payload
 * @returns {Promise<any>}
 */
export const login = ({commit}, payload) => {
  return new Promise((resolve, reject) => {
    Vue.$http
      .post('/auth/login', payload)
      .then(res => {
        commit(types.LOGIN, res)
        Vue.router.push({name: 'dashboard'})
        resolve(res.success)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * Action for logging out the user
 * @param {function} commit updating store
 * @returns {Promise<any>}
 */
export const logout = ({commit}) => {
  return Vue.$http.post('/auth/logout').then(() => {
    commit(types.LOGOUT)
    Vue.router.push({name: 'login'})
  })
}

/**
 * Action for fetching user
 * @param {function} commit updating store
 * @returns {Promise<any>}
 */
export const fetchUser = async ({commit}) => {
  try {
    const {data} = await Vue.$http.get('/auth/me')
    commit(types.FETCH_USER_SUCCESS, {user: data})
  } catch (e) {
    commit(types.FETCH_USER_FAILURE)
  }
}

export default {
  check,
  login,
  logout,
  fetchUser
}
