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
var jyanken_1 = require('../jyanken/jyanken');
var chino_1 = require('../chino/chino');
var MyApp = (function () {
    function MyApp() {
        this.score = 0;
        this.choice = 'ready';
    }
    MyApp.prototype.onChoose = function (item) {
        if (item === 'paper')
            this.score++;
        this.choice = item;
    };
    MyApp = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.html',
            directives: [jyanken_1.Jyanken, chino_1.Chino],
            styleUrls: ['app/app.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], MyApp);
    return MyApp;
})();
exports.MyApp = MyApp;
angular2_1.bootstrap(MyApp);
//# sourceMappingURL=app.js.map