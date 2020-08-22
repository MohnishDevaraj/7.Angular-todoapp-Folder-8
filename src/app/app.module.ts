import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoFormComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, FormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
You need to install: npm install bootstrap
You have to install: npm i @fortawesome/angular-fontawesome
You have to install: npm install @fortawesome/fontawesome-svg-core
You have to install: npm install @fortawesome/free-solid-svg-icons
I am creating a folder: ng g c components/Todos
In components, it is created as todos but not Todo but in 
todo.component.ts it is created Todo but still its ok if its small
I am creating a folder: ng g c components/TodoForm
I am creating a folder: ng g c layout/header
I am creating a folder: ng generate service service/todo
*/
