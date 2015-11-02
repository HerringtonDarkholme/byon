var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
    ], Jyanken.prototype, "choose", void 0);
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