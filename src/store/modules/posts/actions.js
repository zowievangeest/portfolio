/*
 * Posts Actions
 * The actions available for the posts module.
 */

import Vue from 'vue'
import * as types from './mutation-types'

/**
 * Action for creating post
 * @param commit
 * @param payload
 * @returns {Promise<any>}
 */
export const create = ({commit}, payload) => {
  return new Promise((resolve, reject) => {
    Vue.$http
      .post('/post', payload)
      .then(res => {
        commit(types.CREATE_POST, res)
        resolve(res.success)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * Action for deleting a post
 * @param commit
 * @param id
 * @returns {Promise<any>}
 */
export const deletePost = ({commit}, id) => {
  return new Promise((resolve, reject) => {
    Vue.$http
      .delete(`/post/${id}`)
      .then(res => {
        commit(types.DELETE_POST, res)
        resolve(res.success)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * Action for fetching all posts
 * @param commit
 * @returns {Promise<void>}
 */
export const fetchAllPosts = async ({commit}) => {
  try {
    const {posts} = await Vue.$http.get('/posts')
    commit(types.FETCH_POSTS_SUCCESS, {posts})
  } catch (e) {
    console.error(e)
  }
}

/**
 * Action for fetching post by id
 * @param commit
 * @param id
 * @returns {Promise<void>}
 */
export const fetchPostById = async ({commit}, id) => {
  try {
    const {post} = await Vue.$http.get(`/post/${id}`)
    commit(types.FETCH_POST_ID, {post})
  } catch (e) {
    console.error(e)
  }
}

/**
 * Action for updating post
 * @param commit
 * @param payload
 * @returns {Promise<any>}
 */
export const updatePost = ({commit}, payload) => {
  return new Promise((resolve, reject) => {
    Vue.$http
      .put('/post', payload)
      .then(res => {
        commit(types.UPDATE_POST, res)
        resolve(res.success)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export default {
  create,
  fetchAllPosts,
  deletePost,
  fetchPostById,
  updatePost
}
