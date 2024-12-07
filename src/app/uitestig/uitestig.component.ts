import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-uitestig',
  imports: [],
  templateUrl: './uitestig.component.html',
  styleUrl: './uitestig.component.scss'
})
export class UitestigComponent {

  constructor(private api:ApiService){}

  num1 = 1;
  num2 = 2;
  result:any;
  onAdd(){
    this.result = Number(this.num1) + Number(this.num2) + 1;
  }

  getAddition(){
    this.result = this.getSumofTwonum(this.num1, this.num2);
  }

  getSumofTwonum(num1:any,num2:any){
    return num1 + num2 + 2;
  }

  getAdditionfromService(){
    this.result = this.api.addTwono(this.num1, this.num2)
  }
}
