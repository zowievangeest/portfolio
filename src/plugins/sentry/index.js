import Vue from 'vue'
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

const sentryKey = process.env.VUE_APP_SENTRY_KEY
const sentryApp = process.env.VUE_APP_SENTRY_APP

if (process.env.NODE_ENV === 'production') {
  Raven.config(`https://${sentryKey}@sentry.io/${sentryApp}`, {
    release: process.env.VUE_APP_SENTRY_RELEASE,
    environment: process.env.VUE_APP_SENTRY_STAGING
  })
    .addPlugin(RavenVue, Vue)
    .install()
} else {
  console.debug(
    'Not configuring sentry current environment is ',
    process.env.NODE_ENV
  )
}
