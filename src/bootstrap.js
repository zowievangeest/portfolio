/*
 * Bootstrap File
 * Configuration and bootstrap for portfolio - zowie application
 */

import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'

/*
 * Middleware
 * GlobalMiddleware for the application
 */
const globalMiddleware = ['check-auth']
const routeMiddleware = resolveMiddleware(
  require.context('@/middleware', false, /.*\.js$/)
)

/*
 * Vue
 *
 * Import Vue and plugins need for the application
 * https://vuejs.org/
 */
import Vue from 'vue'
import './plugins'

Vue.config.debug = process.env.NODE_ENV !== 'production'

/*
 * Vue Router Sync
 *
 * Effortlessly keep vue-router and vuex store in sync.
 * https://github.com/vuejs/vuex-router-sync
 */
import VuexRouterSync from 'vuex-router-sync'
import store from './store'

store.dispatch('auth/check')

/*
 * Vue Router
 *
 * The official Router for Vue.js. It deeply integrates with Vue.js core
 * to make building Single Page Applications with Vue.js a breeze.
 * http://router.vuejs.org/en/index.html
 */
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

export const router = createRouter()

/**
 * New vue-router instance
 * @returns {VueRouter}
 */
function createRouter() {
  const router = new VueRouter({
    mode: 'history',
    routes
  })
  router.beforeEach(beforeEach)
  router.afterEach(afterEach)

  return router
}

router.afterEach(afterEach)
VuexRouterSync.sync(store, router)
Vue.router = router

/**
 * Global Router Guard
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 * @returns {Promise<*>}
 */
async function beforeEach(to, from, next) {
  const components = await resolveComponents(
    router.getMatchedComponents({...to})
  )

  if (components.length === 0) {
    return next()
  }

  const middleware = getMiddleware(components)

  callMiddleware(middleware, to, from, (...args) => {
    if (args.length === 0) {
      router.app.setLayout(components[0].layout || '')
    }

    next(...args)
  })
}

async function afterEach() {
  await router.app.$nextTick()
}

/**
 * Call Middleware
 * @param {Array} middleware
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 */
function callMiddleware(middleware, to, from, next) {
  const stack = middleware.reverse()

  const _next = (...args) => {
    if (args.length > 0 || stack.length === 0) {
      return next(...args)
    }

    const middleware = stack.pop()

    if (typeof middleware === 'function') {
      middleware(to, from, _next)
    } else if (routeMiddleware[middleware]) {
      routeMiddleware[middleware](to, from, _next)
    } else {
      throw Error(`Undefined middleware [${middleware}]`)
    }
  }

  _next()
}

/**
 * Resolve components
 * @param {Array} components
 * @returns {Promise<any[]>}
 */
function resolveComponents(components) {
  return Promise.all(
    components.map(component => {
      return typeof component === 'function' ? component() : component
    })
  )
}

/**
 * Combine Global Middleware with components middleware
 * @param {Array} components
 * @returns {Array}
 */
function getMiddleware(components) {
  const middleware = [...globalMiddleware]

  components
    .filter(c => c.middleware)
    .forEach(component => {
      if (Array.isArray(component.middleware)) {
        middleware.push(...component.middleware)
      } else {
        middleware.push(component.middleware)
      }
    })

  return middleware
}

/**
 * Resolve Middleware with guards
 * @param {Object} requireContext
 * @returns {Object}
 */
function resolveMiddleware(requireContext) {
  return requireContext
    .keys()
    .map(file => [file.replace(/(^.\/)|(\.js$)/g, ''), requireContext(file)])
    .reduce((guards, [name, guard]) => ({...guards, [name]: guard.default}), {})
}
