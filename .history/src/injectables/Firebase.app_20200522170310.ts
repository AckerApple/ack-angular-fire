import { user } from "../types";
import { User } from 'firebase';
import { FireUser } from "../FireUser";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs/internal/Subscription';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable() export class FirebaseApp {
  user!: user;
  userCollection = "users";

  subs: Subscription = new Subscription()

  constructor(
    public fireUser: FireUser,
    public storage:AngularFireStorage,
    public AngularFireAuth:AngularFireAuth,
    public db: AngularFirestore
  ){
    console.log("22");
    this.monitorFirebase()
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

  monitorFirebase(): Promise<void>{
    return new Promise((res,rej)=>{
      this.subs.add(
        this.fireUser.login.subscribe((user: any)=>{
          this.setAuthUser(user).subscribe(()=>res())
        })
      ).add(
        this.fireUser.logout.subscribe((user: any)=>{
          this.clearLocalUser()
          res()
        })
      )
    })
  }

  setAuthUser( user:User ):Observable<any>{
    this.user = {
      name: user.displayName,// || user.name,
      email: user.email,
      uid:user.uid,
      photoUrl: getUserPhotoUrl( user )
    } as user;

    const loadUser = this.loadUser( user.uid )

    loadUser.subscribe((user:user)=>{
      if( !user ){
        this.createUserBy( this.user )
      }

      this.user.photoUrl = this.user.photoUrl || user.photoUrl
      Object.assign(this.user, user)
    })

    return loadUser
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
    // support old and new formats
    const auth = (this.AngularFireAuth as any).auth || this.AngularFireAuth;
    auth.signOut();
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
