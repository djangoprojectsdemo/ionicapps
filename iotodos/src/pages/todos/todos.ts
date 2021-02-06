import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TodoDetailsPage } from '../todo-details/todo-details';
@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html',
})
export class TodosPage {

  todos:any;

  constructor(public storage:Storage ,public navCtrl: NavController, public navParams: NavParams) {
    console.log("class:TodosPage -- Fun:constructor");
  }
  
  
  ionViewDidLoad() {
    console.log("class:TodosPage -- Fun:ionViewDidEnter");
    this.storage.ready().then(()=>{
      console.log("class:TodosPage -- Fun:ionViewDidEnter -- loc:1");
      this.storage.get('todos').then((val)=>{
        console.log("class:TodosPage -- Fun:ionViewDidEnter -- loc:2");
        console.log(val);
    if(val){
      console.log("class:TodosPage -- Fun:ionViewDidEnter -- loc:3");
      this.todos=JSON.parse(val);
    }else{
      console.log("class:TodosPage -- Fun:ionViewDidEnter -- loc:4");
      this.todos=[];
    }
  
  }).catch((err)=>{
    console.log("class:TodosPage -- Fun:ionViewDidEnter -- loc:5");
    console.log(err);
   
    });
   });
   console.log("class:TodosPage -- Fun:ionViewDidEnter -- loc:end");
  }

  todoSelected(todo){
    this.navCtrl.push(TodoDetailsPage,todo);
  }
}