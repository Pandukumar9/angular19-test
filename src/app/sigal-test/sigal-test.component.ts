import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-sigal-test',
  imports: [],
  templateUrl: './sigal-test.component.html',
  styleUrl: './sigal-test.component.scss'
})
export class SigalTestComponent implements OnInit{

  // Create a signal with the `signal` function.
  firstName = signal('Pandukumar');

  ngOnInit() {
     // Read a signal value by calling it— signals are functions.
    console.log(this.firstName());

     // Change the value of this signal by calling its `set` method with a new value.
    this.firstName.set('Madhukumar');

    // You can also use the `update` method to change the value
    // based on the previous value.
    this.firstName.update(name => name.toUpperCase());
  }




}
