"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var ack_angular_fx_1 = require("ack-angular-fx");
var AckModule_1 = require("ack-angular/AckModule");
var AckFireLoginForm_component_1 = require("./components/ack-fire-login-form/AckFireLoginForm.component");
var fire_1 = require("@angular/fire");
var declarations = [
    AckFireLoginForm_component_1.AckFireLoginForm
];
var Module = /** @class */ (function () {
    function Module() {
    }
    Module_1 = Module;
    Module.forRoot = function () {
        return {
            ngModule: Module_1
            // providers: [],
        };
    };
    var Module_1;
    Module = Module_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                ack_angular_fx_1.AckFxModule,
                AckModule_1.AckModule,
                fire_1.AngularFireModule
            ],
            declarations: declarations,
            exports: declarations.slice()
        })
    ], Module);
    return Module;
}());
exports.Module = Module;
//# sourceMappingURL=index.js.map