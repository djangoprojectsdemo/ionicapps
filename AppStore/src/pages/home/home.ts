import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import * as WC from 'woocommerce-api';
import { ProductDetailsPage } from '../product-details/product-details';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  WooCommerce:any;
  products:any[];
  moreProducts:any[];
  page:number;
  searchQuery:string="";
  
 

  constructor(public navCtrl: NavController, public toastCtrl:ToastController) {

    this.page = 2;
this.WooCommerce= WC({

  url:"http://localhost:8080/wordpress",
  consumerKey:"ck_371cc05dc2eee27c7eb034f3a0837ba0f934e0cf",
  consumerSecret:"cs_4448b6284f264fa9d515b80e7c26662ad7348b2b" 
});

this.loadMoreProducts(null);

this.WooCommerce.getAsync("products").then((data)=>{
  console.log(JSON.parse(data.body));
  this.products=JSON.parse(data.body).products;
},(err)=>{
  console.log(err)
 
})

  }
  
loadMoreProducts(event){

  if(event == null)
  {
  this.page = 2;
  this.moreProducts =[];
  }
  else
  this.page ++;


  this.WooCommerce.getAsync("products?page=" +this.page).then((data)=>{
    console.log(JSON.parse(data.body));
    this.moreProducts=this.moreProducts.concat(JSON.parse(data.body).products);

    if(event != null)
    {
      event.complete();
    }
    if(JSON.parse(data.body).products.length < 10){
      event.enable(false);

      this.toastCtrl.create({
        message:"No more products!",
        duration:5000
      }).present();
       
    }
  },(err)=>{
    console.log(err)
   
  })
}
openProductPage(product) {
  this.navCtrl.push(ProductDetailsPage, {"product": product})
}
onSearch(event){
  if(this.searchQuery.length>0){
    this.navCtrl.push(SearchPage,{"searchQuery":this.searchQuery});
  }
}

}
