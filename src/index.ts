export * from "./types"
export { FireUser } from "./FireUser"
export { FirebaseApp } from "./injectables/Firebase.app";

// import { BrowserModule } from "@angular/platform-browser";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { AckFxModule } from 'ack-angular-fx';
import { AckModule } from 'ack-angular/AckModule';
import { AckRouterModule } from "ack-angular/AckRouterModule"
import { AckFireLoginForm } from "./components/ack-fire-login-form/AckFireLoginForm.component"

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";

import { FireUser } from "./FireUser";
import { FirebaseApp } from "./injectables/Firebase.app";
import { AckAppStage } from "./components/ack-app-stage/AckAppStage.component"

const declarations = [
  AckFireLoginForm,
  AckAppStage
]

const providers = [FireUser, FirebaseApp];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    // BrowserModule,
    // BrowserAnimationsModule,

    AckFxModule,
    AckModule,
    AckRouterModule,

    AngularFireAuthModule,
    AngularFireModule
  ],
  declarations: declarations,
  providers: providers,
  exports: [...declarations]
}) export class Module {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Module,
      providers: providers
    }
  }
}

