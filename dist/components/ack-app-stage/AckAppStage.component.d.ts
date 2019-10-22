import { RouteWatchReporter } from "ack-angular/RouteWatchReporter";
import { Subscription } from "rxjs/internal/Subscription";
import { ElementRef, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteHistory } from 'ack-angular/modules/router/RouteHistory.provider';
export declare class AckAppStage {
    Router: Router;
    RouteHistory: RouteHistory;
    ActivatedRoute: ActivatedRoute;
    debug: boolean;
    debugs: {
        [index: string]: any;
    };
    headerPrepend: TemplateRef<ElementRef>;
    headerAppend: TemplateRef<ElementRef>;
    screenScrollModelY: number;
    subs: Subscription;
    showBack: boolean;
    constructor(Router: Router, RouteHistory: RouteHistory, ActivatedRoute: ActivatedRoute);
    onRouteChange(RouteWatchReporter: RouteWatchReporter): void;
    ngOnDestroy(): void;
}
