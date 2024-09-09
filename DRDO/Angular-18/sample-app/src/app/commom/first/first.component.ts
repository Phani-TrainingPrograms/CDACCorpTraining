import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="col-md-6 m-0 card"> 
                <div style="border: 2px solid lightcoral; border-radius: 5px; padding: 4px;">
                  <h1>Mr. {{ name| uppercase }}</h1>
                  <hr>
                  <p>Address: {{ address }}</p>
                  <p> Salary: {{ salary | currency : 'INR' }}</p>
                  <p>Date of Birth: {{dob | date :'EEEE, MMMM d, y'}}
                  <p>{{obj | json}}</p>
                </div>
              </div>`,
  styles: '.card{color : indianred; background-color : yellow}'
})
export class FirstComponent {
  name : string = "Phaniraj";
  address : string ="Bangalore";
  salary  : number = 45000;
  dob: any = new Date(1976, 11, 1);
  obj : any ={
    title : "2 States", author : "Some Guy", price : 400
  }
}
