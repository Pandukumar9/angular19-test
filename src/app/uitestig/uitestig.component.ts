import { Component } from '@angular/core';

@Component({
  selector: 'app-uitestig',
  imports: [],
  templateUrl: './uitestig.component.html',
  styleUrl: './uitestig.component.scss'
})
export class UitestigComponent {

  num1 = 1;
  num2 = 2;
  result:any;
  onAdd(){
    this.result = Number(this.num1) + Number(this.num2) + 1;
  }
}
