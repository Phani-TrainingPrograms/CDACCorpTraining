import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; //this lib is used for async function handling called Observables.
import { Employee } from '../Models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl : string = "http://localhost:1234/empList";
  //TS will use this parameter in the constructor as a field/member of the class
  constructor(private http : HttpClient) {
    //injected the HttpClient for accessing HTTP-REST services. 
  }
  //returns an observable with data of the type Employee[]
  getAllEmployees() : Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl);
  }

  getEmployeeById(id: number) : Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }

  updateEmployee(emp : Employee) : Observable<any>{
    const tempUrl = this.baseUrl + "/" + emp.id;
    return this.http.put<any>(tempUrl, emp);
  }
}
