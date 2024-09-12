import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageFile',
  standalone: true
})
export class ImageFilePipe implements PipeTransform {

  transform(filename: string, ...args: unknown[]): string {
    return "images/" + filename;
  }

}
