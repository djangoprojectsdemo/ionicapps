import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { GithubProvider } from '../../providers/github/github';
import { User } from '../../models/User';
import { Repo } from '../../models/Repo';

@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
})
export class  UserDetailsPage{
username:string;
user:User;
repos:Repo[];
  constructor(public github:GithubProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('class: UserDetailsPage  Fun:ionViewDidLoad');
    this.username=this.navParams.get('username');
    this.github.getUser(this.username).subscribe(user =>{
      console.log(user);
    this.user=user;
    });
    this.github.getRepos(this.username).subscribe(repos =>{
      console.log(repos);
    this.repos= repos;
    });
  }
  userRepoclick(url){
    window.open(url,'_system','location=yes');
    return false;
  }
}
