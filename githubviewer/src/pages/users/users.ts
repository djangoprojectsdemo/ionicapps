import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubProvider } from '../../providers/github/github';
import { User } from '../../models/User';
import { UserDetailsPage } from '../user-details/user-details';
 
@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
users:User[];
searchText:string;
  constructor(public github:GithubProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('class: UsersPage  Fun:ionViewDidLoad');
    this.github.getUsers().subscribe(users =>{
      this.users = users;
    });

  }
  searchUsers(){
    console.log('class: UsersPage  Fun:searchUsers');
    this.github.searchUsers(this.searchText).subscribe(res =>{
      this.users = res.items;
    });
  }
  userDetailsClick(username){
this.navCtrl.push(UserDetailsPage,{username:username})
  }
  }
