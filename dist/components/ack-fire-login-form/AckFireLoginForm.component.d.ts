import { EventEmitter } from '@angular/core';
import { user } from '../../types';
import { AngularFireAuth } from '@angular/fire/auth';
interface localUser extends user {
    password: string;
}
export declare class AckFireLoginForm {
    AngularFireAuth: AngularFireAuth;
    submitCount: number;
    loadCount: number;
    user: localUser;
    vals: {
        [index: string]: boolean;
    };
    rejectCount: number;
    email: string;
    emailChange: EventEmitter<string>;
    success: EventEmitter<void>;
    constructor(AngularFireAuth: AngularFireAuth);
    reval(): void;
    login(): void;
    googleSignIn(): void;
    loginUser(email: string, password: string): Promise<any>;
}
export {};
