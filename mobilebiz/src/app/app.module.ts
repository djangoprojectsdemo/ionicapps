import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { ListingDetailsPage } from '../pages/listing-details/listing-details';
import { AddPage } from '../pages/add/add';
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';



export const firebaseConfig= {
 
  apiKey: "AIzaSyDbpcCsmm8mdap94Jn00kpBSXF5XXq0kk8",
  authDomain: "mobilebiz-fc315.firebaseapp.com",
  databaseURL: "https://mobilebiz-fc315.firebaseio.com",
  projectId: "mobilebiz-fc315",
  storageBucket: "mobilebiz-fc315.appspot.com",
  messagingSenderId: "945117524984"
  }

  // const firebaseAuthConfig = {
  //   provider: AuthProviders.Google,
  //   method: AuthMethods.Popup
  // }

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ListingDetailsPage,
    AddPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ListingDetailsPage,
    AddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
