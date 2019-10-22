import { Input, Component, ContentChild, ElementRef, TemplateRef } from '@angular/core'
import {
  Router, ActivatedRoute
} from '@angular/router'
import { RouteHistory } from 'ack-angular/modules/router/RouteHistory.provider';

import { string } from "./ack-app-stage.template"
import { animations } from "ack-angular-fx"

@Component({
  selector: 'ack-app-stage',
  template: string,
  animations:animations
})
export class AckAppStage {
  @Input() debug:boolean
  @Input() debugs:{[index:string]: any}
  @ContentChild("headerPrepend", { static: false }) headerPrepend:TemplateRef<ElementRef>
  @ContentChild("headerAppend", { static: false }) headerAppend:TemplateRef<ElementRef>
  
  screenScrollModelY: number;
  
  constructor(
    public Router: Router,
    public RouteHistory: RouteHistory,
    public ActivatedRoute: ActivatedRoute
  ) {}
}