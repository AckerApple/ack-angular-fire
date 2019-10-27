import { RouteWatchReporter } from "ack-angular/RouteWatchReporter"
import { Subscription } from "rxjs/internal/Subscription"
import { Input, Component, ContentChild, ElementRef, TemplateRef } from '@angular/core'
import {
  Router, ActivatedRoute
  //, NavigationEnd
} from '@angular/router'
import { RouteHistory } from 'ack-angular/modules/router/RouteHistory.provider';

import { string } from "./ack-app-stage.template"
import { animations } from "ack-angular-fx"

@Component({
  selector: 'ack-app-stage',
  template: string,
  animations: animations,
  styles:[
    "#ack-app-stage-router-wrap ng-component {height:100%;display:block;width:100%}"
  ]
})
export class AckAppStage {
  @Input() debug!:boolean
  @Input() debugs!:{[index:string]: any}
  @ContentChild("headerPrepend", { static: false }) headerPrepend!:TemplateRef<ElementRef>
  @ContentChild("headerAppend", { static: false }) headerAppend!:TemplateRef<ElementRef>
  
  screenScrollModelY!: number;
  subs: Subscription = new Subscription();
  showBack!: boolean
  
  constructor(
    public Router: Router,
    public RouteHistory: RouteHistory,
    public ActivatedRoute: ActivatedRoute
  ) {}

  onRouteChange(RouteWatchReporter: RouteWatchReporter) {
    const active = RouteWatchReporter.getCurrent();
    const config = active.config;
    this.showBack = config==null || (!config.data || config.data.back == null || config.data.back)
  }


  ngOnDestroy(){
    this.subs.unsubscribe();
  }
}