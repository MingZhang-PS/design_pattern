var longTimeJob = function (param) {
    return new Promise(resolve => {
        setTimeout(() => resolve(param), 5000);
    });
};

var step1 = function (total) {
    console.log('handle in step1');
    return longTimeJob(total + 1);
};

var step2 = function (total) {
    console.log('handle in step2');
    return longTimeJob(total + 2);
};

var step3 = function (total) {
    console.log('handle in step3');
    return longTimeJob(total + 3);
};

async function asyncAdd() {
    var result1 = await step1(0);
    var result2 = await step2(result1);
    var result3 = await step3(result2);
    return result3;
};

asyncAdd().then((finalRet) => { console.log(finalRet) });

//参考https://segmentfault.com/a/1190000007535316
