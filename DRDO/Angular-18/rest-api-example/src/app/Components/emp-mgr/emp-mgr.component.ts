import { Component, OnInit } from '@angular/core';
import { Employee } from '../../Models/employee';
import { EmployeeService } from '../../Services/employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emp-mgr',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emp-mgr.component.html',
  styles: ``
})
export class EmpMgrComponent implements OnInit {
  empList : Employee[] = [];

  constructor(private empService : EmployeeService) {
    
  }
  ngOnInit(): void {
    this.empService.getAllEmployees().subscribe((data : Employee[])=>{
      this.empList = data;
    })
  }

}
