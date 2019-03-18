/*
 * Experiences Mutations
 * The mutations available for the experiences module.
 */

import {
  CREATE_EXPERIENCE,
  DELETE_EXPERIENCE,
  UPDATE_EXPERIENCE,
  FETCH_EXPERIENCES_SUCCESS,
  FETCH_EXPERIENCE_ID
} from './mutation-types'

export default {
  /**
   * Mutation for experience creation
   * @param state
   * @param experience
   */
  [CREATE_EXPERIENCE](state, {experience}) {
    state.experiences.push(experience)
  },

  /**
   * Mutation for deleting single experience on id
   * @param state
   * @param id
   */
  [DELETE_EXPERIENCE](state, {id}) {
    state.experiences.splice(state.experiences.indexOf(id), 1)
  },

  /**
   * Mutation for updating single experience
   * @param state
   * @param experience
   */
  [UPDATE_EXPERIENCE](state, {experience}) {
    state.experiences.splice(state.experiences.indexOf(experience), 1)
    state.experiences.push(experience)
  },

  /**
   * Mutation for fetching experience if success
   * @param state
   * @param experiences
   */
  [FETCH_EXPERIENCES_SUCCESS](state, {experiences}) {
    state.experiences = experiences
  },

  /**
   * Mutation for fetching experience by id
   * @param state
   * @param experience
   */
  [FETCH_EXPERIENCE_ID](state, {experience}) {
    state.experience = experience
  }
}
