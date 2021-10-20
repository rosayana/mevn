const vueLoaderPlugin = require('vue-loader');

module.exports = {
    entry: '/src/app/index.js',
    output:{
        path: __dirname + '/src/public',
        filename: 'bundle.js'
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                user: {
                    loader: 'babel-loader'
                }
            },
            {
                test:/\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new vueLoaderPlugin()
    ]
};