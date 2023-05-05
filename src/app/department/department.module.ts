import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentUpdateComponent } from './department-update/department-update.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DepartmentDetailsComponent,
    DepartmentAddComponent,
    DepartmentUpdateComponent,
    DepartmentListComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports: [DepartmentListComponent,DepartmentAddComponent,DepartmentDetailsComponent,DepartmentUpdateComponent]
})
export class DepartmentModule { }
