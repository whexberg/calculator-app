const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index'),
    module: {
        rules: [
            { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
            { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
            /**
             * style-loader creates `style` nodes from JS strings
             * css-loader translates CSS into CommonJS
             * sass loader compiles Sass to CSS
             *
             * Ordered this way because of composition:
             *
             * style-loader(css-loader(sass-loader()))
             */
            { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },
        ],
    },
    resolve: { extensions: ['.ts', '.js'] },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
        }),
        new MiniCssExtractPlugin({ filename: 'styles.[fullhash].css' }),
    ],
};
