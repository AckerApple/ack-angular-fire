"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.string = "<ack-fixed-element-stage></ack-fixed-element-stage><route-reporter #router=\"RouteReporter\" (onChange)=\"onRouteChange($event)\"></route-reporter><table class=\"height-full width-full bg-fade\" cellPadding=\"0\" cellSpacing=\"0\" border=\"0\"><tbody><tr><td><div class=\"invisible\"><ng-container *ngTemplateOutlet=\"headerPrepend\"></ng-container></div><ng-container #routeData=\"var\" [var]=\"ActivatedRoute.firstChild?.routeConfig?.data\"></ng-container><div class=\"top-0 pos-fixed bg-positive text-white width-full border-bottom border-grey-2x\" *ngIf=\"routeData.var?.titleBar==null || routeData.var?.titleBar\" [@slideInDown]=\"1\" [@slideOutUp]=\"1\" style=\"z-index:2\" [ngClass]=\"routeData.var?.titleClass || 'bg-positive'\"><ng-container *ngTemplateOutlet=\"headerPrepend\"></ng-container><div class=\"flex-valign-center pad-right pad-left height-50\"><a class=\"pos-abs\" *ngIf=\"showBack\" [routerLink]=\"RouteHistory.back || '../'\"><i class=\"fas fa-chevron-left fa-lg text-white\"></i></a><div class=\"flex-1 text-center pad-h-3x text-3x text-overflow\"><i [ngClass]=\"router.activated?.routeConfig?.data?.icon\"></i>&nbsp;{{ router.activated?.routeConfig?.data?.title }}</div><ng-container *ngTemplateOutlet=\"headerAppend\"></ng-container></div></div><div class=\"height-50\"></div></td></tr><fx-tracker #fx=\"FxTracker\" [activatedRoute]=\"fx.loaded &amp;&amp; outlet.activated ? outlet.activatedRoute : null\"></fx-tracker><tr><td class=\"height-full pos-rel height-full-router-wrap\" id=\"ack-app-stage-router-wrap\" valign=\"top\" [ngClass]=\"{'overflow-hidden pos-abs-kids':fx.inFx}\" [@slideInOutLeftKids]=\"{value:fx.id,params:{time:'250ms'}}\" (@slideInOutLeftKids.start)=\"fx.inFx=true\" (@slideInOutLeftKids.done)=\"fx.delayOutFx()\"><router-outlet #outlet=\"outlet\"></router-outlet></td></tr><tr><td *ngIf=\"debug\"><debug-area><ng-container *ngIf=\"debugs\"><debug-item *ngFor=\"let item of debugs | keyvalue\" name=\"item.key\" [value]=\"item.value\"></debug-item></ng-container><debug-item name=\"routeHistory\" [value]=\"RouteHistory.routeHistory\"></debug-item></debug-area></td></tr></tbody></table>";
//# sourceMappingURL=ack-app-stage.template.js.map