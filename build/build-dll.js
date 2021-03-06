var fs = require('fs')
var webpack = require('webpack')
var webpackConfig = require('./webpack.dll.conf')

if (!(fs.existsSync('dll/vendor.bundle.js') && fs.existsSync('dll/vendor-manifest.json'))) {
  webpack(webpackConfig, function (err, stats) {
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')
  
    if (stats.hasErrors()) {
      console.log('  Build DLL failed with errors.\n')
      process.exit(1)
    }
  })
} 

