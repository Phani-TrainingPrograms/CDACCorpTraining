import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; //this lib is used for async function handling called Observables.
import { Employee } from '../Models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl : string = "http://localhost:1234";
  //TS will use this parameter in the constructor as a field/member of the class
  constructor(private http : HttpClient) {
    
  }

  getAllEmployees() : Observable<Employee[]>{
    const tempUrl = this.baseUrl + "/" + "empList";
    return this.http.get<Employee[]>(tempUrl);
  }


}
