import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loginEmail:string ='';
  loginPassword:string ='';
  signupEmail:string ='';
  signupPassword:string ='';
  constructor(public navCtrl: NavController,public navParams:NavParams,public afAuth:AngularFireAuth) {
    this.afAuth.authState.subscribe(userData =>{
      console.log(userData);
    })

  }
login(form){
  this.afAuth.auth.signInWithEmailAndPassword(form.value.loginEmail,form.value.loginPassword).then
  (user =>{
    console.log(user);
  }).catch(err =>{
    alert(err.message);
  })
}
googleLogin(){
  this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then
  (user =>{
    console.log(user);
  }).catch(err =>{
    alert(err.message);
  })
}
signup(form){
  this.afAuth.auth.createUserWithEmailAndPassword(form.value.signupEmail,form.value.signupPassword).then
  (user =>{
    console.log(user);
  }).catch(err =>{
    alert(err.message);
  })
}
logout(){
this.afAuth.auth.signout().then(data=>{
  console.log(data);
}).catch(err =>{
  alert(err.message);
})
}
}
