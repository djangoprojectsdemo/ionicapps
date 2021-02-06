import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  topic:String;
  stories:Array<any>;
  story:any;
  constructor(public navCtrl: NavController,public apiprovider:ApiProvider,public navParams: NavParams) {
    console.log('class: HomePage fun:constructor');
   
  }
  ionViewDidLoad() {
    console.log('class: HomePage  fun:ionViewDidLoad');
    this.getStories();
    // this.story ={
    //   title:this.navParams.get('title'),
    //   content:this.navParams.get('content'),
    //   pubDate:this.navParams.get('pubDate'),
    //   image:this.navParams.get('enclosure'),
    //   link:this.navParams.get('link'),
    //   author:this.navParams.get('author')
    // }
  }
  getStories(){
    console.log('class: HomePage  fun:getStories');
    this.apiprovider.getStories().subscribe(res =>{
      console.log(res.items);
    this.stories=res.items;
    //this.navCtrl.push(HomePage);

    });
  }
}