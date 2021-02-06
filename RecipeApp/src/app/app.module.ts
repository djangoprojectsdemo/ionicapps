import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { RecipesPage } from '../pages/recipes/recipes';
import { EditRecipePage } from '../pages/edit-recipe/edit-recipe';
import { RecipePage } from '../pages/recipe/recipe';
import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { TabsPage } from '../pages/tabs/tabs';
import { ShoppingListService } from '../services/shopping-list';
import { RecipesService } from '../services/reciepes';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { AuthService } from '../services/auth';
import { DatabasOptionsPage } from '../pages/database-options/database-options';

@NgModule({
  declarations: [
    MyApp,
    RecipesPage,
    EditRecipePage,
    RecipePage,
    ShoppingListPage,
    TabsPage,
    SigninPage,
    SignupPage,
    DatabasOptionsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RecipesPage,
    EditRecipePage,
    RecipePage,
    ShoppingListPage,
    TabsPage,
    SigninPage,
    SignupPage,
    DatabasOptionsPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShoppingListService,RecipesService,AuthService
  ]
})
export class AppModule {}
