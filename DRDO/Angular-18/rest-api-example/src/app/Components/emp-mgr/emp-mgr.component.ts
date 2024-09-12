import { Component, OnInit } from '@angular/core';
import { Employee } from '../../Models/employee';
import { EmployeeService } from '../../Services/employee.service';
import { CommonModule } from '@angular/common';
import { MatCardModule} from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { ImageFilePipe } from '../../Pipes/image-file.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-emp-mgr',
  standalone: true,
  imports: [CommonModule, RouterLink, MatCardModule, MatButtonModule, ImageFilePipe],//For JSON pipe.
  templateUrl: './emp-mgr.component.html',
  styles: `
    .example-card{
      max-width : 400px;
      margin: 5px;
      background-color: yellow
    }
    .example-header-image{
      background-size : cover;
    }
  `
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
