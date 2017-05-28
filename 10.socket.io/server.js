/**
 * 聊天室 页面(express)+消息通信(socket.io)
 **/
let express = require('express');
let path = require('path');
let Message = require('./model').Message;
//express是一个函数，调用后会返回一个HTTP的监听函数
let app = express();
//把node_modules作为静态文件根目录
app.use(express.static(path.resolve('../node_modules')));
//当客户端通过GET方式访问/路径的时候，服务器返回index.html文件
app.get('/',function(req,res){
  res.sendFile(path.resolve('index.html'));
});
//app.listen();
//创建一个HTTP服务器
let server = require('http').createServer(app);
//创建一个IO，并且把server作为参数传入进来
let io = require('socket.io')(server);
//监听客户端的连接，当连接到来的时候执行对应的回调函数
//socket对象是每个客户端会专属有一个
//存放着每个客户端的用户名和socket对象对应关系
let sockets = {};
io.on('connection',function(socket){
    //此变量代表当前用户的用户名
    let username;
    //当前的房间名
    let currentRoom;
    //当服务器端接收到客户端的消息之后执行回调函数 msg就是对应的消息
   socket.on('message',function(msg){
     if(username){//如果已经赋过值了
//广播给所有的人
         let reg = /@([^\s]+) (.+)/;
         //         @张三      内容
         let result = msg.match(reg);
         if(result){//私聊
             //得到了私聊的对方的用户名
            let toUser = result[1];
            //得到的私聊的内容
            let content = result[2];
             socket.send({username,content,createAt:new Date().toLocaleString()});
            sockets[toUser].send({username,content,createAt:new Date().toLocaleString()});
         }else{
             Message.create({username,content:msg},function(err,message){
                 // _id username content createAt
                 //如果此用户在某个房间内
                 if(currentRoom){
                     //那么广播的时候会向currentRoom中进行广播
                    io.in(currentRoom).emit('message',message);
                 }else{
                     io.emit('message',message);
                 }
             })

         }
     }else{//如果还没有赋过值，还是undefined
          username = msg;
          //建立用户名和socket对象的对应关系
          sockets[username] = socket;
         //广播给所有的人
         io.emit('message',{username:'系统',content:`欢迎${username}来到聊天室`,createAt:new Date().toLocaleString()});
     }
   });
   //服务器监听到消息 客户端想获取最近的20条数据
   socket.on('getAllMessages',function(){
       //查询出最近的20条数据并发给客户端
        Message.find().sort({createAt:-1}).limit(20).exec(function(err,messages){
           messages.reverse();//显示的时候还是要从旧往新显示
           socket.emit('allMessages',messages);
        })
   })
    //监听客户端想加入房间的事件
   socket.on('join',function(roomName){
        if(currentRoom){//如果此客户端原来在某个房间内，则让他离开那个房间
            socket.leave(currentRoom);
        }
       //让此socket对应进入此房间
        socket.join(roomName);
        currentRoom = roomName;
   });
   //监听客户端想删除某个消息的事件
   socket.on('delete',function(id){
      Message.remove({_id:id},function(err,result){
        io.emit('deleted',id);
      });
   });
});
server.listen(8080);
/**
 * 1. 实现匿名聊天
 *    1. 给按钮绑定事件 或者给 表单绑定事件
 *    2. 在提交表单的时候1取消默认事件，2. 获取消息内容发送给服务器
 *    3. 服务器接收到客户端发过来的消息，广播给所有的客户端
 *    4. 其它客户端收到消息后会把放到消息列表里显示
 * 2. 实现具名聊天
 *    1. 当客户端连接上服务器之后，第一次说的话会作为他的用户名。
 *    2. 以后每次这个客户端再发言，那么就会认为是此用户名发的言
 * 3. 实现一个私聊
 * 4. 实现消息持久化
 * 5. 在页面加载完成后显示最近20条历史消息
 * 6. 建立房间
 *
 *
 */
