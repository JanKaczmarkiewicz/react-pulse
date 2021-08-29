const path = require('path')
const webpack = require('webpack')

/** @type { import('webpack').Configuration } */
const config = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'app', 'index.tsx'),
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        hot: true,
        port: 3000,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
}

module.exports = config
