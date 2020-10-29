import { Subscription } from 'rxjs/internal/Subscription'
import { EventEmitter, Injectable } from '@angular/core';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable() export class FireUser {
  user!: User;
  logout: EventEmitter<void> = new EventEmitter()
  login: EventEmitter<User> = new EventEmitter()

  private subs: Subscription = new Subscription()

  constructor(
    public angularFireAuth: AngularFireAuth
  ){
    this.monitorFirebase()
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

  private monitorFirebase(): void{
    this.subs.add(
      this.angularFireAuth.authState.subscribe((user: User | null)=>{
        if( !user ){
          delete this.user;
          this.logout.emit();
          return;
        }

        this.user = user;
        this.login.emit(user as User)
      })
    )
  }

  logoutNow(){
    delete this.user;

    const oldAuth = (this.angularFireAuth as any).auth

    // support old and new versions
    const auth = oldAuth && oldAuth.signOut ? oldAuth : this.angularFireAuth;

    auth.signOut();
  }
}