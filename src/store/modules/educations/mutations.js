/*
 * Educations Mutations
 * The mutations available for the Educations module.
 */

import {
  CREATE_EDUCATION,
  DELETE_EDUCATION,
  UPDATE_EDUCATION,
  FETCH_EDUCATIONS_SUCCESS,
  FETCH_EDUCATION_ID
} from './mutation-types'

export default {
  /**
   * Mutation for education creation
   * @param state
   * @param education
   */
  [CREATE_EDUCATION](state, {education}) {
    state.educations.push(education)
  },

  /**
   * Mutation for deleting single education on id
   * @param state
   * @param id
   */
  [DELETE_EDUCATION](state, {id}) {
    state.educations.splice(state.educations.indexOf(id), 1)
  },

  /**
   * Mutation for updating single education
   * @param state
   * @param education
   */
  [UPDATE_EDUCATION](state, {education}) {
    state.educations.splice(state.educations.indexOf(education), 1)
    state.educations.push(education)
  },

  /**
   * Mutation for fetching education if success
   * @param state
   * @param educations
   */
  [FETCH_EDUCATIONS_SUCCESS](state, {educations}) {
    state.educations = educations
  },

  /**
   * Mutation for fetching education by id
   * @param state
   * @param education
   */
  [FETCH_EDUCATION_ID](state, {education}) {
    state.education = education
  }
}
