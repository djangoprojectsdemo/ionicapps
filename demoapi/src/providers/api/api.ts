//import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
@Injectable()
export class ApiProvider {
apiUrl:string;
feedUrl:string;
  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
this.apiUrl='https://api.rss2json.com/v1/api.json';
this.feedUrl='http://feeds.reuters.com/Reuters/worldNews';
  }
  getStories(){
    // let topic = 'cnn_topstories';
     console.log('class: FeedProvider  fun:getStories');
      return this.http.get(this.apiUrl+ '?rss_url='+this.feedUrl).map(res =>res.json());
}
}