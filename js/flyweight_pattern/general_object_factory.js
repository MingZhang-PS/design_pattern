var objectFactory = function(builderFn) {
    var objectPool = [];
    return {
        create: function() {
            if (objectPool.length > 0) {
                return objectPool.shift();
            } else {
                return builderFn.apply(this,arguments);
            }
        },

        recover: function(obj) {
            objectPool.push(obj);
        }
    };
};

var Tool = function() {
    this.type = null;
};

var toolFactory = objectFactory(function(){return new Tool()});

var x = toolFactory.create();
x.type = '扳手';
toolFactory.recover(x);
var y = toolFactory.create();
console.log(y.type);

//flyweight模式的精髓在于把通用不变的东西固定下来，把不同场景下可变的东西拆出去。基本object可以在不同的场景下与变化点组合，形成即时可用的对象
