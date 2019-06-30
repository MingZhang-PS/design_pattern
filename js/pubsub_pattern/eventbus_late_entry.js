//同样，我尝试不用继承或者flag来实现一个Late entry版本的eventbus

var BasicEventBus = require("./eventbus_basic.js");
var GlobalLateEntryEventBus = function () {

    var LateEntryEventBus = function () {
        this.eventQueue = {};
        this.eventBus = BasicEventBus.getInstance();
    };

    LateEntryEventBus.prototype.subscribe = function (eventId, fn) {
        this.eventBus.subscribe(eventId, fn);

        if (this.eventQueue[eventId]) {
            for (var i = 0; i < this.eventQueue[eventId].length; i++) {
                fn.call(this, this.eventQueue[eventId][i]);
            }
        }
    };

    LateEntryEventBus.prototype.unsubscribe = function (eventId, fn) {
        this.eventBus.unsubscribe(eventId, fn);
    };

    LateEntryEventBus.prototype.publish = function (eventId, eventData) {
        this.eventBus.publish(eventId,eventData);

        if (!this.eventQueue[eventId]) {
            this.eventQueue[eventId] = [];
        }
        this.eventQueue[eventId].push(eventData);
    }
    var eventBusInstance = null;
    return {
        getInstance: function () {
            if (!eventBusInstance) {
                eventBusInstance = new LateEntryEventBus();
            }
            return eventBusInstance;
        }
    }
}();

var defaultTurnLeftHandler = function (eventData) {
    console.log(eventData);
};


GlobalLateEntryEventBus.getInstance().publish('left', 'we received turn left command first time');

GlobalLateEntryEventBus.getInstance().publish('left', 'we received turn left command second time');

GlobalLateEntryEventBus.getInstance().subscribe('left', defaultTurnLeftHandler);

//eventQueue可以用环形队列实现
//如果unsubscribe了以后再subscribe，会不会把收到过的数据又收一遍？
//如果要实现priority event bus呢？