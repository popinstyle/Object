//构造函数模式创建对象
function Person(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        alert(this.name);
    }
}
var person_one = new Person("Charlie",20,"front-end engineer");//实例

//原型模式创建对象
function Personal(){}
Personal.prototype.name = "Charile";
Personal.prototype.age = 21;
Personal.prototype.job = "front-end engineer";
Personal.prototype.sayName = function(){
    alert(this.name);
};
var personal_one = new Personal();
//Object.getPrototypeOf()返回的对象为这个对象的原型;
alert(Object.getPrototypeOf(personal_one) == Personal.prototype);
alert(hasOwntypeProperty(personal_one,"name"));

//判断属性到底是存在于对象中还是存在于原型中
function hasOwntypeProperty(object,name){
    return !object.hasOwnProperty(name) && (name in object);
}