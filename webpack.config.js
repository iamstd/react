var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: [
        'webpack/hot/dev-server',
        path.resolve(__dirname, './containers/APP/index.js')
    ],
    output:{
        path: path.resolve(__dirname, './build'),
        filename: "bundle.js"
    },
    module:{
        loaders:[
             { test: /\.js$/, loader: 'babel-loader' },
             { test: /\.css$/, loaders: ['style', 'css', 'sass']},
             { test: /\.(png|jpg)$/, loader: 'url?limit=102400'}
        ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
}
