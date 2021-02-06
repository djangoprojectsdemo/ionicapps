//import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';



@Injectable()
export class FeedProvider {
  apiUrl:string;
  feedUrl:string;

  constructor(public http: Http) {
    console.log('class: FeedProvider Fun: constructor');
    // this.apiUrl ='https://api.rss2json.com/v1/api.json';
    // this.feedUrl='http://rss.cnn.com/rss';

    this.apiUrl ='https://api.rss2json.com/v1/api.json';
    this.feedUrl='http://feeds.bbci.co.uk/news/';
  }
getStories(topic){
 // let topic = 'cnn_topstories';
  console.log('class: FeedProvider  fun:getStories');
  // return this.http.get(this.apiUrl+ '?rss_url='+this.feedUrl+'/'+topic+'.rss').map(res =>res.json());
  console.log('Topic selected : '+topic);
  if(topic=='topstories') {
    console.log(this.apiUrl+ '?rss_url='+this.feedUrl+'rss.xml');
    return this.http.get(this.apiUrl+ '?rss_url='+this.feedUrl+'rss.xml').map(res => res.json());
  } else {
    console.log(this.apiUrl+ '?rss_url='+this.feedUrl+ topic+'/rss.xml');
  return this.http.get(this.apiUrl+ '?rss_url='+this.feedUrl+ topic+'/rss.xml').map(res => res.json());
  }
}
}

