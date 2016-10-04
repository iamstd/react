var webpack = require('webpack');
var path = require('path');
export default {
    entry: [
        'webpack/hot/dev-server',
        path.resolve(__dirname, '.containers/APP/index.js')
    ],
    output:{
        path: path.resolve(__dirname, './build'),
        filename: "bundle.js"
    },
    modules:{
        loaders:[
             { test: /\.jsx?$/, loader: 'babel' },
             { test: /\.css$/, loaders: ['style', 'css', 'sass']},
             { test: /\.(png|jpg)$/, loader: 'url?limit=102400'}
        ]
    }

}
