import { Pipe, PipeTransform } from '@angular/core';
//Pipes are classes that implement an interface called PipeTransform which has one function called transform that U must implement. This function will contain the logic of transforming UR Input. 
@Pipe({
  name: 'reverse',
  standalone: true
})
export class ReversePipe implements PipeTransform {

  transform(inputValue: string, ...args: string[]): string {
    return inputValue.split('').reverse().join(''); //Any string given will be reversed. 
  }

}
