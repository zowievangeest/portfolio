/*
 * Educations Actions
 * The actions available for the educations module.
 */

import Vue from 'vue'
import * as types from './mutation-types'

/**
 * Action for creating education
 * @param commit
 * @param payload
 * @returns {Promise<any>}
 */
export const create = ({commit}, payload) => {
  return new Promise((resolve, reject) => {
    Vue.$http
      .post('/education', payload)
      .then(res => {
        commit(types.CREATE_EDUCATION, res)
        resolve(res.success)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * Action for deleting a education
 * @param commit
 * @param id
 * @returns {Promise<any>}
 */
export const deleteEducation = ({commit}, id) => {
  return new Promise((resolve, reject) => {
    Vue.$http
      .delete(`/education/${id}`)
      .then(res => {
        commit(types.DELETE_EDUCATION, res)
        resolve(res.success)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * Action for fetching all educations
 * @param commit
 * @returns {Promise<void>}
 */
export const fetchAllEducations = async ({commit}) => {
  try {
    const {educations} = await Vue.$http.get('/educations')
    commit(types.FETCH_EDUCATIONS_SUCCESS, {educations: educations})
  } catch (e) {
    console.error(e)
  }
}

/**
 * Action for fetching education by id
 * @param commit
 * @param id
 * @returns {Promise<void>}
 */
export const fetchEducationById = async ({commit}, id) => {
  try {
    const {education} = await Vue.$http.get(`/education/${id}`)
    commit(types.FETCH_EDUCATION_ID, {education})
  } catch (e) {
    console.error(e)
  }
}

/**
 * Action for updating education
 * @param commit
 * @param payload
 * @returns {Promise<any>}
 */
export const updateEducation = ({commit}, payload) => {
  return new Promise((resolve, reject) => {
    Vue.$http
      .put('/education', payload)
      .then(res => {
        commit(types.UPDATE_EDUCATION, res)
        resolve(res.success)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export default {
  create,
  fetchAllEducations,
  deleteEducation,
  fetchEducationById,
  updateEducation
}
