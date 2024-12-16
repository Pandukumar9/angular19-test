import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.scss'
})
export class GetApiComponent {

  constructor(private http:HttpClient){

  }

  getproducsts(){
    this.http.get("https://fakestoreapi.com/products").subscribe(res => {
      console.log(res,'res');
    })
  }
}
