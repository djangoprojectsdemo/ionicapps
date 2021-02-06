import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WorkoutdetailsPage } from '../pages/workoutdetails/workoutdetails';
import { AddworkoutPage } from '../pages/addworkout/addworkout';
import { AboutPage } from '../pages/about/about';
import { WorkouttypePage } from '../pages/workouttype/workouttype';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WorkoutdetailsPage,
    AddworkoutPage,
    AboutPage,
    WorkouttypePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WorkoutdetailsPage,
    AddworkoutPage,
    AboutPage,
    WorkouttypePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
