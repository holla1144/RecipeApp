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
           test: /\.scss$/,
           use: [
             'style-loader',
             'css-loader',
             'sass-loader'
           ],
         },
         {
         test: /\.js$/,
         loader: "babel-loader"
       },
      ],
    },

};
