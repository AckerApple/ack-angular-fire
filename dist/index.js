"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var FireUser_1 = require("./FireUser");
exports.FireUser = FireUser_1.FireUser;
var Firebase_app_1 = require("./injectables/Firebase.app");
exports.FirebaseApp = Firebase_app_1.FirebaseApp;
// import { BrowserModule } from "@angular/platform-browser";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var ack_angular_fx_1 = require("ack-angular-fx");
var AckModule_1 = require("ack-angular/AckModule");
var AckRouterModule_1 = require("ack-angular/AckRouterModule");
var AckFireLoginForm_component_1 = require("./components/ack-fire-login-form/AckFireLoginForm.component");
var fire_1 = require("@angular/fire");
var auth_1 = require("@angular/fire/auth");
var FireUser_2 = require("./FireUser");
var Firebase_app_2 = require("./injectables/Firebase.app");
var ngFirebaseStorageUrl_1 = require("./pipes/ngFirebaseStorageUrl");
var AckAppStage_component_1 = require("./components/ack-app-stage/AckAppStage.component");
var declarations = [
    ngFirebaseStorageUrl_1.AngularFirestoreStorageUrl,
    AckFireLoginForm_component_1.AckFireLoginForm,
    AckAppStage_component_1.AckAppStage
];
var providers = [FireUser_2.FireUser, Firebase_app_2.FirebaseApp];
var Module = /** @class */ (function () {
    function Module() {
    }
    Module_1 = Module;
    Module.forRoot = function () {
        return {
            ngModule: Module_1,
            providers: providers
        };
    };
    var Module_1;
    Module = Module_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                // BrowserModule,
                // BrowserAnimationsModule,
                ack_angular_fx_1.AckFxModule,
                AckModule_1.AckModule,
                AckRouterModule_1.AckRouterModule,
                auth_1.AngularFireAuthModule,
                fire_1.AngularFireModule
            ],
            declarations: declarations,
            providers: providers,
            exports: declarations.slice()
        })
    ], Module);
    return Module;
}());
exports.Module = Module;
//# sourceMappingURL=index.js.map