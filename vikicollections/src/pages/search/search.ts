import { Component } from '@angular/core';
import {  NavController, NavParams,ToastController } from 'ionic-angular';
import * as WC from 'woocommerce-api';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  searchQuery:string = "";
  WooCommerce:any;
  products:any[]=[];
  page:number =2;

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl:ToastController) {
  
    console.log(this.navParams.get("searchQuery"));
    this.searchQuery =this.navParams.get("searchQuery");

    this.WooCommerce = WC({
      url:"https://www.vikicollections.com",
          consumerKey:"ck_01df55d1362f56b97a3ae3b9b3b3fc833dac0006",
          consumerSecret:"cs_b38c404e81a9c34b4c50a7877893983ebd8d4f05" ,
      version: 'v2'
    });
    this.WooCommerce.getAsync("products?filter[q]="+this.searchQuery).then((searchData)=>{
      this.products =JSON.parse(searchData.body).products;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  loadMoreProducts(event){
    this.WooCommerce.getAsync("products?filter[q]="+this.searchQuery + "&page=" +this.page).then((searchData)=>{
      this.products =this.products.concat(JSON.parse(searchData.body).products);
      if(JSON.parse(searchData.body).products.length<10){
        event.enable(false);

        this.toastCtrl.create({
          message:"No more products!",
          duration:3000
        }).present();
      }
      event.complete();
      this.page ++;
    });
  }

}
