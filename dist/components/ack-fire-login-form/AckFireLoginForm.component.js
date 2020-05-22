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
/* DEPRECATED: use firebase-ui */
var core_1 = require("@angular/core");
var ack_fire_login_form_template_1 = require("./ack-fire-login-form.template");
var ack_angular_fx_1 = require("ack-angular-fx");
var app_1 = require("firebase/app");
var auth_1 = require("@angular/fire/auth");
var AckFireLoginForm = /** @class */ (function () {
    function AckFireLoginForm(AngularFireAuth) {
        this.AngularFireAuth = AngularFireAuth;
        this.submitCount = 0;
        this.loadCount = 0;
        this.user = {};
        this.vals = {};
        this.rejectCount = 0;
        this.emailChange = new core_1.EventEmitter();
        this.success = new core_1.EventEmitter();
    }
    AckFireLoginForm.prototype.reval = function () {
        var email = this.email;
        this.vals.email = email && email.indexOf('@') >= 0 ? true : false;
        this.vals.password = this.user.password && this.user.password.length > 7 ? true : false;
    };
    AckFireLoginForm.prototype.login = function () {
        var _this = this;
        ++this.submitCount;
        this.reval();
        if (!this.vals.email || !this.vals.password) {
            return;
        }
        ++this.loadCount;
        this.loginUser(this.email, this.user.password)
            .then(function (res) {
            --_this.loadCount;
            _this.rejectCount = 0;
            _this.success.emit();
        })
            .catch(function (e) {
            --_this.loadCount;
            ++_this.rejectCount;
        });
    };
    AckFireLoginForm.prototype.googleSignIn = function () {
        var Auth = this.AngularFireAuth;
        Auth.signInWithPopup(new app_1.auth.GoogleAuthProvider());
    };
    AckFireLoginForm.prototype.loginUser = function (email, password) {
        return this.AngularFireAuth.signInWithEmailAndPassword(this.email, password);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AckFireLoginForm.prototype, "email", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], AckFireLoginForm.prototype, "emailChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], AckFireLoginForm.prototype, "success", void 0);
    AckFireLoginForm = __decorate([
        core_1.Component({
            selector: 'ack-fire-login-form',
            template: ack_fire_login_form_template_1.string,
            animations: ack_angular_fx_1.animations
        }),
        __metadata("design:paramtypes", [auth_1.AngularFireAuth])
    ], AckFireLoginForm);
    return AckFireLoginForm;
}());
exports.AckFireLoginForm = AckFireLoginForm;
//# sourceMappingURL=AckFireLoginForm.component.js.map