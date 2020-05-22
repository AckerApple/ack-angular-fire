import { EventEmitter } from '@angular/core';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
export declare class FireUser {
    angularFireAuth: AngularFireAuth;
    user: User;
    logout: EventEmitter<void>;
    login: EventEmitter<User>;
    private subs;
    constructor(angularFireAuth: AngularFireAuth);
    ngOnDestroy(): void;
    private monitorFirebase;
    logoutNow(): void;
}
