import { Component, computed, effect, input } from '@angular/core';

@Component({
  selector: 'app-comp-1',
  imports: [],
  templateUrl: './comp-1.component.html',
  styleUrl: './comp-1.component.scss'
})
export class Comp1Component {
  // priceMode = input(); //no initial value default and this optional input
  // priceMode = input('month');//we set initial value and this is one type

  // priceMode = input.required();// this is seccondd type and this is required input


  // priceMode = input<number>(); //accecpt number
  // priceMode = input.required<number>(); //accecpt number and required
  // priceMode = input<number | string>();

  // priceMode = input('month', {alias : 'planType'});

  // getMode(){
  //   return this.priceMode();
  // }

  // priceMode = input.required({alias : 'planType'});/

  // priceMode = input('month', {
  //   transform: (value) => {
  //     return value + 'ly';
  //   }
  // });

  // priceMode = input('month', {  //it will accept the string
  //   transform: (value) => value + 'ly'
  // });

  // priceMode = input(undefined, {  //it will accept the anything
  //   transform: (value) => value + 'ly'
  // });

  //   priceMode = input('month', {  //it will accept the string and ifno value is passed then this fucntion not executed.
  //   transform: (value:string | number) => value + 'ly'
  // });

  // priceMode = input('month', {  //it will accept the string and ifno value is passed then this fucntion not executed.
  //   transform: (value:string | number) => value + 'ly',
  //   alias: 'mode' //passing options
  // });

  // priceMode = input.required('month', {  //it will accept the string and ifno value is passed then this fucntion not executed.
  //   transform: (value:string | number) => value + 'ly',
  //   alias: 'mode' //passing options
  // });

  constructor(){
    let logPrice = effect(() => {
      console.log('effect : ' + this.price());
    })
  }
  // private logPrice = effect(() => {
  //   console.log('effect : ' + this.price());
  // })

  priceMode = input('month');
  name = input('default');
  // hourlyPrice = input(0)
  // storage = input(0);

  hourlyPrice = input.required<number>()
  storage = input.required<number>();

  price = computed(() => {
    if(this.priceMode() === 'month'){
      return Math.round(this.hourlyPrice() * 24 * 30)
    }
    return this.hourlyPrice();
  });



}
