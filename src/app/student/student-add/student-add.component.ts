import { Component, EventEmitter, Output } from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent {

  @Output() onStudentAdd:EventEmitter<Student>=new EventEmitter<Student>();
  nstd=new Student();
  Add(){
    this.onStudentAdd.emit(this.nstd);
  }
}
