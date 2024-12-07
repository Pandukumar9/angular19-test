import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-signal-learnpn',
  imports: [],
  templateUrl: './signal-learnpn.component.html',
  styleUrl: './signal-learnpn.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush //if i use this then coursename will change but not render
})
export class SignalLearnpnComponent implements OnInit {

  fname = signal('pandu');

  lname = signal('kumar');

  courseName:string = 'Angular';

  rollNo = signal<number>(0);

  constructor(){
    const value = this.fname();
    setTimeout(() => {
      this.courseName = "React js";
      // this.fname.set("Madhu");
    }, 4000);
  }
  ngOnInit() {
  }

  increment(){
    this.rollNo.update(oldVal => oldVal + 1);
  }

}
