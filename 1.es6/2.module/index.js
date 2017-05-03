//解构赋值

/*import {name,age} from './component.js';
console.log(name,age);*/

/*import {name,age} from './component.js';
console.log(name,age);*/

//如何在不知道要导入的模块内部有哪些变量的情况下进行接收
/*import * as obj from './component.js';
alert(obj.age);*/

import Pes from './component.js';
let p = new Pes('zzzz');
console.log(p);
