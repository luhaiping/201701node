/**
 * 当你多个异步任务需要按顺序的执行可用async
 */
let async = require('async');
console.time('cost')
//数组中的异步任务会依次执行
async.series([
    function(callback){
       setTimeout(function(){
           console.log(1);
           // 1 错误对象
           callback(null,1);
       },3000)
    },
    function(callback){
        setTimeout(function(){
            console.log(2);
            callback('错误',2);
        },2000)
    },
    function(callback){
        setTimeout(function(){
            console.log(3);
            callback(null,3);
        },1000)
    }
],function(err,result){
    console.log(err);
    console.log(result);
    console.timeEnd('cost');
});
