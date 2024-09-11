import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**Common Approach:
 * Create the data members
 * Create the function event handlers
 * Develop the HTML and bind the data
 * Develop the CSS for UI experience
 */
@Component({
  selector: 'app-calc',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {
  fVal : number = 0.0;
  sVal : number = 0.0;
  res : number = 0.0;
  operand :string = "Add";

  display : boolean = false;
  onCalc(){
    switch(this.operand){
      case "Add" : this.res = this.fVal + this.sVal;break;
      case "Subtract" : this.res = this.fVal - this.sVal;break;
      case "Multiply" : this.res = this.fVal * this.sVal;break;
      case "Divide" : this.res = this.fVal / this.sVal;break;
    }
    this.display = true;
  }
  
}
