/* DEPRECATED: use firebase-ui */
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { string } from "./ack-fire-login-form.template"
import { animations } from "ack-angular-fx"

import { user } from '../../types'
import { auth } from 'firebase/app';

import { AngularFireAuth } from '@angular/fire/auth';

interface localUser extends user{
  password:string
}

@Component({
  selector:'ack-fire-login-form',
  template: string,
  animations: animations
}) export class AckFireLoginForm {
  submitCount:number = 0
  loadCount:number = 0
  user:localUser = <localUser>{}
  vals:{[index:string]:boolean} = {}
  rejectCount:number = 0

  @Input() email!: string;
  @Output() emailChange: EventEmitter<string> = new EventEmitter();
  @Output() success:EventEmitter<void> = new EventEmitter();

  constructor(
    public AngularFireAuth: AngularFireAuth
  ){}

  reval(){
    const email = this.email
    this.vals.email = email && email.indexOf('@')>=0 ? true : false
    this.vals.password = this.user.password && this.user.password.length>7 ? true : false
  }

  login(){
    ++this.submitCount

    this.reval()
    if( !this.vals.email || !this.vals.password ){
      return
    }

    ++this.loadCount

    this.loginUser(
      this.email,
      this.user.password
    )
    .then(res=>{      
      --this.loadCount
      this.rejectCount = 0
      this.success.emit()
    })
    .catch(e=>{
      --this.loadCount
      ++this.rejectCount
    })
  }

  googleSignIn(){
    const Auth = this.AngularFireAuth.auth;
    Auth.signInWithPopup(
      new auth.GoogleAuthProvider()
    )
  }

  loginUser(email:string, password:string):Promise<any>{
    return this.AngularFireAuth.auth.signInWithEmailAndPassword(this.email, password)
  }
}