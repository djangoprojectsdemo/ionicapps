import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { User } from '../../models/User';
import { Repo } from '../../models/Repo';
 import 'rxjs/add/operator/map';
@Injectable()
export class GithubProvider {
client_id:string;
client_secret:string;

  constructor(public http: Http) {
    console.log('Hello GithubProvider Provider');
   this.client_id='35ef07ce8450bf715b1d';
   this.client_secret='09c096c440dd8b616103842cf3b9a12c697303e7';
  }
getUsers():Observable<User[]>{
 return this.http.get
 ('https://api.github.com/users?client_id='+this.client_id +'&client_secret='+this.client_secret)
 .map(res =>res.json());
}
searchUsers(searchText){
  return this.http.get
  ('https://api.github.com/search/users?q='+searchText+'&client_id='+this.client_id +'&client_secret='+this.client_secret)
  .map(res =>res.json());
 }
 getUser(username):Observable<User>{
  return this.http.get
  ('https://api.github.com/users/'+username+'?client_id='+this.client_id +'&client_secret='+this.client_secret)
  .map(res =>res.json());
 }
 getRepos(username):Observable<Repo[]>{
  return this.http.get
  ('https://api.github.com/users/'+username+'/repos?client_id='+this.client_id +'&client_secret='+this.client_secret)
  .map(res =>res.json());
 }
}
