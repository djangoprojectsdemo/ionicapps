import { Component ,ViewChild} from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';



@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
@ViewChild('username') user;
@ViewChild('password') password;

  constructor(private firebaseauth:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
userRegister(){
  this.firebaseauth.auth.createUserWithEmailAndPassword(this.user.value,this.password.value)
  .then(data =>{
console.log("User Registered suucessfully" ,data);
  })
  .catch(error =>{
    console.log("Error registring user",error);
  })
  console.log(this.user.value);
}
}
