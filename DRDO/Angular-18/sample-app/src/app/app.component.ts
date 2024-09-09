import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './commom/first/first.component';
import { SinglefileComponent } from './common/singlefile/singlefile.component';
import { CommonModule } from '@angular/common';
import { ReversePipe } from './Pipes/reverse.pipe';
import { BindingComponent } from "./Components/binding/binding.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponent, SinglefileComponent, ReversePipe, BindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My First Angular App!!!';
}
