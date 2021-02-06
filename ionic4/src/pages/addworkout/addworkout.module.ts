import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddworkoutPage } from './addworkout';

@NgModule({
  declarations: [
    AddworkoutPage,
  ],
  imports: [
    IonicPageModule.forChild(AddworkoutPage),
  ],
})
export class AddworkoutPageModule {}
