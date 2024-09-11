import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/movie';

@Pipe({
  name: 'filter',
  standalone: true
})
//Pipe is a Class that implements an interface called PipeTransform that contains a function on how to transform the data and return to the UI. 
export class FilterPipe implements PipeTransform {

  transform(inputs: Movie[], arg: string): Movie[] {
    //if the arg is blank, it should return all the movies. 
    if(arg == "") return inputs;
    //else it should return only those movies that are containing matching title
    else{
      return inputs.filter(m => m.title.includes(arg) || m .director.includes(arg))
    }
  }

}
