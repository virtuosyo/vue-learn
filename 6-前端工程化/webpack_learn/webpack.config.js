const path = require('path')
// 引入模块 得到一个构造函数
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 创建实例化对象
const htmlPlugin = new HtmlWebpackPlugin({
    // 指定要用到的模板文件
    template: './src/index.html',
    // 指定生成的文件名称 该文件存在于内存中 在目录中不显示
    filename: 'index.html'
})
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    // 编译模式
    // 开发环境  和  生产环境
    entry: path.join(__dirname, './src/index.js'),
    output: {
        // 输出文件的存放路径
        path: path.join(__dirname, './dist'),
        // 输出文件的名称
        filename: 'bundle.js'
    },
    mode: 'development',
    // plugins数组是webpack打包期间用到的一些插件列表
    plugins: [htmlPlugin, new VueLoaderPlugin()],
    module: {
        rules: [{
            // test表示匹配的文件类型 use表示对应要调用的loader
            test: /\.css$/,
            // use数组中指定的loader顺序是固定的
            // 多个loader的调用顺序是从后往前调用
            use: [
                'style-loader',
                'css-loader',
                // 自动添加css的兼容前缀
                'postcss-loader'
            ]
        }, {
            test: /\.less$/,
            use: [
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        }, {
            // 图片加载器
            test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
            // 图片大小小于limit才会被加载为base64编码
            use: 'url-loader?limit=16940',
        }, {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.vue$/,
            use: 'vue-loader',
        }]
    }
}