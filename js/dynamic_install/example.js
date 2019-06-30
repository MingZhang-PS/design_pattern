function Basic() {
    this.buffer = [];
}

Basic.prototype = {
    constructor: Basic,

    add: function (item) {

    },
    remove: function (item) {

    }
};

function Log() {

}

Log.prototype = {
    constructor: Log,

    print: function () {

    },
};


var basic = new Basic();
var log = new Log();
function extendBasicWithLog(basic, log) {
    for (name in log) {
        if (name !== 'constructor') {
            basic[name] = log[name];
        }
    }
}

extendBasicWithLog(basic, log);
console.log(basic);




