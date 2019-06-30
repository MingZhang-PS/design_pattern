var Logger = function() {
    this.buffer = [];
    this.timer = null;
};

Logger.prototype.print = function(str) {
    this.buffer.push(str);
    if(this.timer) {
        return;
    }
    var _self = this;
    this.timer = setInterval(function() {
        console.log(_self.buffer);
        _self.buffer=[];
    }, 5000);
}

var logger = new Logger();
logger.print("str1");
logger.print("str2");
logger.print("str3");

//感觉Logger变得有点不“单一”了对不？如果我再要求logger支持自定义输出格式呢？如果某种情况我就想立即打印呢？
//拆出基类，然后继承？不，经验告诉我们滥用继承是有害的。
