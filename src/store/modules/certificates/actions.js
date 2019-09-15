/*
 * Certificates Actions
 * The actions available for the certificates module.
 */

import Vue from 'vue'
import * as types from './mutation-types'

/**
 * Action for creating certificate
 * @param commit
 * @param payload
 * @returns {Promise<any>}
 */
export const create = ({commit}, payload) => {
  return new Promise((resolve, reject) => {
    Vue.$http
      .post('/certificate', payload)
      .then(res => {
        commit(types.CREATE_CERTIFICATE, res)
        resolve(res.success)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * Action for deleting a certificate
 * @param commit
 * @param id
 * @returns {Promise<any>}
 */
export const deleteCertificate = ({commit}, id) => {
  return new Promise((resolve, reject) => {
    Vue.$http
      .delete(`/certificate/${id}`)
      .then(res => {
        commit(types.DELETE_CERTIFICATE, res)
        resolve(res.success)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * Action for fetching all certificates
 * @param commit
 * @returns {Promise<void>}
 */
export const fetchAllCertificates = async ({commit}) => {
  try {
    const {certificates} = await Vue.$http.get('/certificates')
    commit(types.FETCH_CERTIFICATES_SUCCESS, {certificates: certificates})
  } catch (e) {
    console.error(e)
  }
}

/**
 * Action for fetching certificate by id
 * @param commit
 * @param id
 * @returns {Promise<void>}
 */
export const fetchCertificateById = async ({commit}, id) => {
  try {
    const {certificate} = await Vue.$http.get(`/certificate/${id}`)
    commit(types.FETCH_CERTIFICATE_ID, {certificate})
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
export const updateCertificate = ({commit}, payload) => {
  return new Promise((resolve, reject) => {
    Vue.$http
      .put('/certificate', payload)
      .then(res => {
        commit(types.UPDATE_CERTIFICATE, res)
        resolve(res.success)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export default {
  create,
  fetchAllCertificates,
  deleteCertificate,
  fetchCertificateById,
  updateCertificate
}
