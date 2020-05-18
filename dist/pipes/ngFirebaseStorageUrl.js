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
var core_1 = require("@angular/core");
var storage_1 = require("@angular/fire/storage");
/* to be used with in combination with | async */
var AngularFirestoreStorageUrl = /** @class */ (function () {
    function AngularFirestoreStorageUrl(storage) {
        this.storage = storage;
    }
    AngularFirestoreStorageUrl.prototype.transform = function (path) {
        return this.storage.ref(path).getDownloadURL()
            .toPromise()
            .catch(function (e) { return path; });
    };
    AngularFirestoreStorageUrl = __decorate([
        core_1.Pipe({
            name: 'ngFirebaseStorageUrl'
        }),
        __metadata("design:paramtypes", [storage_1.AngularFireStorage])
    ], AngularFirestoreStorageUrl);
    return AngularFirestoreStorageUrl;
}());
exports.AngularFirestoreStorageUrl = AngularFirestoreStorageUrl;
//# sourceMappingURL=ngFirebaseStorageUrl.js.map