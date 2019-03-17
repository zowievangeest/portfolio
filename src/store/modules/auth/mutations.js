/*
 * Auth Mutations
 * The mutations available for the auth module.
 */

import Vue from 'vue'

import {
  CHECK_AUTH,
  LOGIN,
  LOGOUT,
  SAVE_TOKEN,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from './mutation-types'

export default {
  /**
   * Mutation check if user is Authenticated
   *
   * @param {Object} state
   */
  [CHECK_AUTH](state) {
    state.authenticated = !!localStorage.getItem('access_token')
    if (state.authenticated) {
      Vue.$http.defaults.headers.common.Authorization = localStorage.getItem(
        'access_token'
      )
    }
  },

  /**
   * Mutation for logging the user in
   *
   * @param {Object} state
   * @param {String} access_token
   * @param {Object} user
   */
  [LOGIN](state, {access_token, user}) {
    state.authenticated = true
    state.token = access_token
    state.user = user
    localStorage.setItem('access_token', access_token)
    Vue.$http.defaults.headers.common.Authorization = access_token
  },

  /**
   * Mutation for logging the user out
   *
   * @param {Object} state
   */
  [LOGOUT](state) {
    state.authenticated = false
    state.user = null
    state.token = null
    localStorage.removeItem('access_token')
    Vue.$http.defaults.headers.common.Authorization = ''
  },

  /**
   * Mutation for saving the jwt token
   *
   * @param {Object} state
   * @param {String} accessToken
   */
  [SAVE_TOKEN](state, {accessToken}) {
    state.token = accessToken
    localStorage.setItem('access_token', accessToken)
  },

  /**
   * Mutation for fetching the user with success
   *
   * @param {Object} state
   * @param {Object} user
   */
  [FETCH_USER_SUCCESS](state, {user}) {
    state.user = user
  },

  /**
   * Mutation for fetching the user which has been failed
   *
   * @param {Object} state
   */
  [FETCH_USER_FAILURE](state) {
    state.token = null
    state.user = null
    state.authenticated = false
    localStorage.removeItem('access_token')
    Vue.$http.defaults.headers.common.Authorization = ''
  }
}
