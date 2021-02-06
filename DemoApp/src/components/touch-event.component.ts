import { Component } from '@angular/core';
@Component({
    selector:'app-touch-event',
    template:`
    <div class="gestures"
    (click)="onElementClicked()">
    Click me!
   </div>
   
    <div class="gestures"
    (tap)="onElementTapped()">
    Tap me!</div>
   
    <div class="gestures"
    (press)="onElementPressed()">
    Long Pressed !</div>
    `
    
})
export class TouchEventComponent{


    onElementClicked(){
        console.log('I was clicked or touched');
      }
      onElementTapped(){
        console.log('I was Tapped!');
      }
      onElementPressed(){
        console.log('I was pressed long! ');
      }
}