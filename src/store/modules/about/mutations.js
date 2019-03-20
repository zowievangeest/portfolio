/*
 * About Mutations
 * The mutations available for the About module.
 */

import {UPDATE_ABOUT, FETCH_ABOUT_SUCCESS} from './mutation-types'

export default {
  /**
   * Mutation for updating the about page
   * @param state
   * @param about
   */
  [UPDATE_ABOUT](state, {about}) {
    state.about = about
  },

  /**
   * Mutation for fetching about if success
   * @param state
   * @param about
   */
  [FETCH_ABOUT_SUCCESS](state, {about}) {
    state.about = about
  }
}
