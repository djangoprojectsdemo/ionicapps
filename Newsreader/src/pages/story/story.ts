import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-story',
  templateUrl: 'story.html',
})
export class StoryPage {
story:Object;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('class: StoryPage  fun:constructor');
  }

  ionViewDidLoad() {
    console.log('class: StoryPage  fun:ionViewDidLoad');
    this.story ={
      title:this.navParams.get('title'),
      content:this.navParams.get('content'),
      pubDate:this.navParams.get('pubDate'),
      image:this.navParams.get('enclosure').link,
      link:this.navParams.get('link'),
      author:this.navParams.get('author')
    }
  }

}
