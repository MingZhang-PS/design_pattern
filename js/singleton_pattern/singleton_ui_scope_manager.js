getUIScopeManagerInstance = (function() {
    var UIScopeManager = function() {
        this._scopes = null;
    }
    
    UIScopeManager.prototype._getGrantedScopes = function() {
        //ajax call to get scopes from engagement-center-core service
    }

    UIScopeManager.prototype.hasScope = function(scope) {
        if(!this._scopes) {
            this._getGrantedScopes();
        }
        //check if it is in the buffered _scopes. And return
        
    }

    var instance = null;
    return function(name) {
        if(!instance) {
            instance = new UIScopeManager(name);
        }
        return instance;
    }
})();

var a = getUIScopeManagerInstance();
console.log(a.hasScope("st01"));
var b = getUIScopeManagerInstance();
console.log(b.hasScope("ilog02"));

//问题在哪儿？