import Vue from 'vue'
import Axios from 'axios'
import store from '../../store'

Axios.defaults.baseURL = process.env.VUE_APP_API_URL
Axios.defaults.headers.common.accept = 'application/json'

Axios.interceptors.response.use(
  res => {
    return Promise.resolve(res.data)
  },
  error => {
    const {status} = error.response
    if (status >= 500) {
      console.error('Status code: 500')
    }

    if (status === 401 && store.getters['auth/check']) {
      console.error('Not Authenticated or status code: 401')
      store.dispatch('auth/logout')
    }
    return Promise.reject(error)
  }
)

Vue.$http = Axios
Object.defineProperty(Vue.prototype, '$http', {
  get() {
    return Axios
  }
})
