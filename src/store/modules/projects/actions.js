/*
 * Projects Actions
 * The actions available for the projects module.
 */

import Vue from 'vue'
import * as types from './mutation-types'

/**
 * Action for creating project
 * @param commit
 * @param payload
 * @returns {Promise<any>}
 */
export const create = ({commit}, payload) => {
  return new Promise((resolve, reject) => {
    Vue.$http
      .post('/project', payload)
      .then(res => {
        commit(types.CREATE_PROJECT, res)
        resolve(res.success)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * Action for deleting a project
 * @param commit
 * @param id
 * @returns {Promise<any>}
 */
export const deleteProject = ({commit}, id) => {
  return new Promise((resolve, reject) => {
    Vue.$http
      .delete(`/project/${id}`)
      .then(res => {
        commit(types.DELETE_PROJECT, res)
        resolve(res.success)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * Action for fetching all projects
 * @param commit
 * @returns {Promise<void>}
 */
export const fetchAllProjects = async ({commit}) => {
  try {
    const {projects} = await Vue.$http.get('/projects')
    commit(types.FETCH_PROJECTS_SUCCESS, {projects})
  } catch (e) {
    console.error(e)
  }
}

/**
 * Action for fetching project by id
 * @param commit
 * @param id
 * @returns {Promise<void>}
 */
export const fetchProjectById = async ({commit}, id) => {
  try {
    const {project} = await Vue.$http.get(`/project/${id}`)
    commit(types.FETCH_PROJECT_ID, {project})
  } catch (e) {
    console.error(e)
  }
}

/**
 * Action for updating project
 * @param commit
 * @param payload
 * @returns {Promise<any>}
 */
export const updateProject = ({commit}, payload) => {
  return new Promise((resolve, reject) => {
    Vue.$http
      .put('/project', payload)
      .then(res => {
        commit(types.UPDATE_PROJECT, res)
        resolve(res.success)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export default {
  create,
  fetchAllProjects,
  deleteProject,
  fetchProjectById,
  updateProject
}
