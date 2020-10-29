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
      // if already logged in, does not wait for internet
      this.angularFireAuth.user.subscribe((user: User | null) => {
        if (user) {
          this.user = this.angularFireAuth.auth.currentUser;
        }
      })
    ).add(
      // waits for internet
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

    // support old and new versions
    const auth = (this.angularFireAuth as any).auth || this.angularFireAuth;

    auth.signOut();
  }
}