/**
 * promise出现最早是用来解决回调嵌套的问题的
 * 1.txt->2.txt->3.txt->3
 **/
let fs = require('fs');
//在真实开发过程在，不会写同步代码
// var result = fs.readFileSync(fs.readFileSync(fs.readFileSync('./1.txt','utf-8'),'utf-8'),'utf-8');
// console.log(result);
//err 错误对象 data返回的文本内容
fs.readFile('./1.txt', 'utf8', function (err,data) {//2.txt
    fs.readFile(data, 'utf8', function (err,data) {//3.txt
        fs.readFile(data,'utf8', function (err,data) {//3
            console.log(data);
        });
    })
});

