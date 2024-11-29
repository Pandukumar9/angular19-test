import { NgSelectModule } from '@ng-select/ng-select';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormResetEvent, FormsModule, FormSubmittedEvent, PristineChangeEvent, ReactiveFormsModule, StatusChangeEvent, TouchedChangeEvent, Validators, ValueChangeEvent } from '@angular/forms';

@Component({
  selector: 'app-signal-test-2',
  imports: [ReactiveFormsModule,FormsModule,NgSelectModule],
  templateUrl: './signal-test-2.component.html',
  styleUrl: './signal-test-2.component.scss'
})
export class SignalTest2Component implements OnInit{
  fname = new FormControl('my app');

  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    // here events is a observable and now we can tarck the changes in form and use subscribe method to subscribe to notification
    //about the changes to the form
    this.fname.events.subscribe(event => {
      if(event instanceof TouchedChangeEvent){
        console.log('touched' + event.touched);
      }
      if(event instanceof PristineChangeEvent){
        console.log('pristine' + event.pristine);
      }
      if(event instanceof ValueChangeEvent){
        console.log('value' + event.value);
      }
      if(event instanceof StatusChangeEvent){
        console.log('status' + event.status);
      }
    })

    this.userForm = this.fb.group({
      username: ['',[Validators.required, Validators.minLength(3),Validators.maxLength(20)]],
      email: [ '',[Validators.required, Validators.email]],
    });
  }
  ngOnInit() {
   this.userForm.events.subscribe(event => {
    // if(event instanceof ValueChangeEvent){
    //   console.log('username :' + event.value.username);
    //   console.log('email :' + event.value.email);
    // }
    if(event instanceof FormSubmittedEvent){
      console.log('Form : Submitted');
    }
    if(event instanceof FormResetEvent){
      console.log('Form : Reset');
    }
    //when the form is reset , other events also triggered
   })
  }

  get username() {
    return this.userForm.get('username');
  }

  get email() {
    return this.userForm.get('email');
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      alert('Form submitted successfully!');
    }
  }

  selectedCar!: number;

  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];
}
