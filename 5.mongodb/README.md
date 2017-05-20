## 安装资源
- 64位服务器  http://pan.baidu.com/s/1miA0PmS
- 32位服务器 http://pan.baidu.com/s/1o8v3KDW
- 客户端  http://pan.baidu.com/s/1dF7rxsd

## 如何启动数据库
1. 新建一个空白目录(非C盘) 比如 d:\mongodata
> 注意： 目录中不要有中文和空格
2. 启动服务器
```
mongod --dbpath=d:\mongodata
```
3.如何连接服务器
```
mongo
```
4. 如何停止数据库
切换到admin数据库，并关闭数据库
```
use admin
db.shutdownServer();
```
5. 如何查看当前在哪个数据库下面
```
db
```