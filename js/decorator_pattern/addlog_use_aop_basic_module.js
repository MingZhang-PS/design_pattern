function player(name) {
    this.level = 0;
    this.name = name;
};

player.prototype.grow = function() {
    this.level = this.level+1;
};

//现在需求来了，我们想在每次grow之后自动通知队友，玩家增长到了哪一级
module.exports = player;

