let path = require('path');
module.exports = {
    //指定打包的入口文件
    entry: './src/index.js',
    //输出配置
    output: {
        //打包后的保存目录
        path: path.resolve('build'),
        //文件名
        filename:'bundle.js'
    },
    module: {
        loaders:[
            {
                test:/\.js$/,//指定文件匹配模式
                loader:'babel-loader'//调用babel把ES6代码转成ES5
            },{
              test:/\.(jpg|png|gif)$/,
              loader:'url-loader'
            }
        ]
    }
}