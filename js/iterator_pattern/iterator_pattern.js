var State = function(s) {
    this.state = s;
}

State.prototype.getState = function() {
    return this.state;
}

function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element.getState());
}

[new State(2), new State(5), new State(9)].forEach(logArrayElements);

//JS Array.Prototype.forEach() 方法本身就可以支持对数组的每个元素执行一次提供的函数。