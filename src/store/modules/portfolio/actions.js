/*
 * Portfolio Actions
 * The actions available for the portfolio module.
 */

import Vue from 'vue'
import * as types from './mutation-types'

/**
 * Action for fetching portfolio
 * @param commit
 * @returns {Promise<void>}
 */
export const fetchPortfolio = async ({commit}) => {
  try {
    const portfolio = await Vue.$http.get('/portfolio')
    commit(types.FETCH_PORTFOLIO_SUCCESS, {portfolio})
  } catch (e) {
    console.error(e)
  }
}

export default {
  fetchPortfolio
}
