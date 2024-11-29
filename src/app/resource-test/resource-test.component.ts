import { Component, computed, effect, resource, signal } from '@angular/core';

@Component({
  selector: 'app-resource-test',
  imports: [],
  templateUrl: './resource-test.component.html',
  styleUrl: './resource-test.component.scss'
})
export class ResourceTestComponent {

  // to create a resource then we need to use the resource function
  // this function takes an array of options
  user:any = resource({
    loader: () => fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()) //this is only required option
    // request:
    // equal:
    // injector:
   });

   login = signal('pandu');
   user2:any = resource({
    request : this.login,
    loader: () => fetch('https://jsonplaceholder.typicode.com/users/?login=' + this.login())
                     .then(response => response.json()) //this is only required option
   });

   api = signal('https://jsonplaceholder.typicode.com/users')
   user3:any = resource({
    request : () => {
      return {
        first : this.login(),
        second : this.api()
      }
    },
    loader: () => fetch(this.api() + '?login=' + this.login())
                     .then(response => response.json()) //this is only required option
   });

   login2 = computed( () => {
    return this.user.value()?.name.toLowerCase();
   });

   log = effect(() =>{
    console.log(this.user.value());
   })

  constructor(){
    console.log(this.user);

    // setTimeout(() => {
    //   console.log("First : " + this.user.reload()) //first requset
    //   //reload is returned true if the request was successfully intialized, false if it was'nt
    // }, 10000);

    // setTimeout(() => {
    //   console.log("Second : " + this.user.reload()) //ignored
    // }, 10000);

    // setTimeout(() => {
    //   this.login.set('kumar');
    //   console.log('new value ; ' + this.login());
    // }, 3000);
  }

  userUpdate(){
    this.user.value.set((currentValue:any) => {
       let newValue = {
        id: currentValue.id * 2,
        name: currentValue.name.toUpperCase()
       }
       return newValue;
    })
  }

  userUpdatenovalue(){
    this.user.value.set({
      id: 0,
      name: 'noname'
    })
  }
}
