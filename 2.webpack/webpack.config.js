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
    },
    /**
     * 默认情况下只能加载js文件，如果要加载其它类型的文件需要配置加载器
     * 可以为模块配置好多加载器
     */
    module:{
       loaders:[
           {
             test:/\.js$/,
//babel-loader负责转义代码,可以把ES6代码转义成ES5
             loader:'babel-loader'
           },
           {
               //加载模块(require,import)的时候，会用此正则匹配文件后缀，如果匹配上，则执行对应的加载器
               //多个加载器之间可以用!分隔开，执行的时候像流水线一下，从右向左执行
               test:/\.css$/,
               loader:'style-loader!css-loader'
           },
           {
               test:/\.(jpg|png|gif)$/,
               loader:'url-loader?limit=8k'
           }
       ]
    }
}