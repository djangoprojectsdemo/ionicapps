import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController,ViewController} from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { AddItemPage } from '../add-item/add-item';



@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {
  title;
  description;
  public items =[];
  constructor(public navCtrl: NavController ,public ModalCtrl:ModalController,public ViewCtrl:ViewController,public navParams: NavParams,public dataService: DataProvider) {
  }

  ionViewDidLoad() {
    console.log('F:ionViewDidLoad C:ItemDetailPage');
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
  }

  // ionViewDidEnter(){
  //   console.log('F:ionViewDidEnter C:ItemDetailPage');
  //   this.title = this.navParams.get('item').title;
  //   this.description = this.navParams.get('item').description;
  // }
  

  saveItem(){
 
    let newItem = {
      title: this.title,
      description: this.description
    };
 
    this.ViewCtrl.dismiss(newItem);
 
  }
  
 
  close(){
    
    this.ViewCtrl.dismiss();
  }
 
 
  
 
}
