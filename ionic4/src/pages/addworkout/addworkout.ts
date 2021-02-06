import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
//import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-addworkout',
  templateUrl: 'addworkout.html',
})

export class AddworkoutPage {
  titlename:String;
  dow:Date;
  length:Number;
  choice:any;
  titlenameslist:any;
  
 //workout:any={};
  //selectOptions =['a','b','c'];
 // workout.titlename;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
this.titlename="";
this.length=0;
this.choice="";
//this.workoutInfo = {};
this.titlenameslist=[];
  // this.workout.titlename={};
   //this.workout.length={};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddworkoutPage');
  }
onAddItem(){
//  this.titlename2=this.titlename;
//  this.workoutInfo.titlename = this.titlename;
//  this.workoutInfo.length = this.length;
this.titlenameslist.push(this.titlename);

// console.log(this.titlename +" " +this.dow +" " + this.choice +" " +this.length);
// //this.titlename=this.titlename+" kumar";
// this.navCtrl.push(HomePage,this.workoutInfo);
// console.log();
this.navCtrl.pop();
}
}
