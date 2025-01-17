import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormElement } from '../models/commonmodels';

@Component({
  selector: 'app-reuse-form',
  imports: [FormsModule],
  templateUrl: './reuse-form.component.html',
  styleUrl: './reuse-form.component.scss'
})
export class ReuseFormComponent implements OnInit {

  @Input() formElements: FormElement[] = [];

  formObject:any = {};

  ngOnInit() {
    this.formElements.forEach((ele:any) => {
      this.formObject[ele.fieldName] = '';
    })
  }

  onSave(){
    const formValue = this.formObject;
  }

}
