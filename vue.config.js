const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  // chainWebpack: config => {
  //   config.plugin('VuetifyLoaderPlugin').tap(() => [{
  //     progressiveImages: true
  //   }])
  // },
  configureWebpack: config => {
    config.resolve.alias = {
      "@": path.resolve(__dirname, "src"),
      "@mixins": path.resolve(__dirname, "src/mixins")
    }
    if (process.env.NODE_ENV !== 'production') return;
    return {
      plugins: [
        new PrerenderSPAPlugin(
          // Absolute path to compiled SPA
          path.resolve(__dirname, 'dist'),
          // List of routes to prerender
          [ '/','/project'],
          {
            // options
          }
        ),
      ],
    }
  },
}