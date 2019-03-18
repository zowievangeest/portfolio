/*
 * Experiences Actions
 * The actions available for the experiences module.
 */

import Vue from 'vue'
import * as types from './mutation-types'

/**
 * Action for creating experience
 * @param commit
 * @param payload
 * @returns {Promise<any>}
 */
export const create = ({commit}, payload) => {
  return new Promise((resolve, reject) => {
    Vue.$http
      .post('/experience', payload)
      .then(res => {
        commit(types.CREATE_EXPERIENCE, res)
        resolve(res.success)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * Action for deleting a experience
 * @param commit
 * @param id
 * @returns {Promise<any>}
 */
export const deleteExperience = ({commit}, id) => {
  return new Promise((resolve, reject) => {
    Vue.$http
      .delete(`/experience/${id}`)
      .then(res => {
        commit(types.DELETE_EXPERIENCE, res)
        resolve(res.success)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * Action for fetching all experiences
 * @param commit
 * @returns {Promise<void>}
 */
export const fetchAllExperiences = async ({commit}) => {
  try {
    const {experiences} = await Vue.$http.get('/experiences')
    commit(types.FETCH_EXPERIENCES_SUCCESS, {experiences: experiences})
  } catch (e) {
    console.error(e)
  }
}

/**
 * Action for fetching experience by id
 * @param commit
 * @param id
 * @returns {Promise<void>}
 */
export const fetchExperienceById = async ({commit}, id) => {
  try {
    const {experience} = await Vue.$http.get(`/experience/${id}`)
    commit(types.FETCH_EXPERIENCE_ID, {experience})
  } catch (e) {
    console.error(e)
  }
}

/**
 * Action for updating experience
 * @param commit
 * @param payload
 * @returns {Promise<any>}
 */
export const updateExperience = ({commit}, payload) => {
  return new Promise((resolve, reject) => {
    Vue.$http
      .put('/experience', payload)
      .then(res => {
        commit(types.UPDATE_EXPERIENCE, res)
        resolve(res.success)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export default {
  create,
  fetchAllExperiences,
  deleteExperience,
  fetchExperienceById,
  updateExperience
}
