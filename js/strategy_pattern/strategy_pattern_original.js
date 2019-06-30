var validator = function () {
    return function validate (value, type) {
        switch (type) {
            case 'isNonEmpty':
                {
                    return true; // NonEmpty 验证结果
                }
            case 'isNumber':
                {
                    return true; // Number 验证结果
                    break;
                }
            case 'isAlphaNum':
                {
                    return true; // AlphaNum 验证结果
                }
            default:
                {
                    return true;
                }
        };
    };
};

var myValidator = new validator();
console.log(myValidator(3, 'isNumber'));

//为了增强validator，必须进行侵入式修改
//平衡“大而全”与“适度冗余”
