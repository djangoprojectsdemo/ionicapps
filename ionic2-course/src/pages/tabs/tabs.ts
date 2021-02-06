import { Component } from '@angular/core';
import { FavoritesPage } from '../favorites/favorites';
import { LibraryPage } from '../library/library';

@Component({
  selector:'page-tabs',
  template:`
  <ion-tabs selectIndex="0">
  <ion-tab [root]="FavoritesPage" tabTitle="Favorites" tabIcon="star"></ion-tab>
  <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
  </ion-tabs>
  `
})

export class TabsPage{
favoritesPage=FavoritesPage;
libraryPage=LibraryPage;
}