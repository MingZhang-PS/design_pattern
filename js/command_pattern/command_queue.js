function Person() {
    this.name = null;
    this.left = function (steps) {
        console.log('%s turn left %i steps', this.name, steps);
    };
    this.right = function (steps) {
        console.log('%s turn right %i steps', this.name, steps);
    };
};

var CommandQueue = function (receiver) {
    this.commandlist = [];
    this.receiver = receiver;
};

CommandQueue.prototype.addCommand = function (command) {
    if (!command || !command.action) {
        throw 'command is invalid';
    }
    
    this.commandlist.push(command);
};

CommandQueue.prototype.execuate = function () {
    for (var i = 0; i < this.commandlist.length; i++) {
        this.receiver[this.commandlist[i].action].call(this.receiver, this.commandlist[i].value)
    }
    this.commandlist.length = 0;
};

var p = new Person();
p.name = 'ming';

var commandQueue = new CommandQueue(p);
commandQueue.addCommand({ action: 'left', value: 4 });
commandQueue.addCommand({ action: 'right', value: 6 });
//command是有间隔地发还是一个紧接一个发，都是CommandQueue自己决定
//receiver什么时候做完，以及需不需要等待上一个command做完，再做下一个，也许可以做成策略模式。或者实现为commandqueue工厂，按需生成不同用途的commandqueue
commandQueue.execuate();
//Hystrix  典型的命令队列！