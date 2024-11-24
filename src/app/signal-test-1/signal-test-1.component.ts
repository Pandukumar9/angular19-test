import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-signal-test-1',
  imports: [],
  templateUrl: './signal-test-1.component.html',
  styleUrl: './signal-test-1.component.scss'
})
export class SignalTest1Component {
  price = 100;
  // quantity = 1; //this is normal
  quantity = signal(1); //this is signal

  // total = this.price * this.quantity();

  // ths computed fucntion is a special function used to create a computed signal
  // total = computed(() => {
  //   return this.price * this.quantity(); //this is normal
  // })

  plus(){
    // this.quantity.set(this.quantity() + 1); // normal way
    this.quantity.update(value => value + 1); //update method first value is current value passed as parameter
    //and second value is new value we will get and this will return only
  }
  id = signal(1); //this is signal
  constructor(){
    effect(() => {
      console.log('First effect');
      console.log("quantity : " + this.quantity ); //  angular tracks changes in identified signal
      // everytime signal value changed then the effect will be executed
      //we can use two or more signals inn an effect but we need to do it correctly
      console.log("total:" + this.total());
      console.log("id :" + this.id());
      //here i used 3 signals so incase place the signal value change then trigger all so this is not good
      //the effect is executed if one or more signals have been changed
    });

    //we need to take separate effect for every signal
    // effect(() => {
    //   console.log('second effect');
    //   console.log("id :" + this.id());
    // })

    //if we want to change the signal inside the effect then we will need to use option
    //signals being changed in an effect without careful consideration can results in loops and other problems
    //effects can be created not only within a constructor
    effect(() => {
      console.log('second effect');
      this.id.set( 1000 );
    },{
      allowSignalWrites: true
    });
  }

  private logTotal = effect(() => {
    console.log("Total :" + this.total() );
  })
  //Angular only tracks signals whose values are gotten by calling a getter and only tracks signals being read
  //this rule is applied to computed signals and effects
  //a signal getter call must not only exist but actually be executed

  minus(){
    // this.quantity.set(this.quantity() - 1);
    this.quantity.update(value => value - 1);
    this.autoUpdate = true;
    console.log('Plus: Cliccked');
  }
  autoUpdate = true;

  total = computed(() => {
    console.log("computed signal : executed");
    if(this.autoUpdate){
      return this.price * this.quantity(); //this is not called and no tracking
    } else {
      return 0;
    }
  })
}
