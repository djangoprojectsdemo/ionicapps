import { Component } from '@angular/core';

import { AboutPage } from '../about/about';


import { TodosPage } from '../todos/todos';
import { AddTodoPage } from '../add-todo/add-todo';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TodosPage;
  tab2Root = AddTodoPage;
  tab3Root = AboutPage;

  constructor() {
    console.log("class:TabsPage -- Fun:constructor");

  }
}
