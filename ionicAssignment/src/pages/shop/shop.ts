import { Component } from '@angular/core';

import { BuyoutPage } from '../buyout/buyout';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {
constructor(private navCtrl:NavController){}
onBuy(productData:{name:string,quantity:number}){
  this.navCtrl.push(BuyoutPage,productData);
  }
}
