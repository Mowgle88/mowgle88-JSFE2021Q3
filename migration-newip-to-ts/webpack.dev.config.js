const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');


module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new ESLintPlugin()
    ],
};
