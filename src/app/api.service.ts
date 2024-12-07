import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  // signals can wrap values of any type
  qty = signal(2);
  name = signal('pandu');
  status = signal(true);
  levels = signal(['low', 'medium' , 'high']);
  phone = signal({
    mobile: 'moto',
    color:'blue',
    price: 5000
  });

  getMode = signal(() => {
    return 'normal';
  });


  addTwono(n1:any,n2:any){
    return n1 + n2;
  }
}
