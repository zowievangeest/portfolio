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
   * Mutation for certificate creation
   * @param state
   * @param certificate
   */
  [CREATE_CERTIFICATE](state, {certificate}) {
    state.certificates.push(certificate)
  },

  /**
   * Mutation for deleting single certificate on id
   * @param state
   * @param id
   */
  [DELETE_CERTIFICATE](state, {id}) {
    state.certificates.splice(state.certificates.indexOf(id), 1)
  },

  /**
   * Mutation for updating single certificate
   * @param state
   * @param certificate
   */
  [UPDATE_CERTIFICATE](state, {certificate}) {
    state.certificates.splice(state.certificates.indexOf(certificate), 1)
    state.certificates.push(certificate)
  },

  /**
   * Mutation for fetching certificate if success
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
