var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

// 这个在 npm run dev 和 npm run build 时候是不同的
var TARGET = process.env.npm_lifecycle_event

console.log(TARGET);
var APP_PATH = path.join(__dirname, '/src')

if(TARGET === 'build'){
     var plugins = [
       new webpack.optimize.UglifyJsPlugin(),
       new ExtractTextPlugin("main.css")
    ]
    var rules = [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
    }]
}else{
    var plugins = []
    var rules = [{
            test: /\.css$/,
            use: "css-loader"
    }]
}

const config = {
    entry: APP_PATH + '/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    module: {
        rules: rules
    },
    plugins:plugins
}
 

module.exports = config;