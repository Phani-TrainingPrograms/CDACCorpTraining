import { Component, OnInit } from '@angular/core';
import { Employee } from '../../Models/employee';
import { EmployeeService } from '../../Services/employee.service';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ImageFilePipe } from '../../Pipes/image-file.pipe';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-emp-view',
  standalone: true,
  imports: [CommonModule, ImageFilePipe, RouterLink, MatIconModule],
  templateUrl: './emp-view.component.html',
  styles: ``
})
export class EmpViewComponent implements OnInit {
  id : number = 0;
  selectedEmp : Employee = {} as Employee;

  constructor(private empService : EmployeeService, private activatedRoute : ActivatedRoute){

  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parameters : ParamMap)=>{
      this.id = parseInt(parameters.get("id")!)
      this.empService.getEmployeeById(this.id).subscribe((result : Employee)=>{
        this.selectedEmp = result;
      })      
    })
  }
}
