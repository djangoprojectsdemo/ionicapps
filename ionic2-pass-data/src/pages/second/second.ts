import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController, Events} from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,public events:Events) {
  }

  ionViewDidLoad() {
  
  }
  
  addRecipe(){

    let data ={
      title:'pancake',
      ingredients:'everything good'
       
    };
    this.events.publish('recipe:added',data);
  }
  closeModal(){
   
    this.viewCtrl.dismiss();
  }

}
