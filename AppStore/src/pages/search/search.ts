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
      url:"http://localhost:8080/wordpress",
      consumerKey:"ck_371cc05dc2eee27c7eb034f3a0837ba0f934e0cf",
      consumerSecret:"cs_4448b6284f264fa9d515b80e7c26662ad7348b2b",
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
