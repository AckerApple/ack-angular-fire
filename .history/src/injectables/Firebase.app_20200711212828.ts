import { user } from "../types";
import { User } from 'firebase';
import { FireUser } from "../FireUser";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs/internal/Subscription';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
// import { take } from "rxjs/operators";

@Injectable() export class FirebaseApp {
  user!: user;
  userCollection = "users";

  userSub!: Subscription;
  subs: Subscription = new Subscription();

  constructor(
    public fireUser: FireUser,
    public storage:AngularFireStorage,
    public AngularFireAuth:AngularFireAuth,
    public db: AngularFirestore
  ){
    this.monitorFirebase()
  }

  ngOnDestroy() {
    this.subs.unsubscribe();

    if (this.userSub) {
      this.userSub.unsubscribe();
    }
  }

  monitorFirebase(): void {
      this.subs.add(
        this.fireUser.login.subscribe((user: any)=>{
          this.setAuthUser(user);
        })
      ).add(
        this.fireUser.logout.subscribe((user: any)=>{
          this.clearLocalUser();
        })
      )
  }

  setAuthUser( user:User ): Observable<user> {
    this.user = {
      name: user.displayName,// || user.name,
      email: user.email,
      uid:user.uid,
      photoUrl: getUserPhotoUrl( user )
    } as user;

    if (this.userSub) {
      this.userSub.unsubscribe();
    }

    const userObservable = this.loadUser( user.uid );

    this.userSub = userObservable.subscribe((user: user) => {
      if( !user ){
        this.createUserBy( this.user )
      }

      this.user.photoUrl = this.user.photoUrl || user.photoUrl

      Object.assign(this.user, user);
    });

    return userObservable;
  }

  getUserCollection(): AngularFirestoreCollection{
    return this.db.collection(this.userCollection);
  }

  createUserBy(
    user: User | user
  ):Promise<any>{
    const sendUser = {
      name  : user.displayName || (user as user).name || user.email,
      email : user.email,
      uid   : user.uid,
      added : Date.now(),
      photoUrl : getUserPhotoUrl(user)
    }
    return this.getUserCollection().doc(user.uid).set( sendUser )
  }

  loadUser( uid:string ):Observable<any>{
    return this.getUserCollection().doc(uid).valueChanges();
  }

  clearLocalUser(){
    delete this.user;
  }

  logout(){
    this.fireUser.logoutNow();
    this.clearLocalUser();
  }
}

export function getUserPhotoUrl( user:any ):string{
  const data0 = user.providerData && user.providerData.length && user.providerData[0]

  if( data0 && data0.photoURL ){
    return data0.photoURL
  }

  return user.photoUrl
}
