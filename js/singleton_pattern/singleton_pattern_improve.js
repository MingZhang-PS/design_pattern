// 不要把People constructor暴露出来

getPeopleInstance = (function() {
    var People = function(name) {
        this.name = name;
    }
    
    People.prototype.getName = function() {
        return this.name;
    }

    var instance = null;
    return function(name) {
        if(!instance) {
            instance = new People(name);
        }
        return instance;
    }
})();

var a = getPeopleInstance("a");
console.log(a.getName());
var b = getPeopleInstance("b");
console.log(b.getName());



//还不够完美？是不是可以把单例构造器做成公用的？