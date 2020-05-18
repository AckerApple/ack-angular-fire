import { Subscription } from 'rxjs/internal/Subscription'
import { EventEmitter, Injectable } from '@angular/core';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable() export class FireUser {
  logout: EventEmitter<void> = new EventEmitter()
  login: EventEmitter<User> = new EventEmitter()

  private subs: Subscription = new Subscription()

  constructor(
    public AngularFireAuth:AngularFireAuth
  ){
    this.monitorFirebase()
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

  private monitorFirebase(): void{
    this.subs.add(
      this.AngularFireAuth.authState.subscribe((user: User | null)=>{
        if( !user ){
          this.logout.emit();
          return;
        }

        this.login.emit(user as User)
      })
    )
  }

  logoutNow(){
    this.AngularFireAuth.auth.signOut();
  }
}