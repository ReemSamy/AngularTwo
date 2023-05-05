import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-update',
  templateUrl: './department-update.component.html',
  styleUrls: ['./department-update.component.css']
})
export class DepartmentUpdateComponent {
@Output() OnDepartmentUpdate :EventEmitter<Department>=new EventEmitter<Department>();
@Input() DeptUpdt=new Department();
Update()
{
  
}
}


