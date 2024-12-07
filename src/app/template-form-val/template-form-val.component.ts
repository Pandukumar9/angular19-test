import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form-val',
  imports: [FormsModule,NgIf],
  templateUrl: './template-form-val.component.html',
  styleUrl: './template-form-val.component.scss'
})
export class TemplateFormValComponent {
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted:', form.value);
      alert('Registration successful!');
      form.reset(); // Reset the form
    } else {
      console.log('Form is invalid');
    }
  }
}
