var killBill = function() {
    console.log('kill bill');
};
killBill();

var _killBillTemp = killBill;
killBill = function() {
    console.log('torture bill');
    _killBillTemp();
};

killBill();

//函数也只是一个普通的object而已，所以可以随意修改变幻