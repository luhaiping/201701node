/**
 *
 **/
let path = require('path');
module.exports = {
    //入口文件 打包的时候先找到这个文件，然后把这个文件以及它依赖的其它模块都打包到一个文件里去
    entry:'./src/index.js',
    //指定如何保存输出
    output:{
        path:path.resolve('build'),//输出的目录
        filename:'bundle.js'//输出的文件名
    }
}