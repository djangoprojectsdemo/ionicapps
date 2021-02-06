import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddworkoutPage } from '../addworkout/addworkout';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
woi:any;
tname:String;
len:Number;
  constructor(public navCtrl: NavController,public navParams:NavParams) {
    this.tname = this.navParams.get("titlename");
    this.len = this.navParams.get("length");
    console.log("titlename "+this.tname);
    console.log("length "+this.len);
  
  }
  onAddWorkout(){
    this.navCtrl.push(AddworkoutPage);
  }
}
