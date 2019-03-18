/*
 * Certificates Mutations
 * The mutations available for the Certificates module.
 */

import {
  CREATE_CERTIFICATE,
  DELETE_CERTIFICATE,
  UPDATE_CERTIFICATE,
  FETCH_CERTIFICATES_SUCCESS,
  FETCH_CERTIFICATE_ID
} from './mutation-types'

export default {
  /**
   * Mutation for education creation
   * @param state
   * @param education
   */
  [CREATE_CERTIFICATE](state, {education}) {
    state.certificates.push(education)
  },

  /**
   * Mutation for deleting single education on id
   * @param state
   * @param id
   */
  [DELETE_CERTIFICATE](state, {id}) {
    state.certificates.splice(state.certificates.indexOf(id), 1)
  },

  /**
   * Mutation for updating single education
   * @param state
   * @param education
   */
  [UPDATE_CERTIFICATE](state, {education}) {
    state.certificates.splice(state.certificates.indexOf(education), 1)
    state.certificates.push(education)
  },

  /**
   * Mutation for fetching education if success
   * @param state
   * @param certificates
   */
  [FETCH_CERTIFICATES_SUCCESS](state, {certificates}) {
    state.certificates = certificates
  },

  /**
   * Mutation for fetching certificate by id
   * @param state
   * @param certificate
   */
  [FETCH_CERTIFICATE_ID](state, {certificate}) {
    state.certificate = certificate
  }
}
