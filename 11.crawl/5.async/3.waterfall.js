let async = require('async');
/**
 * waterfall也是串行执行，上一个任务的返回值会传递给下一个任务
 */
async.waterfall(
    [
        function bugEgg(callback){
            setTimeout(function(){
                callback(null,'鸡蛋');
            },2000)
        },
        function caoEgg(data,callback){
            setTimeout(function(){
                callback(null,'炒'+data+'饭');
            },4000)
        },
        function eat(data,callback){
            setTimeout(function(){
                callback(null,data+'结果');
            },3000)
        }
    ],function(err,result){
        console.log(err);
        console.log(result);
    }
);