let data = [
    {filename:'1.txt',content:'1'},
    {filename:'2.txt',content:'333333333332'},
    {filename:'3.txt',content:'3'}
]
let fs = require('fs');
// 如果希望在全部保存完毕之后执行一个函数
/*
let count = 0;

data.forEach(obj=>{
    fs.writeFile(obj.filename,obj.content,function(err,result){
        if(++count == data.length){
            console.log('全部完成');
        }
    });
})*/

let async = require('async');
// 1.循环的数组 2.循环的函数
async.forEach(data,function(item,callback){
   fs.writeFile(item.filename,item.content,callback)
},function(err){//最终的回调
    console.log(err);
});