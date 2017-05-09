let fs = require('fs');
/*let readFile = function (filename) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, 'utf8', function (err, data) {
            if (err)
                reject(err);//1.状态改为失败态 2. 调用失败的回调
            else
                resolve(data);//1.状态改为成功态 2.调用成功的回调
        })
    });
}*/
/*
//链式调用 是一种串行顺序执行
readFile('./1.txt')
.then(function (data) {//2.txt
//then里面成功的回调函数可以返回一个promise,
    return readFile(data);//2.txt -> 3.txt
}).then(function (data) {
    //console.log(data);// 3.txt
    return readFile(data);
}).then(function(data){
    console.log(data);
});*/
function execute(sleep){//休息的时间
    return new Promise(function(resolve,reject){
       setTimeout(function(){
           resolve(sleep);
       },sleep);
    });
}
console.time('cost');
Promise.all([execute(3000),execute(2000),execute(1000)]).then(function(data){
    console.log(data);//[1000,2000,3000]
    console.timeEnd('cost');//
});

Promise.race([execute(3000),execute(2000),execute(1000)]).then(function(data){
    console.log(data);//1000
});
