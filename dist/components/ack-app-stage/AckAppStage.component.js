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
var router_1 = require("@angular/router");
var RouteHistory_provider_1 = require("ack-angular/modules/router/RouteHistory.provider");
var ack_app_stage_template_1 = require("./ack-app-stage.template");
var ack_angular_fx_1 = require("ack-angular-fx");
var AckAppStage = /** @class */ (function () {
    function AckAppStage(Router, RouteHistory, ActivatedRoute) {
        this.Router = Router;
        this.RouteHistory = RouteHistory;
        this.ActivatedRoute = ActivatedRoute;
        this.subs = new Subscription_1.Subscription();
    }
    AckAppStage.prototype.onRouteChange = function (RouteWatchReporter) {
        var active = RouteWatchReporter.getCurrent();
        var config = active.config;
        this.showBack = config == null || (!config.data || config.data.back == null || config.data.back);
    };
    AckAppStage.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], AckAppStage.prototype, "debug", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AckAppStage.prototype, "debugs", void 0);
    __decorate([
        core_1.ContentChild("header", { static: false }),
        __metadata("design:type", core_1.TemplateRef)
    ], AckAppStage.prototype, "header", void 0);
    __decorate([
        core_1.ContentChild("headerPrepend", { static: false }),
        __metadata("design:type", core_1.TemplateRef)
    ], AckAppStage.prototype, "headerPrepend", void 0);
    __decorate([
        core_1.ContentChild("headerAppend", { static: false }),
        __metadata("design:type", core_1.TemplateRef)
    ], AckAppStage.prototype, "headerAppend", void 0);
    AckAppStage = __decorate([
        core_1.Component({
            selector: 'ack-app-stage',
            template: ack_app_stage_template_1.string,
            animations: ack_angular_fx_1.animations
        }),
        __metadata("design:paramtypes", [router_1.Router,
            RouteHistory_provider_1.RouteHistory,
            router_1.ActivatedRoute])
    ], AckAppStage);
    return AckAppStage;
}());
exports.AckAppStage = AckAppStage;
//# sourceMappingURL=AckAppStage.component.js.map