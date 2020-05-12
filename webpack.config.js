const webpack = require('webpack');
const path = require('path');


module.exports = {
  entry: './main.js',
  //entry: './example.js',
  output: {
    path: path.resolve(__dirname, "./lib"),
    filename: 'index.js'
  },
  mode: 'development',
  resolve: {
    // Use our versions of Node modules.
    alias: {
      'fs': 'browserfs/dist/shims/fs.js',
      'buffer': 'browserfs/dist/shims/buffer.js',
      'path': 'browserfs/dist/shims/path.js',
      'processGlobal': 'browserfs/dist/shims/process.js',
      'bufferGlobal': 'browserfs/dist/shims/bufferGlobal.js',
      'bfsGlobal': require.resolve('browserfs')
    }
  },
  // webpack-dev-server configuration
  devServer: {
    // Can be omitted unless you are using 'docker' 
    host: '0.0.0.0',
    watchContentBase: true,
    port: 9001
  },
  plugins: [
    // Expose BrowserFS, process, and Buffer globals.
    // NOTE: If you intend to use BrowserFS in a script tag, you do not need
    // to expose a BrowserFS global.
    new webpack.ProvidePlugin({ BrowserFS: 'bfsGlobal', process: 'processGlobal', Buffer: 'bufferGlobal' })
  ],
  // DISABLE Webpack's built-in process and Buffer polyfills!
  node: {
    process: false,
    Buffer: false
  },module: {
    noParse: /browserfs\.js/
  }
};
