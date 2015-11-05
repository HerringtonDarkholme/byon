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