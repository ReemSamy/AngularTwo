import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent {
  detailsFlag = false;
   @Output()  onHide :EventEmitter<boolean>=new EventEmitter<boolean>();
  @Input() DepartmentDetails= new Department();
  hideD()
  {
    this.onHide.emit(true);
  }

}
