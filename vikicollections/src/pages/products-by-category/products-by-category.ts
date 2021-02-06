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
          url:"https://www.vikicollections.com",
          consumerKey:"ck_01df55d1362f56b97a3ae3b9b3b3fc833dac0006",
          consumerSecret:"cs_b38c404e81a9c34b4c50a7877893983ebd8d4f05" ,
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
