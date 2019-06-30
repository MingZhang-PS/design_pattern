var numberChecker = {
    check: function (value) {
        return !isNaN(value);
    }
};

var alphaNumChecker = {
    check: function (value) {
        return !/a-z0-9/i.test(value);
    }
};

var textNonEmptyChecker = {
    check: function (value) {
        return value !== "";
    }
};

var validator = {
    validate: function (value, checkers) {
        var ret = true;
        if(checkers instanceof Array && checkers.length > 0) {
            for (let el of checkers) {
                if ((ret = ret && el.check(value)) === false) {
                  break;
                }
              }
            
        }
        return ret;
    }
};

//任意指定需要的validator
console.log(validator.validate(3, [alphaNumChecker]));
console.log(validator.validate(0xA, [alphaNumChecker, numberChecker]));

