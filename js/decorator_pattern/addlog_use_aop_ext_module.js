const player = require('./addlog_use_aop_basic_module');
let temp = player.prototype.grow;

player.prototype.grow = function() {
    temp.apply(this, arguments);
    console.log(this.name + ' has grown to level ' + this.level);
}

var p = new player('ming');
p.grow();

//这种方式更多适用于函数功能在消费端按需随时扩展，而且可以扩展了再继续扩展。说白了就是在改写函数的功能。
//但如果是player本身在各种场景下都需要扩展实现的功能,直接enhance player
//而如果是既要消费端尽可能少修改的话，又要减少player本身的改动的话，可以用Proxy来实现。那样只需要消费端改为消费proxy即可