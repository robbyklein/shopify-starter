const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './js/all.js',
    output: {
        path: path.resolve(__dirname, 'theme/assets'),
        filename: 'scripts.js.liquid',
    },
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?-url', 'postcss-loader', 'sass-loader'],
                }),
            },
        ],
    },
    plugins: [new ExtractTextPlugin('style.css.liquid')],
}
