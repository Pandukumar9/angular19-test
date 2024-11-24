import { Component } from '@angular/core';
import { Comp2Component } from "../comp-2/comp-2.component";
import { Comp3Component } from '../comp-3/comp-3.component';
import { Comp1Component } from '../comp-1/comp-1.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [Comp2Component,Comp1Component,Comp3Component,MatSlideToggleModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
   displayMode = 'hour';
   isChecked:boolean=false;
  //  isChecked == false?

  getdata(){
    return 'saikumar';
  }

  getTest(){
    return 'testing';
  }
}
