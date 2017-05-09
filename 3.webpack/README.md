## webpack
## 初始化项目
```
npm init -y
```

## 安装 webpack
```
npm install webpack webpack-dev-server -S
```

## 执行步骤
1. 执行脚本 `npm run build`
2. 会去找`package.json`中对应的`scripts`找到`build`对应的命令
3. 其实是找的是当前目录下面`ode_modules`下`.bin`目录下面的`webpack.cmd`文件去执行
4. `webpack`可执行文件是先找到`webpack.config.js`配置文件，再找到其中`entry`.把此入口文件和它依赖的模块都打包保存到`build`目录下面的`bundle.js`文件里