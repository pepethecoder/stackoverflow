import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from './services/task.service';
import { ReactiveFormsModule } from '@angular/forms';
import { StatusDirective } from './directives/status.directive';
@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    StatusDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
