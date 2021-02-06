import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PopoverController, LoadingController, AlertController } from 'ionic-angular';
import { ShoppingListService } from '../../services/shopping-list';
import { Ingredient } from '../../models/ingredient';

import { DatabasOptionsPage } from '../database-options/database-options';
import { AuthService } from '../../services/auth';


@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  listItems:Ingredient[];
constructor(private slService:ShoppingListService,
private popoverCtrl:PopoverController ,private authService:AuthService,
private loadingCtrl:LoadingController,private alertCtrl:AlertController){
  console.log("class:ShoppingListPage -- Fun:constructor");
}

 ionViewWillEnter(){
  console.log("class:ShoppingListPage -- Fun:ionViewWillEnter");
   this.loadItems();
} 

  onAddItem(form:NgForm){
    console.log("class:ShoppingListPage -- Fun:onAddItem");
   this.slService.addItem(form.value.ingredientName,form.value.amount);
   form.reset();
   this.loadItems();
 }
 onCheckItem(index:number){
  console.log("class:ShoppingListPage -- Fun:onCheckItem");
this.slService.removeItem(index);
this.loadItems();
 }

 onShowOptions(event:MouseEvent){
   const loading =this.loadingCtrl.create({
    content:'Please wait...'
   });
   const popover = this.popoverCtrl.create(DatabasOptionsPage);
   popover.present({ev:event});
   popover.onDidDismiss(
     data => {
       if(!data) {
         return;
       }
       if(data.action == 'load'){
         loading.present();
        this.authService.getActiveUser().getToken()
        .then(
          (token:string)=>{
          this.slService.fetchList(token)
          .subscribe(
            (list:Ingredient[]) =>{
              loading.dismiss();
                if(list) {
                  this.listItems =list;
                } else {
                  this.listItems =[];
                }
            },
            error =>{
              loading.dismiss();
              this.handleError(error.message);
            }
          );
          }
        );
       } else if (data.action == 'store'){
         loading.present();
         this.authService.getActiveUser().getToken()
        .then(
          (token:string)=>{
          this.slService.storeList(token)
          .subscribe(
            () => loading.dismiss(),
            error =>{
              loading.dismiss();
             this.handleError(error.message);
            }
          );
          }
        );
        
       }
     }
     );  
 }
private loadItems(){
  console.log("class:ShoppingListPage -- Fun:loadItems");
  this.listItems=this.slService.getItems();

}
private handleError(errorMessage:string){
  const alert =this.alertCtrl.create({
 title:'An error occurred!',
 message:errorMessage,
 buttons:['Ok']
  });
  alert.present();
}
}
