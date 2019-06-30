//定义和用法
//each() 方法规定为每个匹配元素规定运行的函数。

//提示：返回 false 可用于及早停止循环。

var isArray = Array.isArray || function (obj) {
    return toString.call(obj) === "[object Array]";
};

var foreach = function (objs, callback) {
    var value = false;
    if (isArray(objs)) {
        // 为啥子数组最好不要for in?
        // https://blog.csdn.net/VagueCoder/article/details/47294481
        for (var i = 0; i < objs.length; i++) {
            value = callback.call(objs[i], i, objs[i]);
            if (value === false) {
                break;
            }
        }
    } else {
        if (objs) {
            for (obj in objs) {
                value = callback.call(objs[i], i, objs[i]);
                if (value === false) {
                    break;
                }
            }
        }
    }
    return objs;
};

foreach([1, 2, 3], function (index, obj) {
    console.log('position %i, value %s', index, obj);
});