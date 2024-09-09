import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [],
  templateUrl: './binding.component.html',
  styles: ``
})
export class BindingComponent {
  //create a set of data
  title : string ="Binding Component Example";
  imgFile : string = "images/Phani.png";
  data : string = "Sample Text";
  //U can bind the data to the UI in 2 ways: Interpolation and Property binding. Interpollation binds the data as string only. Property binding binds the data based on the type of the data that it is associated with. 

  ///Event handlers here..........
  onSubmit(){
    this.data = "Changing the value of the data";
    alert("Button was clicked");
  }

  //Expected to be triggered when the user types in the 1st Input box....
  onUpdate(event: any){
    this.data = event.target.value;
    this.title =event.target.value;
  }
}
