/*
 * Projects Mutations
 * The mutations available for the projects module.
 */

import {
  CREATE_PROJECT,
  DELETE_PROJECT,
  UPDATE_PROJECT,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECT_ID
} from './mutation-types'

export default {
  /**
   * Mutation for project creation
   * @param state
   * @param project
   */
  [CREATE_PROJECT](state, {project}) {
    state.projects.push(project)
  },

  /**
   * Mutation for deleting single project on id
   * @param state
   * @param id
   */
  [DELETE_PROJECT](state, {id}) {
    state.projects.splice(state.projects.indexOf(id), 1)
  },

  /**
   * Mutation for updating single project
   * @param state
   * @param project
   */
  [UPDATE_PROJECT](state, {project}) {
    state.projects.splice(state.projects.indexOf(project), 1)
    state.projects.push(project)
  },

  /**
   * Mutation for fetching project if success
   * @param state
   * @param projects
   */
  [FETCH_PROJECTS_SUCCESS](state, {projects}) {
    state.projects = projects
  },

  /**
   * Mutation for fetching project by id
   * @param state
   * @param project
   */
  [FETCH_PROJECT_ID](state, {project}) {
    state.project = project
  }
}
