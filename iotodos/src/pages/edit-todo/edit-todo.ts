import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TodoDetailsPage } from '../todo-details/todo-details';


@Component({
  selector: 'page-edit-todo',
  templateUrl: 'edit-todo.html',
})
export class EditTodoPage {
todo:any;
  constructor(public storage:Storage,public navCtrl: NavController, public navParams: NavParams) {
    console.log("class:EditTodoPage -- Fun:constructor");
  }

  ionViewDidLoad() {
    console.log("class:EditTodoPage -- Fun:ionViewDidLoad");
    this.todo={
      id:this.navParams.get('id'),
      text:this.navParams.get('text'),
      body:this.navParams.get('body'),
      due:this.navParams.get('due'),
    }
  }
  ionViewDidEnter() {
    console.log("class:EditTodoPage -- Fun:ionViewDidEnter");
    this.todo={
      id:this.navParams.get('id'),
      text:this.navParams.get('text'),
      body:this.navParams.get('body'),
      due:this.navParams.get('due'),
    }
  }
  onEditSubmit(){
    console.log("class:EditTodoPage -- Fun:onEditSubmit");
    this.storage.ready().then(() =>{
      this.storage.get('todos').then((val)=>{
let todos =JSON.parse(val);
for(let i=0;i < todos.length;i++){
  if(todos[i].id == this.todo.id){
    todos[i] ={
      text:this.todo.text,
      body:this.todo.body,
      due:this.todo.due
    }
  }
}
this.storage.set('todos',JSON.stringify(todos));
this.navCtrl.push(TodoDetailsPage,this.todo);
      });
    });
  }

}
