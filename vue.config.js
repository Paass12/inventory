module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/bulb-0.0.1-SNAPSHOT': {
        target: 'http://101.132.32.72:8080/',
        changOrigin: true
      }
    }
  }
}
