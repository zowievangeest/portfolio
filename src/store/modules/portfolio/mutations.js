/*
 * Portfolio Mutations
 * The mutations available for the portfolio module.
 */

import {FETCH_PORTFOLIO_SUCCESS} from './mutation-types'

export default {
  /**
   * Mutation for fetching portfolio if success
   * @param state
   * @param portfolio
   */
  [FETCH_PORTFOLIO_SUCCESS](state, {portfolio}) {
    state.portfolio = portfolio
  }
}
