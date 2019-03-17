/*
 * Posts Mutations
 * The mutations available for the posts module.
 */

import {
  CREATE_POST,
  DELETE_POST,
  UPDATE_POST,
  FETCH_POSTS_SUCCESS,
  FETCH_POST_ID
} from './mutation-types'

export default {
  /**
   * Mutation for post creation
   * @param state
   * @param post
   */
  [CREATE_POST](state, {post}) {
    state.posts.push(post)
  },

  /**
   * Mutation for deleting single post on id
   * @param state
   * @param id
   */
  [DELETE_POST](state, {id}) {
    state.posts.splice(state.posts.indexOf(id), 1)
  },

  /**
   * Mutation for updating single post
   * @param state
   * @param post
   */
  [UPDATE_POST](state, {post}) {
    state.posts.splice(state.posts.indexOf(post), 1)
    state.posts.push(post)
  },

  /**
   * Mutation for fetching post if success
   * @param state
   * @param posts
   */
  [FETCH_POSTS_SUCCESS](state, {posts}) {
    state.posts = posts
  },

  /**
   * Mutation for fetching post by id
   * @param state
   * @param post
   */
  [FETCH_POST_ID](state, {post}) {
    state.post = post
  }
}
