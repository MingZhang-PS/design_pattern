function paticipant(name) {
    this.name = name;
    this.chatRoom = null;
};

paticipant.prototype.send = function (msg, to) {
    if (this.chatRoom) {
        this.chatRoom.sendMessage(msg, this, to);
    }
};

paticipant.prototype.receive = function (msg) {
    console.log(this.name + ' receives ' + msg);
};

var chatRoom = {
    paticipants: [],
    sendMessage: function (msg, sender, receiver) {
        if (receiver) {
            receiver.receive(msg);
        } else {
            var recivers = this.paticipants.filter(x => { return x !== sender });
            recivers.forEach(x => { x.receive(msg) });
        }
    },
    addPaticipants: function (paticipant) {
        this.paticipants.push(paticipant);
        paticipant.chatRoom = this;
    }
};

var p1 = new paticipant('a');
var p2 = new paticipant('b');
chatRoom.addPaticipants(p1);
chatRoom.addPaticipants(p2);

p1.send('hello');
//p1.send('hello', p2);

//mediator的目的在于把多个对象之间的互相依赖改为对象单纯地对mediator的依赖
//但是所有的复杂协调逻辑都弄到了mediator里面可能让mediator本身复杂化，所以Mediator对象本身也要用pattern来简化拆分
