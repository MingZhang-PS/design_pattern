//首先把单例构造器做成公用

var getInstance = function(fn) {
    var result = null;
    return function() {
        return result || (result = fn.apply(this, arguments));
    }
}

// 然后把People对象的创建逻辑做成匿名函数传进来
getPeopleInstance = getInstance(function(n) {
    var people = {
        name: n,
        getName: function() {
            return this.name;
        }
    };
    return people;
})

getBeastInstance = getInstance(function(t) {
    var beast = {
        type: t,
        getType: function() {
            return this.type;
        }
    };
    return beast;
})
var a = getPeopleInstance("a");
console.log(a.getName());
var b = getPeopleInstance("b");
console.log(b.getName());

// getInstance真的和具体创建逻辑分开了！
var c = getBeastInstance("monster");
console.log(c.getType())
