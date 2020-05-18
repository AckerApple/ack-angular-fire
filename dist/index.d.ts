export * from "./types";
export { FireUser } from "./FireUser";
export { FirebaseApp } from "./injectables/Firebase.app";
import { ModuleWithProviders } from "@angular/core";
export declare class Module {
    static forRoot(): ModuleWithProviders;
}
