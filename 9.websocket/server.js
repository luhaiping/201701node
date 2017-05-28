/**
 * 创建websocket服务器
 **/
let WsServer= require('ws').Server;
// 8080 80 http  21 ftp 22 ssh 443 https
//创建一个服务器的实例
let server = new WsServer({port:8080});
//监听客户端的连接
//socket 代表的是与某个客户端的的连接对象
server.on('connection',function(socket){
    //监听此客户端发过来的消息
   socket.on('message',function(msg){
        console.log(msg);
        socket.send('服务器说:'+msg);
   });
});