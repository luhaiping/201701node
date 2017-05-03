/*export var name = 'zfpx';
var age = 8;*/
//是一个关键字，表示把此对象导出
//export {name,age};

/*module.exports = {name,age}*/

// commonjs  es6 module
// 后端模块 common.js 前端的es6
//default 默认导出
export default class Person{
    constructor(name){
        this.name = name;
    }
}