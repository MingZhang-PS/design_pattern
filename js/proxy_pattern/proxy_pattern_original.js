var Logger = function() {};

Logger.prototype.print = function(str) {
    console.log(str);
}

var logger = new Logger();
logger.print("str1");
logger.print("str2");
logger.print("str3");

//假设我们要求一个有一定缓存功能的logger，并且他延时五秒打印一次？