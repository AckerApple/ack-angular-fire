export * from "./types"
export {FireUser} from "./FireUser"

import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { AckFxModule } from 'ack-angular-fx';
import { AckModule } from 'ack-angular/AckModule';
import { AckFireLoginForm } from "./components/ack-fire-login-form/AckFireLoginForm.component"

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";

import { FireUser } from "./FireUser";

const declarations = [
  AckFireLoginForm
]

const providers = [FireUser];

@NgModule({
  imports:[
    CommonModule,
    FormsModule,

    AckFxModule,
    AckModule,

    AngularFireAuthModule,
    AngularFireModule
  ],
  declarations: declarations,
  exports:[ ...declarations ]
}) export class Module {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Module,
      providers: providers
    }
  }
}

