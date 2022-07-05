// webpack.config.js
// webpack配置文件
const path = require("path")
const hwp = require("html-webpack-plugin")
module.exports = {
    // 入口文件
    entry: "./src/main.js",
    //输出
    output: {
        // 输出文件名
        filename: "bundle.js",
        // 输出路径
        path: path.resolve(__dirname, "build")
    },
    // loader配置
    module: {
        rules: [
            {
                // 处理css
                // 匹配哪些文件
                test: /\.css$/,
                // 使用哪些loader进行处理
                use: [
                    // use数组中loader执行顺序，从下到上依次执行
                    // 创建style标签，将js中的样式插入到style标签中，然后添加到head里
                    "style-loader",
                    // 将css文件变成commonjs模块，里面内容为样式字符串
                    "css-loader"
                ]
            },
            {
                // 处理less
                test: /.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            // 处理图片资源
            // {
            //     test: /\.(jpg|png|gif)$/,
            //     // 下载url- loader file - loader
            //     loader: "url-loader",
            //     options: {
            //         limit: 8 * 1024
            //     }
            // },
            {
                // 处理html中的img(负责引入img)
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                // 打包其它资源
                // test://,
                // 排除使用exclude
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }

        ]
    },
    // 插件
    plugins: [
        // 处理html
        // 插件名：html-webpack-plugin
        // 功能：默认创建一个空的html文件，引入打包输出的所有资源
        new hwp({
            // 复制./ src / index.html文件
            template: "./src/index.html"
        })
    ],
    // 模式
    mode: "development"
    //mode:"production"

}