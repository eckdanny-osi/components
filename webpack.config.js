const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    plugins: [
        new CleanWebpackPlugin(['lib'])
    ],
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.js',
        library: 'say',
        libraryTarget: 'umd'  // --(*)^(*)--
    }
}