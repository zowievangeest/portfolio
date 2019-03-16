import Vue from 'vue'
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

window.Pusher = Pusher

const echo = new Echo({
  broadcaster: 'pusher',
  key: process.env.VUE_APP_WEBSOCKET_KEY,
  cluster: process.env.VUE_APP_WEBSOCKET_CLUSTER,
  authEndpoint: process.env.VUE_APP_WEBSOCKET_AUTH_ENDPOINT
})

Vue.$echo = echo
Object.defineProperty(Vue.prototype, '$echo', {
  get() {
    return echo
  }
})
