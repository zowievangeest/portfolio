import Vue from 'vue'
import moment from 'moment'

Vue.$moment = moment
Object.defineProperty(Vue.prototype, '$moment', {
  get() {
    moment.locale('nl')
    return moment
  }
})
