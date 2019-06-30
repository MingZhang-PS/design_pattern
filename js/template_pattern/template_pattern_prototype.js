var Beverage = function() {
};

Beverage.prototype.boilWater = function() {
    console.log('boilWater');
};

Beverage.prototype.brew = function() {
    console.log('brew');
};

Beverage.prototype.pourInCup = function() {
    console.log('pourInCup');
};

Beverage.prototype.addCondiments = function() {
    console.log('addCondiments');
};

Beverage.prototype.init = function() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
};

var Coffee = function() {

};

Coffee.prototype = new Beverage();

Coffee.prototype.brew = function() {
    console.log('Coffee brew');
};

Coffee.prototype.pourInCup = function() {
    console.log('Coffee pourInCup');
};

Coffee.prototype.addCondiments = function() {
    console.log('Coffee addCondiments');
};

var c = new Coffee();
c.init();