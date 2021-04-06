const webpack = require('webpack')

module.exports = {
    mode: 'development', //Developmet or Production
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    }
}