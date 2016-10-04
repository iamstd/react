var webpack = require('webpack');
var path = require('path');
export modules = {
    entry: [
        'webpack/hot/only-dev-server',
        path.resolve(___dirname, '.containers/APP/index.js')
    ],
    output:{
        path: path.resolve(__dirname, './build'),
        filename: "bundle.js"
    },
    modules:{
        loaders:[
             { test: /\.jsx?$/, loaders: 'babel' },
             { test: /\.css$/, loaders:['']},
        ]
    }

}
