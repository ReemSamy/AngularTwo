import { Component, EventEmitter, Output } from '@angular/core';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent {
@Output() onDepartmentAdd:EventEmitter<Department>=new EventEmitter<Department>();
NewDept=new Department();
Add_D()
{
  this.onDepartmentAdd.emit(this.NewDept);
}
}
