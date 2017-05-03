/**
 * promise
 * promise 内部会封装一个异步的任务,当new一个Promise实例的时候，任务就开始执行了
 **/
//创建一个了promise对象 状态为初始态
// resolve 解决
// reject 拒绝
let fs = require('fs');
let Promise = require('./Promise.js');
let promise = new Promise(function(resolve,reject){
     fs.readFile('1.txt','utf8',function(err,data){
         if(err){//err有值表示此任务失败了
         //如果任务失败了，会调用reject方法
             reject(err);
         }else{
         //如果任务成功了，会调用resolve方法
             resolve(data);
         //1.会把promise状态改为成功态
         }
     })
});
//1 成功的回调函数 2 失败的回调函数
promise.then(function(data){
    console.log(data);
},function(err){
    console.log(err);
});

