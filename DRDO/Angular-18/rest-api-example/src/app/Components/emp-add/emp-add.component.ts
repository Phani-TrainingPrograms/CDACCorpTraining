import { Component } from '@angular/core';
import { Employee } from '../../Models/employee';
import { EmployeeService } from '../../Services/employee.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-emp-add',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './emp-add.component.html',
  styles: ``
})
export class EmpAddComponent {
  emp : Employee = {} as Employee;
  empImg : File | null = null;
  constructor(private empService : EmployeeService, private router : Router, private httpClient : HttpClient) {
    
  }

  onFileSelect(event : Event){
    const inputFile = event.target as HTMLInputElement;
    if(inputFile.files?.length){
      this.empImg = inputFile.files[0];
      this.emp.empPic = this.empImg.name
    }  
  }
  onSubmit(){
    if(this.empImg && this.emp){
      const formData = new FormData();
      formData.append('image', this.empImg);
      this.httpClient.post('http://localhost:1234/empList/upload', formData).subscribe(resp =>{
        console.log(resp)
      })
    }
    debugger;
    this.empService.addEmployee(this.emp).subscribe((data : Employee)=>{
      alert("Employee added Successfully");
      this.router.navigate(['/'])//Redirects to home page and shall display emplist. 
    })
    //Later we shall add the logic to add dynamic image files into the System. 
  }
}
