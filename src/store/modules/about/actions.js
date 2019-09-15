/*
 * About Actions
 * The actions available for the about module.
 */

import Vue from 'vue'
import * as types from './mutation-types'

/**
 * Action for fetching about
 * @param commit
 * @returns {Promise<void>}
 */
export const fetchAbout = async ({commit}) => {
  try {
    const {about} = await Vue.$http.get('/about')
    commit(types.FETCH_ABOUT_SUCCESS, {about: about})
  } catch (e) {
    console.error(e)
  }
}

/**
 * Action for updating certificate
 * @param commit
 * @param payload
 * @returns {Promise<any>}
 */
export const updateAbout = ({commit}, payload) => {
  return new Promise((resolve, reject) => {
    Vue.$http
      .put('/about', payload)
      .then(res => {
        commit(types.UPDATE_ABOUT, res)
        resolve(res.success)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export default {
  fetchAbout,
  updateAbout
}
