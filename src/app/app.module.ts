import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { StudentModule } from './student/student.module';
import { DisplayComponent } from './display/display.component';
import { ShowComponent } from './show/show.component';
import { DepartmentModule } from './department/department.module';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,CoreModule,StudentModule,FormsModule,DepartmentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
