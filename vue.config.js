module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'styles': '@/assets/styles',
        'components': '@/components',
        'views': '@/views',
      }
    }
  },
}
