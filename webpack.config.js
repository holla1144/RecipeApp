const path = require('path');

module.exports = {
    entry: './client/src/index.js',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'client/dist'),
        filename: 'bundle.js'
    },
    module: {
       rules:[
         {
         test: /\.js$/,
         loader: "babel-loader"
       }, {
         test: /\.scss$/,
         use: [
           'style-loader',
           'css-loader',
           'sass-loader'
           ],
       }]
    }
};
