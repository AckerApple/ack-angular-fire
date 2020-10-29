"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Subscription_1 = require("rxjs/internal/Subscription");
var core_1 = require("@angular/core");
var auth_1 = require("@angular/fire/auth");
var FireUser = /** @class */ (function () {
    function FireUser(angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
        this.logout = new core_1.EventEmitter();
        this.login = new core_1.EventEmitter();
        this.subs = new Subscription_1.Subscription();
        this.monitorFirebase();
    }
    FireUser.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    FireUser.prototype.monitorFirebase = function () {
        var _this = this;
        this.subs.add(
        // if already logged in, does not wait for internet
        this.angularFireAuth.user.subscribe(function (user) {
            _this.user = user;
            _this.login.emit(user); // added 10-29
        })).add(
        // waits for internet
        this.angularFireAuth.authState.subscribe(function (user) {
            if (!user) {
                delete _this.user;
                _this.logout.emit();
                return;
            }
            _this.user = user;
            _this.login.emit(user);
        }));
    };
    FireUser.prototype.logoutNow = function () {
        delete this.user;
        var oldAuth = this.angularFireAuth.auth;
        // support old and new versions
        var auth = oldAuth && oldAuth.signOut ? oldAuth : this.angularFireAuth;
        auth.signOut();
    };
    FireUser = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [auth_1.AngularFireAuth])
    ], FireUser);
    return FireUser;
}());
exports.FireUser = FireUser;
//# sourceMappingURL=FireUser.js.map