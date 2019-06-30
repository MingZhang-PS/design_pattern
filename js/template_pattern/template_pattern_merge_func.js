var Beverage = function(param) {
    var boilWater = function() {
        console.log('boilWater');
    };
    
    var brew = param.brew || function() {
        console.log('brew');
    };
    
    var pourInCup = param.pourInCup || function() {
        console.log('pourInCup');
    };
    
    var addCondiments = param.addCondiments || function() {
        console.log('addCondiments');
    };

    var F = function() {};
    F.prototype.init = function() {
        boilWater();
        brew();
        pourInCup();
        addCondiments();
    };

    return F;
};


var Coffee = Beverage({
    brew : function() {
        console.log('Coffee brew');
    },
    
    pourInCup : function() {
        console.log('Coffee pourInCup');
    },
    
    addCondiments : function() {
        console.log('Coffee addCondiments');
    }
}) ;
var c = new Coffee();
c.init();