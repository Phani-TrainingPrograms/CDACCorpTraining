import { Component, OnInit } from '@angular/core';
import { Employee } from '../../Models/employee';
import { EmployeeService } from '../../Services/employee.service';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ImageFilePipe } from '../../Pipes/image-file.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-emp-edit',
  standalone: true,
  imports: [CommonModule, RouterLink, ImageFilePipe, FormsModule],
  templateUrl: './emp-edit.component.html',
  styles: ``
})
export class EmpEditComponent implements OnInit{
  id : number = 0;
  selectedEmp : Employee = {} as Employee;
  message : any = {};
  constructor(private empService : EmployeeService, private activatedRoute : ActivatedRoute){

  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parameters : ParamMap)=>{
      this.id = parseInt(parameters.get("id")!);
      this.empService.getEmployeeById(this.id).subscribe((data)=>{
        this.selectedEmp = data;
      })
    })
  }

  onUpdate(){
    this.empService.updateEmployee(this.selectedEmp).subscribe((data : any)=>{
      this.message = data;
    });
  }


}
