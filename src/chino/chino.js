var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var Chino = (function () {
    function Chino() {
        var _this = this;
        setInterval(function () { console.log(_this.choice); }, 300);
    }
    Object.defineProperty(Chino.prototype, "choice", {
        get: function () {
            return this._choice;
        },
        set: function (s) {
            this._choice = s;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chino.prototype, "choice",
        __decorate([
            angular2_1.Input(), 
            __metadata('design:type', String), 
            __metadata('design:paramtypes', [String])
        ], Chino.prototype, "choice", Object.getOwnPropertyDescriptor(Chino.prototype, "choice")));
    Chino = __decorate([
        angular2_1.Component({
            selector: 'chino',
            templateUrl: 'chino/chino.html',
        }), 
        __metadata('design:paramtypes', [])
    ], Chino);
    return Chino;
})();
exports.Chino = Chino;
//# sourceMappingURL=chino.js.map