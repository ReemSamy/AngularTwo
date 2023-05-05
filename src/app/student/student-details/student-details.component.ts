import { Component, Input ,Output,EventEmitter} from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  @Output() onHide:EventEmitter<boolean>=new EventEmitter<boolean>();
  @Input()   studentDetails=new Student();
  hideme(){
      this.onHide.emit(false);
  }
  
}
