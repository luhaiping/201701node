import name from './component.js';
require('./index.css');

let img = document.createElement('img');
//如果不写require，那么webpack不会把此文件打包到目标目录
console.log(require('./big.jpg'));
img.src=require('./baidu.png');
document.body.appendChild(img);

let sum = (a,b) => a+b;
//alert(sum(1,2));
