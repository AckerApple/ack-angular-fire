import { user } from "../types";
import { User } from 'firebase';
import { FireUser } from "../FireUser";
import { EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs/internal/Subscription';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
export declare class FirebaseApp {
    fireUser: FireUser;
    storage: AngularFireStorage;
    AngularFireAuth: AngularFireAuth;
    db: AngularFirestore;
    user: user;
    userCollection: string;
    userSub: Subscription;
    subs: Subscription;
    $login: EventEmitter<user>;
    constructor(fireUser: FireUser, storage: AngularFireStorage, AngularFireAuth: AngularFireAuth, db: AngularFirestore);
    ngOnDestroy(): void;
    monitorFirebase(): void;
    setAuthUser(user: User): Promise<user | void>;
    getUserCollection(): AngularFirestoreCollection;
    createUserBy(user: User | user): Promise<any>;
    loadUser(uid: string): Observable<any>;
    clearLocalUser(): void;
    logout(): void;
}
export declare function getUserPhotoUrl(user: any): string;
