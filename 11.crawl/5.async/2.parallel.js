let async = require('async');
/**
 * 并行就是多个任务同时开始执行,等所有的任务全部执行完毕之后会执行最后的回调
 */
console.time('cost')
async.parallel([
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
            callback(null,2);
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