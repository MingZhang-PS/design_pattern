var func1 = function(input) {
    //return something 
};

var func2 = function(input) {
    //return something 
};

var compositeFun = function (input) {
    for ( var i = 1; i < arguments.length; i++) {
        var fn = arguments[i];
        if (fn.call(fn, input) === false) {
            return false;
        }
    }
    return true;
};

var value = 0;
compositeFun(value, func1, func2);