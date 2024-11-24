import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-comp-3',
  imports: [],
  templateUrl: './comp-3.component.html',
  styleUrl: './comp-3.component.scss'
})
export class Comp3Component {
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
