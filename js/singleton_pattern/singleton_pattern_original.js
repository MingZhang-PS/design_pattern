var People = function(name) {
    this.name = name;
}

People.prototype.getName = function() {
    return this.name;
}

People.getInstance = (function() {
    var instance = null;
    return function(name) {
        if(!instance) {
            instance = new People(name);
        }
        return instance;
    }
})();

var a = People.getInstance("a");
console.log(a.getName());
var b = People.getInstance("b");
console.log(b.getName());

// 但是这个单例有存在一些问题，问题在哪儿？
//var c = new People("c");