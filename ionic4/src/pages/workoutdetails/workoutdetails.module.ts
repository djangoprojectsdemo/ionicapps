import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkoutdetailsPage } from './workoutdetails';

@NgModule({
  declarations: [
    WorkoutdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkoutdetailsPage),
  ],
})
export class WorkoutdetailsPageModule {}
