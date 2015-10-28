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
var angular2_2 = require('angular2/angular2');
var Jyanken = (function () {
    function Jyanken() {
        this.choose = new angular2_2.EventEmitter();
        this._refactoryTime = null;
    }
    Jyanken.prototype.jyan = function (item) {
        var _this = this;
        if (this._refactoryTime !== null)
            return;
        this.choose.next(item);
        this._refactoryTime = setTimeout(function () {
            _this.choose.next('ready');
            _this._refactoryTime = null;
        }, 2100);
    };
    __decorate([
        angular2_2.Output(), 
        __metadata('design:type', Object)
    ], Jyanken.prototype, "choose");
    Jyanken = __decorate([
        angular2_1.Component({
            selector: 'jyanken',
            templateUrl: 'jyanken/jyanken.html',
            styleUrls: ['jyanken/jyanken.css'],
            directives: [angular2_1.NgClass]
        }), 
        __metadata('design:paramtypes', [])
    ], Jyanken);
    return Jyanken;
})();
exports.Jyanken = Jyanken;
//# sourceMappingURL=jyanken.js.map