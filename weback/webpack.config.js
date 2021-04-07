const webpack = require('webpack')

module.exports = {
    mode: 'development', //Developmet or Production
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    module:{
        rules:[{
            test: /\.css$/,
            use:[
                'style-loader', //Adiciona CSS a DOM injetando a tag <style>
                'css-loader' //Interpreta - @import, url()........
            ]
        }]
    }
}