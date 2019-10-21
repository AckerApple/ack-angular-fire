import { EventEmitter } from '@angular/core';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
export declare class FireUser {
    AngularFireAuth: AngularFireAuth;
    logout: EventEmitter<void>;
    login: EventEmitter<User>;
    private subs;
    constructor(AngularFireAuth: AngularFireAuth);
    ngOnDestroy(): void;
    private monitorFirebase;
}
