import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TodosPage } from '../todos/todos';

@Component({
  selector: 'page-add-todo',
  templateUrl: 'add-todo.html',
})
export class AddTodoPage {

   todos:any;
   todo:any;
  constructor(public storage:Storage,public navCtrl: NavController, public navParams: NavParams) {
    console.log("class:AddTodoPage -- Fun:constructor");
    this.todo={
  id:'',
  text:'',
  body:'',
  due:''
}
    
}

  ionViewDidLoad() {
    console.log("class:AddTodoPage -- Fun:ionviewDidLoad");
    this.storage.ready().then(()=>{
    
    this.storage.get('todos').then((val)=>{
     // console.log(val);
  if(val){
    this.todos=JSON.parse(val);
  }else{
    this.todos=[];
  }

}).catch((err)=>{
  console.log(err);
  });
 });
  }
  guidGenerator() {
    console.log("class:AddTodoPage -- Fun:guidGenerator");
    let S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}
onAddSubmit(){
  console.log("class:AddTodoPage -- Fun:onAddSubmit");
  console.log(this.todo.text);
  console.log(this.todo.body);
  console.log(this.todo.due);
 this.todo.id=this.guidGenerator();
  this.todos.push(this.todo);
  this.storage.ready().then(()=>{
    //set todo
    let str =JSON.stringify(this.todos);
    console.log("following is the todos list :"+str );
  this.storage.set('todos',str);

 //Redirect
 this.navCtrl.push(TodosPage);

 });
}

}
