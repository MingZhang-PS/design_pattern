function CreateJsPerson(name, age) {
    this.name = name;
    this.age = age;

    this.getAge = function() {
        return this.age;
    }
    // 浏览器再把创建的实例默认的进行返回
}

CreateJsPerson.prototype.writeJs = function () {
    console.log(this.name + 'write js');
};
var p1 = new CreateJsPerson('iceman' , 25);
p1.writeJs();
var p2 = new CreateJsPerson('mengzhe' , 26);
p2.writeJs();

// name age 甚至包括writeJs函数都是person instance私有的，比较浪费空间

console.log(p1.writeJs === p2.writeJs); // --> true
console.log('writeJs' in p1); // --> true 是它的一个属性
// hasOwnProperty：用来检测某一个属性是否为这个对象的私有属性，这个方法只能检测私有的属性
console.log(p1.hasOwnProperty('writeJs')); // --> false   'writeJs'是p1的私有属性