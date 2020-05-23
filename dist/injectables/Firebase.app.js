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
var FireUser_1 = require("../FireUser");
var core_1 = require("@angular/core");
var auth_1 = require("@angular/fire/auth");
var Subscription_1 = require("rxjs/internal/Subscription");
var storage_1 = require("@angular/fire/storage");
var firestore_1 = require("@angular/fire/firestore");
var FirebaseApp = /** @class */ (function () {
    function FirebaseApp(fireUser, storage, AngularFireAuth, db) {
        this.fireUser = fireUser;
        this.storage = storage;
        this.AngularFireAuth = AngularFireAuth;
        this.db = db;
        this.userCollection = "users";
        this.subs = new Subscription_1.Subscription();
        this.monitorFirebase();
    }
    FirebaseApp.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    FirebaseApp.prototype.monitorFirebase = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.subs.add(_this.fireUser.login.subscribe(function (user) {
                _this.setAuthUser(user).subscribe(function () { return res(); });
            })).add(_this.fireUser.logout.subscribe(function (user) {
                _this.clearLocalUser();
                res();
            }));
        });
    };
    FirebaseApp.prototype.setAuthUser = function (user) {
        var _this = this;
        this.user = {
            name: user.displayName,
            email: user.email,
            uid: user.uid,
            photoUrl: getUserPhotoUrl(user)
        };
        var loadUser = this.loadUser(user.uid);
        loadUser.subscribe(function (user) {
            if (!user) {
                _this.createUserBy(_this.user);
            }
            _this.user.photoUrl = _this.user.photoUrl || user.photoUrl;
            Object.assign(_this.user, user);
        });
        return loadUser;
    };
    FirebaseApp.prototype.getUserCollection = function () {
        return this.db.collection(this.userCollection);
    };
    FirebaseApp.prototype.createUserBy = function (user) {
        var sendUser = {
            name: user.displayName || user.name || user.email,
            email: user.email,
            uid: user.uid,
            added: Date.now(),
            photoUrl: getUserPhotoUrl(user)
        };
        return this.getUserCollection().doc(user.uid).set(sendUser);
    };
    FirebaseApp.prototype.loadUser = function (uid) {
        return this.getUserCollection().doc(uid).valueChanges();
    };
    FirebaseApp.prototype.clearLocalUser = function () {
        delete this.user;
    };
    FirebaseApp.prototype.logout = function () {
        this.fireUser.logoutNow();
        this.clearLocalUser();
    };
    FirebaseApp = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [FireUser_1.FireUser,
            storage_1.AngularFireStorage,
            auth_1.AngularFireAuth,
            firestore_1.AngularFirestore])
    ], FirebaseApp);
    return FirebaseApp;
}());
exports.FirebaseApp = FirebaseApp;
function getUserPhotoUrl(user) {
    var data0 = user.providerData && user.providerData.length && user.providerData[0];
    if (data0 && data0.photoURL) {
        return data0.photoURL;
    }
    return user.photoUrl;
}
exports.getUserPhotoUrl = getUserPhotoUrl;
//# sourceMappingURL=Firebase.app.js.map