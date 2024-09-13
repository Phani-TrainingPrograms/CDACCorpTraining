import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmpStateService, MyStateData } from '../../Services/emp-state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-emp-state',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './emp-state.component.html',
  styles: ``
})
export class EmpStateComponent{
  newRec : MyStateData = {} as MyStateData;
  myData : Observable<MyStateData[]>; //This is the data that we extract from the BehaviourSubject. 

  constructor(private stateservice : EmpStateService) {
    this.myData = this.stateservice.data$;
  }
  onAddRecord(){
    this.newRec.id = Date.now()//Generates a unique id based on timestamp..
    this.stateservice.addRecord(this.newRec);
    this.newRec = {} as MyStateData;
  }
  onUpdateRecord(){
    const id = prompt("Enter the Id of the record U want to update");
    this.newRec.id = Number(id);
    this.stateservice.updateRecord(this.newRec);
  }


}
