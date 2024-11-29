import { Component } from '@angular/core';

@Component({
  selector: 'app-user-single-comp',
  imports: [],
  template: `
    <h2 class="singlestyle"> Hi frieds good morning im single componnent</h2>
  `,
  styles: `
    .singlestyle{
      font-size : 30px;
      color: blue;
      font-weight: bold;
      background-color: gold;
      padding : 20px;
      border-radius: 20px;
    }
  `
})
export class UserSingleCompComponent {

}
