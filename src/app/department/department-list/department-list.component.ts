import { Component } from '@angular/core';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent {
  DetailsFlag=false;
  departments:Department[]=[
    new Department(1,"PD","Alex"),
    new Department(2,"AI","Cairo"),
    new Department(3,"SA","Mansoura"),
    new Department(4,"OS","Maadi"),
    new Department(5,"Mobile","Garden-City"),
    new Department(6,"Cloud","Tanta"),
  ];
  newDept= new Department();
  ShowList(id:number)
  {
    for (let index = 0; index < this.departments.length; index++) {
     if(this.departments[index].id==id)
     {
      this.newDept=this.departments[index];
      this.DetailsFlag=true;
      break;
     }  
    }
  }
  AddDepartment(s:Department)
  {
    this.departments.push(s);
  }
  DeleteDept(id:number)
  {
    alert("This Department Will Be Deleted Confirm??");
    for (let index = 0; index < this.departments.length; index++) {
      if (this.departments[index].id==id)
      {
        this.departments.splice(index, 1);
        break;
      } 
    }
  }
  UpdateDepartment(d: Department)
  {
    for (let index = 0; index < this.departments.length; index++) {
      if(this.departments[index].id==d.id)
      {
        this.departments[index].name = d.name;
        this.departments[index].Location = d.Location;
        //this.updateFlag=true;
        break;
      }
    }
  }

}
