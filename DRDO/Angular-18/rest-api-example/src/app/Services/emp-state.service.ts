import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface MyStateData{
  id : number;
  name : string;
  amount : number;
}


@Injectable({
  providedIn: 'root'
})
export class EmpStateService {
  //we shall maintain a list of data that shall be used for all the components. 
  private dataSubject = new BehaviorSubject<MyStateData[]>([]);

  data$ : Observable<MyStateData[]> = this.dataSubject.asObservable();

  //////////methods to manage the array with crud operations///////////////////
  addRecord(rec : MyStateData){
    const current = this.dataSubject.value;
    this.dataSubject.next([...current, rec]);
  }

  removeRecord(id : number){
    const current = this.dataSubject.value.filter(rec => rec.id != id);
    this.dataSubject.next(current);
  }

  updateRecord(updatedRec : MyStateData){
    const current = this.dataSubject.value.map(e => e.id == updatedRec.id ? updatedRec : e);
    this.dataSubject.next(current);
  }
  ////////////////////No need for get as data$ is public variable and is accessible. 
}
