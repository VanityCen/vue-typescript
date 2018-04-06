var fs = require('fs')

var proxyTemp = `var proxyTable = {
  '/api': {
    target: 'http://10.16.85.135:8080',
    changeOrigin: true,
    pathRewrite: {
      '/api': '/api'
    }
  }
}

module.exports = proxyTable`

if (!fs.existsSync('config/proxy.js')) {
  fs.writeFileSync('config/proxy.js', proxyTemp)
}