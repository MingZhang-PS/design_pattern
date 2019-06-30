var BasicEventBus = function () {
    var EventBus = function () {
        this.eventListeners = {};

    };

    EventBus.prototype.subscribe = function (eventId, fn) {
        if (!this.eventListeners[eventId]) {
            this.eventListeners[eventId] = [];
        }
        this.eventListeners[eventId].push(fn);
    };

    EventBus.prototype.unsubscribe = function (eventId, fn) {
        if (this.eventListeners[eventId]) {
            var index = this.eventListeners[eventId].indexOf(fn);
            if (index !== -1) {
                this.eventListeners[eventId].splice(index, 1);
            }
        }
    };

    EventBus.prototype.publish = function (eventId, eventData) {
        var listeners = this.eventListeners[eventId];
        if (listeners) {
            for (var i = 0; i < listeners.length; i++) {
                listeners[i].call(this, eventData);
            }
        }
    }
    var eventBusInstance = null;
    return {
        getInstance: function () {
            if (!eventBusInstance) {
                eventBusInstance = new EventBus();
            }
            return eventBusInstance;
        }
    }
}();

var defaultTurnLeftHandler = function (eventData) {
    console.log(eventData);
};


//BasicEventBus.getInstance().subscribe('left', defaultTurnLeftHandler);

//BasicEventBus.getInstance().publish('left', 'we received turn left command');

//BasicEventBus.getInstance().unsubscribe('left', defaultTurnLeftHandler);

//BasicEventBus.getInstance().publish('left', 'we received turn left command');

module.exports =BasicEventBus;

