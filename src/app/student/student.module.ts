import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCrudComponent } from './student-crud/student-crud.component';
import { FormsModule } from '@angular/forms';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentDetailsComponent } from './student-details/student-details.component';



@NgModule({
  declarations: [
    StudentListComponent,
    StudentCrudComponent,
    StudentAddComponent,
    StudentDetailsComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[StudentListComponent,StudentCrudComponent]
})
export class StudentModule { }
