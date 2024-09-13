import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-form.component.html',
  styles: ``
})
export class TemplateFormComponent {
  onSubmit(form : NgForm){
    if(form.valid){
      alert("Form is submited");
    }
  }
}
