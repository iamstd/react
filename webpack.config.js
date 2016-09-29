var webpack = require('webpack');

export modules = {
    entry: [
        path: './components/',
        'webpack-dev-server/client?http://0.0.0.0:9090',
        'webpack/hot/only-dev-server',
        './static/js/entry.coffee'
    ],
    outpus:{
        path: '',
        publicPath: "http://127.0.0.1:9090/static/dist/",
        path: './static/dist/',
        filename: "bundle.js"
    },
    modules:{
        loaders:{
             test: /\.jsx?$/, loaders: ['react-hot', 'jsx?harmony'], include: path.join(__dirname, 'src'),
        }
    }

}
