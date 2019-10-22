import { Subscription } from "rxjs/internal/Subscription"
import { Input, Component, ContentChild, ElementRef, TemplateRef } from '@angular/core'
import {
  Router, ActivatedRoute, NavigationEnd
} from '@angular/router'
import { RouteHistory } from 'ack-angular/modules/router/RouteHistory.provider';

import { string } from "./ack-app-stage.template"
import { animations } from "ack-angular-fx"

@Component({
  selector: 'ack-app-stage',
  template: string,
  animations: animations
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
  ) {
    this.subs.add(
      this.Router.events.subscribe(event=>{
        if(event.constructor==NavigationEnd){
          const active = this.ActivatedRoute;
          this.showBack = active && active.routeConfig && (!active.routeConfig.data || active.routeConfig.data.back==null ||  active.routeConfig.data.back)
        }
      })
    )
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }
}