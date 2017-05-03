//ES5
function Person(name){
    this.name = name;
}
Person.prototype.getName = function(){
    console.log(this.name);
}
//静态方法
Person.add = function(a,b){return a+b}



//ES6
/*class Person{
    //构造函数 当通过类创建一个实例的时候就会使用此构造函数
    constructor(name){
        this.name = name;
    }
    //定义所有实例公有的方法
    getName(){
        console.log(this.name);
    }
    //表示静态方法，是属于类的方法，不需要创建实例来调用
    static add(a,b){
        return a+b;
    }
}

let p = new Person('zfpx');
p.getName();
console.log(Person.add(1,2));
//extends表示继承
class Student extends Person{
  constructor(name,age){
      //super表示父类的构造函数
      super(name);//在此方法里，this指向的是子类的实例
      this.age = age;//再初始化自己的私有属性
  }
  getAge(){
      console.log(this.age);
  }
}*/
let s = new Student('zfpx2',8);
s.getName();
s.getAge();