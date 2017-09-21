var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

// 这个在 npm run dev 和 npm run build 时候是不同的
var TARGET = process.env.npm_lifecycle_event

console.log(TARGET);
var APP_PATH = path.join(__dirname, '/src')

const config = {
    entry: APP_PATH + '/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }]
    },
    plugins: [
       TARGET == 'build' ? new webpack.optimize.UglifyJsPlugin():'',
       TARGET == 'build' ? new ExtractTextPlugin("main.css"):'',
    ]
}
 

module.exports = config;