//加载mongoose模块
let mongoose = require('mongoose');
// 客户端 是用来操作数据库的，对数据库中的数据进行增删除改查之类的操作
//数据库的连接地址格式: mongodb://IP地址或域名:端口号(如果是默认端口27017的话可以不写)/数据库的名字(随便写，可以事先不存在)
mongoose.connect('mongodb://localhost:27017/201701node');
//创建数据库骨架模型 并不能操作数据库
//1.规定集合的名称  2.规定集合中的文档属性名 3.集合中的文档属性的类型 4.默认值
let UserSchema = new mongoose.Schema({
    username:String,//类似可以使用JS类型
    age:Number
});//collection指定集合的名称
//定义用户模型
//如果没有指定collection,模型名=>小写user->复数users
let UserModel = mongoose.model('User',UserSchema);
// _id  这是一个文档的主键  1.唯一 2 稳定
//如果传的对象字段多于schema中定义的数量，那么多余的字段会被忽略掉
/*UserModel.create({username:'zfpx1',age:1},function(err,doc){//doc是保存成功之后的文档对象
    if(err){
        console.error(err);
    }else{
        console.log(doc);
    }
});*/
/**
 * 1参数是删除的条件
 * 默认remove会删除掉所有的匹配的记录，有几条删几条
 */
/*UserModel.remove({username:'zfpx2'},function(err,result){
    // result: { ok: 1, n: 1 },
    console.log(result.result);
});*/
/**
 * 1. 条件
 * 2. 更新后的值
 * 3. 回调函数
 * 更新的时候只会更新匹配到的第一条,
 * 因为修改前和修改后的值是一样的，则不实际更新
 */
UserModel.update({username:'zfpx1'},{age:2},function(err,result){
    //{ ok: 1, nModified: 1, n: 1 }
    //{ ok: 1, nModified: 0, n: 1 }
    // { ok: 1, nModified:1, n: 1 }
    console.log(result);
});
