import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.scss'
})
export class LinkedSignalComponent {
  fname = signal('Pandu');
  lname = signal('Kumar');

  fullName = linkedSignal({
    source: this.fname,
    computation: (newOptions,previous) => {
      const fullName = newOptions + " " + this.lname();
      return fullName;
    }
  });

  changename(){
    this.fname.set("Karthik");
  }

  user = signal({id:1 , name: 'Pandu'});

  email = linkedSignal({
    source : this.user,
    computation: user => `${user.name+user.id}@gmail.com`,
    equal: (a:any,b:any) => a.id !== b.id
  })

  changeId(){
    this.user.set({id:123, name:"pandu"});
  }

}
