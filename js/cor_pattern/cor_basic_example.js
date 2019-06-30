var step1 = function(count) {
    if (count === 1)  {
        console.log('handle in step1');
        return 'handled';
    } else {
        return 'pass';
    }
};

var step2 = function(count) {
    if (count === 2)  {
        console.log('handle in step2');
        return 'handled';
    } else {
        return 'pass';
    }
};

var step3 = function(count) {
    if (count === 3)  {
        console.log('handle in step3');
        return 'handled';
    } else {
        return 'pass';
    }
};

 function chain(fn) {
    this.handler = fn;
    this.nextHandler = null;
};

chain.prototype.setNextHandler = function(fn) {
    this.nextHandler = new chain(fn);
    return this ;
};

chain.prototype.handle = function() {
    var ret = this.handler.apply(this, arguments);
    if(ret === 'pass') {
        if(this.nextHandler) {
            return this.nextHandler.handle.apply(this.nextHandler, arguments);
        }
    }
    return ret;
};

var myChain = new chain(step1).setNextHandler(step2);
var finalResult = myChain.handle(2);
if(finalResult === 'handled') {
    console.log('handled');
} else {
    console.log('unhandled');
}


