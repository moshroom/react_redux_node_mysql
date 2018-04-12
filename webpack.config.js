/**
 * @desc 项目webpack配置文件
 * @author Jade 
 **/

var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.join(__dirname, '/node_modules');

module.exports = {
    entry: {
        // admin: './src/entries/admin',
        front: './src/entries/front.entry',
        // 作为外部模块,不打包到webpack的主文件
        vendor: ['react', 'react-dom', 'redux'],
    },
    output: {
        path: path.join(__dirname, '/public/build'),
        publicPath: '/assets/',
        filename: '[name].bundle.js'
    },
    module: {
        noParse: [
            path.join(nodeModulesPath, '/react/dist/react.min'),
            path.join(nodeModulesPath, '/react-dom/dist/react-dom.min'),
            path.join(nodeModulesPath, '/redux/dist/redux.min'),
        ],
        loaders: [
            { test: /\.less$/, loader: 'style!css!less' },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.(gif|jpg|png)$/, loader: 'url?limit=8192&name=images/[name].[hash].[ext]' },
            { test: /\.(woff|svg|eot|ttf)$/, loader: 'url?limit=50000&name=fonts/[name].[hash].[ext]' }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        // new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }), // 版本上线时开启
        new webpack.optimize.CommonsChunkPlugin('common.js'),  // 抽取公共部分
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}
/**
 * 注意入口文件有三个：admin、front和vendor。
 * admin是管理后台的入口、front是前台商城的入口、
 * vender则是把react、react-dom、redux这三个大的依赖模块单独抽离成一个文件，
 * 这样可以大大减小webpack打包后文件的大小。
 * 还有一个技巧是 commonsChunkPlugin() 这个插件，它可以再次抽取输入文件的公共部分，再次减小这三个文件的大小，
 * 然后利用浏览器的并行加载能力，稍稍加快整个项目的加载速度。
 */