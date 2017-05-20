let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/201701node');
let User = mongoose.model('User',new mongoose.Schema({
    name:String,
    age:Number
}));
let users = [];
for(let i=0;i<10;i++){
    users.push({name:`zfpx${i}`,age:i});
}
/*
User.create(users,function(err,docs){
    console.log(docs);
});*/
//findById 根据文档ID查询文档对象
/*User.findById('591fc5d57ce9c519ec67d3ad',function(err,doc){
    //console.log(doc);
});*/
//属性过滤 登录
//1 include 只返回指定的字段
//0 exclude 只排除指定的字段，其它字段均返回
// 只返回name 只排除掉age  __v
//Can\'t canonicalize query: BadValue Projection cannot have a mix of inclusion and exclusion.
//1. 班里只有男生全部站起来
//2. 除了女生全部站起来
// 当显示的字段的字段特别少的时候用1
// 当排除的字段特别少的时候用0
/*User.find({age:1},{name:1,age:1},function(err,docs){
    //console.log(err);
    //console.log(docs);
});*/
//登录的时候

// let name = 'zfpx1';
// let age = 1;
// // find永远返回数组 fineOne返回对象或者null
// User.findOne({name},function(err,doc){
//     console.log(doc);
// });


let pageNum = 2;//当前页码
let pageSize = 3;//每页的条数
//我现在先记用户按age字段正序排列，然后查询第2页的数据，每页3条
//sort表示排序  age:1 表示升序 表示 -1降序
//skip 跳过指定的条件
//limit 限定返回的条数
//只有调用exec的时候才会真正向数据库发起查询请求，
// age 3 4 5 /   6 5 4
User.find().sort({age:1}).skip((pageNum-1)*pageSize).limit(pageSize).exec(function(err,result){
    console.log(result);
});


