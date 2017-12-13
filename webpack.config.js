const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
const uglify = require('uglifyjs-webpack-plugin')
const htmlPlugin = require('html-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')
const purifyCssPlugin = require('purifycss-webpack')
const copyPlugin = require('copy-webpack-plugin');


const webSite = {
    publicPath:'http://localhost:8011',
    host:'localhost',
    port:8011
}
module.exports = {
    entry:{
        index: './src/index.js'
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js',
        publicPath: webSite.publicPath
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use:[
                        {loader:'css-loader',options:{importLoader:1}},
                        'postcss-loader'
                    ]
                })
            },
            {
                test:/\.(html|htm)$/,
                use:['html-withimg-loader']
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:5000,
                            outputPath:'/images/'
                        }
                    }
                ]
            },
            {
                test:/\.less$/,
                use:extractTextPlugin.extract({
                    fallback:'style-loader',
                    use:[
                        {loader:'css-loader',options:{importLoader:1}},
                        'postcss-loader',
                        {
                            loader:'less-loader'
                        }
                    ]
                })
            },
            {
                test:/\.(jsx|js)$/,
                use:{
                    loader:'babel-loader'
                },
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
       // new uglify(),
        new htmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        }),
        new extractTextPlugin('/css/main.css'),
        new purifyCssPlugin({
            paths: glob.sync(path.join(__dirname,'src/*.html'))
        }),
        //全局引入
        new webpack.ProvidePlugin({
            $:'jquery'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':'development'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new copyPlugin([{
            from: __dirname+'/src/lib',
            to:__dirname+'/dist/lib'
        }])
    ],
    devServer:{
        contentBase: path.resolve(__dirname,'dist'),
        host: webSite.host,
        compress: true,
        port: webSite.port
    }
}