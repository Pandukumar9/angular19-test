import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-signal-topic',
  imports: [],
  templateUrl: './signal-topic.component.html',
  styleUrl: './signal-topic.component.scss'
})
export class SignalTopicComponent implements OnInit {
  // Writable signals provide an API for updating their values directly. You create writable signals by calling the signal function with the signal's initial value:
  count = signal(0);

  ngOnInit() {
      // Signals are getter functions - calling them reads their value.
      console.log('The count is: ' + this.count());

      // To change the value of a writable signal, either .set() it directly:
      this.count.set(3);

      // or use the .update() operation to compute a new value from the previous one:
      // Increment the count by 1.
      this.count.update(value => value + 1);
  }

//   Computed signals
//   Computed signal are read-only signals that derive their value from other signals. You define computed signals using the computed function and specifying a derivation:

}
