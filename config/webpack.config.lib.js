var merge = require( 'webpack-merge' );
var common = require( './webpack.config.lib.common' );
var path = require( 'path' );

module.exports = merge( common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: 'bitmelo.js',
    library: 'bitmelo',
    libraryTarget: 'umd'
  }
});
