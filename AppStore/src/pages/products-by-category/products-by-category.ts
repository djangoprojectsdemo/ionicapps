import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import * as WC from 'woocommerce-api';
import { ProductDetailsPage } from '../product-details/product-details';

@Component({
  selector: 'page-products-by-category',
  templateUrl: 'products-by-category.html',
})
export class ProductsByCategoryPage {

  WooCommerce: any;
  products: any[];
  page: number;
  category: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {

    this.page = 1;
    this.category = this.navParams.get("category");
    console.log("CATEGORY SELECTED : "+this.category);
    
        this.WooCommerce = WC({
          url:"http://localhost:8080/wordpress",
          consumerKey:"ck_371cc05dc2eee27c7eb034f3a0837ba0f934e0cf",
          consumerSecret:"cs_4448b6284f264fa9d515b80e7c26662ad7348b2b",
          version: 'v2'
        });
    
        this.WooCommerce.getAsync("products?filter[category]="+this.category.slug).then((data) => {
          console.log("GETTING PRODUCT CATEGORIES !!!!!!!!!!!");
          this.products = JSON.parse(data.body).products;
          console.log(this.products);
        }, (err) => {
          console.log(err)
        })
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsByCategoryPage');
  }


  loadMoreProducts(event){
    
    this.page ++;
    
    this.WooCommerce.getAsync("products?filter[category]="+this.category.slug+"&page="+this.page).then( (data)=> {
          
      console.log("LOADING MORE PRODUCTS of PAGE : "+this.page);
      let tempProducts = JSON.parse(data.body).products;
      console.log(tempProducts);
      this.products = this.products.concat(tempProducts);
      
      if(tempProducts.length < 10) {
        event.enable(false);
      
        this.toastCtrl.create({
          message: "No more products!",
          duration: 5000
        }).present();
      }
    
    }, (err) => {
      console.log(err)
    })
  }
  openProductPage(product) {
    this.navCtrl.push(ProductDetailsPage, {"product": product})
  }
  
}
