import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ServicePage } from '../service/service';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  homepage:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.homepage= HomePage;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  onhome(){
    this.navCtrl.push(HomePage);
  }
  onabout(){
this.navCtrl.push(AboutPage);
  }
  onservice(){
this.navCtrl.push(ServicePage);
  }
  oncontact(){
this.navCtrl.push(ContactPage);
  }
}
