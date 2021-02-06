import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { FeedProvider } from '../../providers/feed/feed';
import { StoryPage } from '../story/story';

@Component({
  selector: 'page-stories',
  templateUrl: 'stories.html',
})
export class StoriesPage {

  topic:String;
  stories:Array<any>;
  constructor(public feedprovider:FeedProvider,public navCtrl: NavController, public navParams: NavParams) {
    console.log('class: StoriesPage  fun:constructor');
  }

  ionViewDidLoad() {
    console.log('class: StoriesPage  fun:ionViewDidLoad');
    this.topic ='topstories';
    this.getStories();
  }
  getStories(){
    console.log('class: StoriesPage  fun:getStories');
    this.feedprovider.getStories(this.topic).subscribe(res =>{
      console.log(res.items);
    this.stories=res.items;
    });
  }
  changeTopic(){
    console.log('class: StoriesPage  fun:changeTopic');
    this.getStories();

  }
  storySelected(story){
    this.navCtrl.push(StoryPage,story);
  }
}
