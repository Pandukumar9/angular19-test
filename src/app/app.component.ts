import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LatestupdatesComponent } from './latestupdates/latestupdates.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { SignalTest1Component } from './signal-test-1/signal-test-1.component';
@Component({
  selector: 'app-root',
  imports: [CommonModule,LatestupdatesComponent,DashboardComponent,FormsModule,SignalTest1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular19-test';
  // constructor(private modalService: NgbModal) {
  // }

  open(modal: any){
    // this.modalService.open(modal);
  }
}
