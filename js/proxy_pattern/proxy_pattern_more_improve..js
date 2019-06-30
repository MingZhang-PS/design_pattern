var Logger = function() {};

Logger.prototype.print = function(str) {
    console.log(str);
}

var BufferLogger = function() {
    this.logger = new Logger();
    this.timer = null;
    this.buffer = [];
};

BufferLogger.prototype.print = function(str) {
    this.buffer.push(str);
    if(this.timer) {
        return;
    }
    var _self = this;
    this.timer = setInterval(function() {
        _self.logger.print(_self.buffer);
        _self.buffer=[];
    }, 5000);
}


var bufferLogger = new BufferLogger();
bufferLogger.print("str1");
bufferLogger.print("str2");
bufferLogger.print("str3");
//基本的logger还可以用，延时的logger也还在
//想想，如何实现一个延时的，可自定义输出格式的logger?
var basicLogger = new Logger();
basicLogger.print("str4");
basicLogger.print("str5");
basicLogger.print("str6");


