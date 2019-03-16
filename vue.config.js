const SentryPlugin = require('@sentry/webpack-plugin')
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)

module.exports = {
  productionSourceMap: true,
  configureWebpack: config => {
    if (IS_PROD) {
      const plugins = []
      plugins.push(
        new SentryPlugin({
          release: process.env.VUE_APP_SENTRY_RELEASE,
          include: './dist',
          ignore: ['node_modules', 'webpack.config.js']
        })
      )
      config.plugins = [...config.plugins, ...plugins]
    }
  }
}
