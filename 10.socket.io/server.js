/**
 * 聊天室 页面(express)+消息通信(socket.io)
 **/
let express = require('express');
let path = require('path');
//express是一个函数，调用后会返回一个HTTP的监听函数
let app = express();
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
io.on('connection',function(socket){
    //当服务器端接收到客户端的消息之后执行回调函数 msg就是对应的消息
   socket.on('message',function(msg){
       console.log(msg);
       socket.send('服务器说:'+msg);
   });
});
server.listen(8080);
